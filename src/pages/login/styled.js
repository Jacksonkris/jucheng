import styled from "styled-components";


export const LoginContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:url('https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png') no-repeat;
    background-size: 100%;

    .iconfont{
        position:absolute;
        top:.1rem;
        left:.1rem;
    }
    .main{
        width:100%;
        height:4.28rem;
        padding:.37rem .27rem 0 .27rem;
        font-size:.16rem;  

        h1{
            width:100%;
            height:.2rem;
            text-align:center;
            font-size:.2rem;
            margin-top:.49rem;
            font-weight:700;
            color:#232323;
            margin-bottom:.64rem;
        }
        input{
            width:100%;
            height:.37rem;
            padding:.11rem 0;
            border-bottom:.001rem solid #b9b9b9;
            margin-bottom:.08rem;
        }
        p{
            width:100%;
            height:.42rem;
            background-color: #ebebeb;
            border-radius:.2rem;
            margin-top:.36rem;
            text-align:center;
            line-height:.42rem;
            color:#fff;
        }
        .click{
            background: -webkit-linear-gradient(left, #ff9a34, #ff4d4a);
        }
        .toggle{
            font-size:.12rem;
            margin-top:.17rem;
            display:flex;
            justify-content:space-between;
            padding:0 .1rem;
        }
    }

    .footer{
        width:100%;
        height:.57rem;
        padding:0 .56rem;
        font-size:.16rem;  

        .item-title{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            font-size:.12rem;
            color:#999;

            span:nth-child(1),
            span:nth-child(3){
                width:.6rem;
                height:.01rem;
                background:#b9b9b9;
            }
        }
        .item-inner{
            display:flex;
            align-items:center;
            justify-content:space-around;
            margin-top:.1rem;

            img{
                width:.3rem;
                height:.3rem;
            }
        }
    }

`