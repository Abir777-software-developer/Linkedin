import styled from 'styled-components';
import React from 'react'

function Main() {
  return (
    <Container>
      <ShareBox>Share
      <div>
        <img src="/images/user copy.svg" alt="" />
        <button>Start a Post,try witing with AI</button>
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
    </Container>
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

export default Main