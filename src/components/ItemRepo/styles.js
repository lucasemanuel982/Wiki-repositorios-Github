import styled from "styled-components";

export const NameItemContainer = styled.div`
    width: 80%;
    font-size:24px;

`

export const ItemContainer = styled.div`
    width: 80%;
    margin-top:10px;
    border-radius:15px;
    padding: 20px 15px 20px 15px;
    background-color: #161a1f;
    margin-bottom:10px;

    h3 {
        font-size: 23px;
        color: #FAFAFA;
        text-shadow: #58A6FF 0px 0px 3px;
        padding-bottom:10px;
    }
    
    h3 > span {
        color:#FFF;
        font-size: 15px;
        padding-left:10px
    }
    
    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:10px;
        text-shadow: #FAFAFA60 0px 0px 2px;
    }
    

    a.remover {
        color: #FF0000;
        margin-top:20px;
        padding-left:20px;
    }
    
    .btn-4 {
        border:none;
        width:17vh;
        line-height: 30px;
        border-radius:5px;
        cursor:pointer;
        background-color: #1bbeba;
        background-color: #1bbeba4d;
    }
    .btn-4:hover{
        box-shadow: 1px 1px 8px 1px #1bbeba;
        background: rgb(27,190,186);
        background: linear-gradient(90deg, rgba(27,190,186,1) 56%, rgba(121,218,238,0.8827906162464986) 100%); 
    }
    
    .btn-3 {
        width:70px;
        border: none;
        background-color: #bd18184d;
        color: rgb(226, 55, 55);
        padding: .5rem;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 25px;
    }
      .btn-3:hover{
        background-color: #bd18187d;
        box-shadow: 1px 1px 8px 1px #bd18189d;
      }

    .language{
        border-radius:50px;
        width:100px;
        display:flex;
        align-items:center;
        justify-content:center;
        background: #4D4F54;
        border: 1px solid #FFF;
        margin-bottom: 20px;
      }
      
`
