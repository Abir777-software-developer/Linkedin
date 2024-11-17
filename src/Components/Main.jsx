import styled from 'styled-components';
import React from 'react'
import PostModal from './PostModal.jsx'
import { useState } from 'react';
import { connect } from 'react-redux';
import { useEffect} from 'react';
import { getArticlesAPI } from '../Actions/Index.jsx';
import ReactPlayer from 'react-player';
function Main(props) {
  const [showModal,setshowModal]=useState("close");

  useEffect(() =>{
    props.getArticles();
  },[])
  const handleclick=(e) =>{
    e.preventDefault();
    if(e.target !==e.currentTarget){
      return;
    }
    switch(showModal){
      case "open":
        setshowModal("close");
        break;
      case "close":
        setshowModal("open");
        break;
      default:
        setshowModal("close");
        break;
    }
  }
  
  return (

    <>
    {
      //props.articles.length === 0 ?
      //<p>There are no articles</p>
      //:
    <Container>
      <ShareBox>
      <div>
        {props.user && props.user.photoURL ? (
        <img src={props.user.photoURL}/>
        ):(
        <img src="/images/user copy.svg" alt="" />
        )}
        <button onClick={handleclick}
        disabled={props.loading ? true:false}>Start a Post,try witing with AI</button>
      </div>
      <div>
      <button>
          <img src="/images/Media-icon.svg" alt="" />
          <span>Media</span>
      </button>
      <button>
        <img src="/images/Event-icon.svg" alt="" />
        <span>Event</span>
      </button>
      <button>
        <img src="/images/Article-icon.svg" alt="" />
        <span>Write Article</span>
      </button>

      </div>
      </ShareBox>
      <Content>
        
          {props.loading && <img src='/images/spin-loading.gif' alt="Loading..." />}
          {props.articles.length > 0 &&
            props.articles.map((article,key) => (
              <Article key={key}>
              <SharedActor>
                <a>
                  {/* <img src={article.actor_image} alt="" /> */}
                <div>
                  <span>{article.actor_title}</span>
                  <span>{article.actor_description}</span>
                  <span>{new Date(article.actor_date).toLocaleString()}</span>
                </div>
                </a>
            <button>
              <img src="/images/Feed-icon.svg" alt="" />
            </button>

          
            </SharedActor>
            <Description>{article.description}</Description>
            <Sharedimage>
              <a>
                {
                  article.sharedImg ? (
                    <img src={article.sharedimgurl} alt='Shared Image' />
                  ):(
                    article.video && <ReactPlayer width={'100%'} url={article.video} />
                  )
                }
              </a>
            </Sharedimage>
            <SocialCounts>
              <li>
                <button>
                  <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                  <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                  <span>75</span>
                </button>
              </li>
              <li>
                <a>
                  {article.comments}
                </a>
              </li>
            </SocialCounts>
            <SocialAction>
            <button>
              <img src="/images/like.svg" alt="" />
              <span>Like</span>

            </button>
            <button>
              <img src="/images/comment.svg" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/save.svg" alt="" />
              <span>Save</span>
            </button>
            </SocialAction>
          </Article>
      ))}
        </Content>

        <PostModal showModal={showModal} handleclick={handleclick} />
      </Container>
}
      </>
  )
}
const Container=styled.div`
        grid-area: main;

`;
const CommonCard=styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%);
`;
const ShareBox=styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div{
    button{
      outline: none;;
      color: rgba(0,0,0,0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      /* width: 40px;
      height: 62px; */
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;

    }
    &:first-child{
      display: flex;
      align-items: center;
      padding:8px 16px 0px 16px ;
      img{
        width: 48px;
        border-radius:50%;
        margin-right: 8px;
      }
      button{
        margin: 4px 0;
        flex-grow: 1;
        border-radius:35px ;
        padding-left: 16px;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button{
        img{
          margin: 0 4px 0 -2px;
          height: 26px;
        }
        span{
          color: #424040;
          font-weight:600 ;
        }
      }
    }
  }
`;

const Article=styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;

`;

const SharedActor=styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a{
    margin-right: 12px;
    flex-grow:1 ;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img{
      width: 48px;
      height: 48px;
    }
    & >div{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span{
        text-align: left;
        &:first-child{
          font-size: 14px;
          font-weight: 700;
          color: rgba(0,0,0,1);
        }
        &:nth-child(n+1){
          font-size: 12px;
          color: rgba(0,0,0,0.6);
        }
      }
    }
  }

  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    height: 36px;
    width: 36px;
    
  }
`;

const Description=styled.div`
  padding:0 16px;
  overflow: hidden;
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;

`;
const Sharedimage=styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img{
    object-fit: contain;
     width: 60%;
    height: 70%; 
  }
`;

const SocialCounts=styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li{
    margin-right: 5px;
    font-size: 12px;
    a{
      padding-left:33rem;
      text-decoration: none;
    }
    a:hover{
        cursor: pointer;
        color: #0999a6;
        text-decoration: underline;
      }
      @media (max-width:768px) {
        a{
          padding-left: 23rem;
        }
        
      }
    button{
      display: flex;
      border:none;
      background-color: white;
    }
  }

`;

const SocialAction=styled.div`
  align-items: center; 
   display: flex; 
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  
  button{
    display: flex;
    align-items: center;
    background: none;
    cursor: pointer;
    padding: 8px 12px;
    color:#0a66c2 ;
    /* height: 50px;
    width: 40px;  */
    font-size: 14px;
    border: none;
    img{
      margin-right: 4px;
      height: 20px;
      width: 20px;
    }
    span{
      display: inline-block;
    }

    &:hover{
      background-color: #e6f2f9;
      border-radius: 4px;
    }

  }
  
`;
const Content=styled.div`
  text-align: center;
  & >img{
    width: 30px;
  }
`;

const mapStateToProps=(state) =>{
  return{
    loading:state.articleState.loading,
    user:state.userState.user,
    articles:state.articleState.articles,
  }
}
const mapDispatchToProps=(dispatch) =>({
  getArticles: () =>dispatch(getArticlesAPI()),

});


export default connect(mapStateToProps,mapDispatchToProps)(Main)