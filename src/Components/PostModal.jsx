import styled from 'styled-components';
import React from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux'
import { postArticleAPI } from '../Actions/Index';
import { Timestamp } from 'firebase/firestore';
function PostModal(props) {

    const [editortext,seteditortext]=useState("");
    const [shareimg,setshareimg]=useState("");
    const [videolink,setvideolink]=useState("");
    const [assetArea,setassetArea]=useState("");
    const handlechange=(e) =>{
        const image=e.target.files[0];
        if(image=="" || image==undefined){
            alert('not an image , the file is a ${typeof image}');
            return;
        }
        setshareimg(image);
        console.log(image);
    }
    const switchAssetarea=(area) =>{
        setshareimg("");
        setvideolink("");
        setassetArea(area);
    }

    const postArticle=(e) =>{
        e.preventDefault();
            const payload={
                image:shareimg,
                video:videolink,
                user:props.user,
                description:editortext,
                timestamp:Timestamp.now(),
            };
            props.postArticle(payload);
            reset(e);
        

        
    };
    const reset=(e) =>{
        seteditortext("");
        setshareimg("");
        setvideolink("");
        props.handleclick(e);
    };
  return (

    <>
    { props.showModal=='open' && 
    <Container>
        <Content>
            <Header>
                <h1>Create a Post</h1>
                <button onClick={(event) => reset(event)}>
                    <img src="/images/Close.svg" alt="" />
                </button>
            </Header>
            <SharedContent>
                <Userinfo>
                    {props.user.photoURL ? (<img src={props.user.photoURL}/>
                    ):(

                    <img src="/images/user.svg" alt="" />
                    )}
                    <span>{props.user.name}</span>
                </Userinfo>
                <Editor>
                <textarea value={editortext} onChange={(e) =>seteditortext(e.target.value)} placeholder='What do you want to talk about?' autoFocus={true}>
                </textarea>
                {assetArea==='image' ?(
                <Uploadimg>
                    <input type="file" accept='image/gif, image/jpeg, image/png' name='image' id='file' style={{display:'none'}} onChange={handlechange} />
                    <p><label htmlFor="file">
                        Select an image to share</label></p>
                        {shareimg && (<img src={URL.createObjectURL(shareimg)} />)}
                        </Uploadimg>
                ):(
                        assetArea==='media' &&(
                        <>
                        <input type="text" placeholder='Please input a video link' value={videolink} onChange={(e) => setvideolink(e.target.value)} />
                        {videolink && (<ReactPlayer width={'100%'} url={videolink}/>
                        )}
                        </>
                        )
                )}
                
                </Editor>
            </SharedContent>
            <Sharecreation>
                <Attachasset>
                <Assetbutton onClick={() =>switchAssetarea('image')}>
                            <img src="/images/shared-img.png" alt="" />
                </Assetbutton>
                <Assetbutton onClick={() =>switchAssetarea('media')}>
                    <img src="/images/shared-vid.png" alt="" />
                </Assetbutton>
                </Attachasset>
                <Sharedcomment>
                    <Assetbutton>
                        <img src="/images/shared-comment.png" alt="" />
                        Anyone
                    </Assetbutton>
                </Sharedcomment>

                <Postbutton disabled={!editortext ? true:false} onClick={(event) =>postArticle(event)}>Post</Postbutton>
            </Sharecreation>
        </Content>
    </Container>
};
    </>
  )
}
const Container=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0,0,0,0.8);
    animation: fadeIn 0.3s;


`;
const Content=styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 99%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`; 
const Header=styled.div`
    display: block;
    padding:16px 20px ;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1,5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);
        svg,img{
            pointer-events: none;
        }
    }
`;
const SharedContent=styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background:transparent;
    padding: 8px 12px;
`;
const Userinfo=styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin: 5px;
    }
`;
const Sharecreation=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const Assetbutton=styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0,0,0,0.5);


`;
const Attachasset=styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${Assetbutton}{
        width: 40px;
    }
`;

const Sharedcomment=styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
    ${Assetbutton}{
        svg{
            margin-right: 5px;
            width: 20px;
            height: 20px;
        }
    }
`;
const Postbutton=styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" :"#0a66c2")};
    color: ${(props) =>(props.disabled ? "rgba(1,1,1,0.2)" : "white")};
    &:hover{
        background:${(props) =>(props.disabled ? "rgba(0,0,0,0.8)" : "#004182")};;
    }
`;
const Editor=styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }
    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;
const Uploadimg=styled.div`
    text-align:center ;
    img{
        width: 100%;
        /* max-height: 400px;
        object-fit: cover; */
    }
`;
const mapStateToProps=(state) =>{
    return{
        user:state.userState.user,
    };
};

const mapDispatchToProps=(dispatch) =>({
    postArticle:(payload) =>dispatch(postArticleAPI(payload)),
});
export default connect(mapStateToProps,mapDispatchToProps)(PostModal);