import { SET_USER,SET_LOADING_STATUS,GET_ARTICLES,REMOVE_USER } from "./Actiontype";

import { account } from "../Appwrite/Appwriteconfig";
import { ID } from "appwrite";
import { storage,database} from "../Appwrite/Appwriteconfig";



export const setUser=(payload) =>({
    type:SET_USER,
    user:payload,
})


export const setloading=(status) =>({
    type:SET_LOADING_STATUS,
    status:status
})

export const getArticle=(payload) =>({
    type:GET_ARTICLES,
    payload:payload,
})
export const reAuthenticate = async (dispatch) => {
    try {
      const response = await account.createOAuth2Session(
        'google', 
        'http://localhost:5173/Home', 
        'http://localhost:5173/',
        
      );
      console.log('Re-authentication Response:', response);
  
      const user = await account.get();
      console.log('Re-authenticated User:', user);
  
      if (user.type === 'guest') {
        console.log('Guest user detected. Re-authentication failed.');
      } else {
        console.log('User re-authenticated successfully');
        dispatch(setUser(user));
        // Dispatch user data to your state management system
      }
    } catch (error) {
      console.error('Re-authentication Error:', error);
    }
  };
export const signInAPI=()=>async(dispatch)=>{
    try{
   
   const response=await account.createOAuth2Session("google","http://localhost:5173/Home","http://localhost:5173/");
   console.log(response);
  
}catch(error){
    if(error.code === 401){
        await reAuthenticate();
    }else{
    console.error("authentication error",error);
    }
}
};
   
let isloggedout=false;

export const signoutAPI=() => async(dispatch) => {
    try{
        await account.deleteSession('current');
        //console.log("user logged out",response);
       
        localStorage.clear();
        sessionStorage.clear();
        dispatch(setUser(null));
        window.location.href='http://localhost:5173/';
        isloggedout=true;

        
    }
    catch(error){
        if(error.code === 401){
            console.error('logged out')
        }else{
        console.log("error logged out",error);
        }
    }
}


export const getUserAuth=() => async(dispatch) =>{
    if(isloggedout) return;

    try{
        const user=await account.get();
        if(user){
        console.log(user);

        dispatch(setUser(user));
        }else{
            console.log("not authenticated");
        }
    }catch(error){
        //console.log("user not authenticated",error);
            console.log('an error occured');
            //window.location.href='http://localhost:5173/';

        }
    }
    



    // return (dispatch) =>{
    //     onAuthStateChanged(auth,(user) =>{
    //         if(user){
    //             dispatch(setUser(user));
    //         }
    //     });
    // };




    // return (dispatch) =>{
    //     const auth=getAuth();
    //     signOut(auth).then(() =>{
    //         dispatch(setUser(null));
    //     })
    //     .catch((error) =>{
    //         console.log(error.message);
    //     })
    //  }
     

export function postArticleAPI(payload){
    return async (dispatch,getState) =>{
        try{
            dispatch(setloading(true));
            let sharedimgurl= "";
            //upload image if exists
            if(payload.image){
             const response=await storage.createFile(
                "673761b60029dec94eac",
                ID.unique(),
                payload.image
             );
             sharedimgurl=response.$id;
            }
           
            //add article to database
            const articleData={
                
                
                actor_description:payload.user.email,
                actor_title:payload.user.name,
                actor_date:new Date().toISOString(),
                
                video:payload.video || "",
                sharedImg:sharedimgurl,
                comments:0,
                description:payload.description,
                // timestamp:Date.now(),
            };
            await database.createDocument(
                "67376123002d14c4add9",
                "673761310026c7bad442",
                ID.unique(),
                articleData,
            );
            console.log("Artcle added successfully");
            //optimastically updating redux store
            const currentArticles=getState().articleState.articles;
            dispatch(getArticle([articleData, ...currentArticles]));
            dispatch(getArticlesAPI());
        }catch(error){
            console.log("Error posting article",error);
        }finally{
            dispatch(setloading(false));

        }
    };
}
            
                

export function getArticlesAPI(){
    return async (dispatch) =>{
      try{
        const response=await database.listDocuments(
            "67376123002d14c4add9",
            "673761310026c7bad442",
            [],
            100,
            0,
            ["actor_date"],
            ["DESC"]
        );
        console.log(response.documents);
        const articles=await Promise.all(response.documents.map(async(doc) =>{
            let sharedimgurl=null;
            if(doc.sharedImg){
                try{
                    sharedimgurl=storage.getFileView("673761b60029dec94eac",doc.sharedImg);
                }catch(error){
                    console.log("error fetching image url",error);
                }
            }
            return{
                ...doc,
                sharedimgurl,
            };
        })
    );
        // const payload=await Promise.all(articles);
        const sortedArticles=articles.sort(
            (a,b) => new Date(b.actor_date)-new Date(a.actor_date)
        );
        // console.log("Sorted articles",sortedArticles);
        dispatch(getArticle(sortedArticles));
      }catch(error){
        console.log("error finding articles",error);
      }
    };
}
        

    
        
    
