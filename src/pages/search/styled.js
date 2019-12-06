import styled from "styled-components";


export const SearchContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding-top:.38rem;
    background:#fff;
    
    header{
        width:100%;
        height:.38rem;
        padding:0 .12rem;
        background:#fff;
        display:flex;
        justify-content: space-between;
        align-items:center;
        position:fixed;
        top:0;
        left:0;

        .head_search{
            width:2.63rem;
            height:.23rem;
            padding:0 .09rem;
            border:1px solid #ebebeb;
            border-radius:.1rem;
            background:#f5f5f5;
            display:flex;
            align-items:center;
            justify-content: space-between;
            i{
                color:#b1b1b1;
            }

            input{
                background:#f5f5f5;
                width:2rem;
            }
            span{
                display:block;
                margin-top:0.04rem;
                margin-right:-0.1rem;
            }
        }
        span{
            width:.24rem;
            height:.16rem;
            font-size:.12rem;
        }
    }
    section{
        width:100%;
        height:100%;

        .hot{
            width:100%;
            height:1.56rem;
            padding:.22rem .12rem 0 .12rem;

            h3{
                font-size:.13rem;
                color:#999;
            }
        }
        .hot ul{
            margin-top:.17rem;
            width:100%;
            font-size:.13rem;
            color:#333;
            display:flex;
            flex-wrap: wrap;

            li{
                height:.28rem;
                padding:0 .2rem;
                margin-right:.12rem;
                margin-bottom:.11rem;
                background:#f5f5f5;
                line-height:.28rem;
                border-radius:.05rem;
            }
        }
        .list{
            width:100%;
            min-height:100%;
            background:#fff;
            padding:.09rem .12rem;
            font-size:.13rem;
        }
        .list ul{
            width:100%;
            min-height:0;
            
            li{
                width:100%;
                height:1.25rem;
                margin-bottom:.256rem;
            }
        }
        .list ul li{
            display:flex;
            justify-content:space-between;
            img{
                width:.9rem;
                height:1.25rem;
            }
            .list_desc{
                width:1.9rem;
                height:100%;
                padding-top:0.05rem;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
            }
        }
        .list_desc p:nth-child(1){
            height:.17rem;

            b{
                font-weight:600;
            }
        }
        .itname{
            height:.42rem;
            line-height:.21rem;
            font-size:.135rem;
            font-weight:600;
            overflow:hidden;
            .c_ff6{
                color:#ff6743;
            }
        }
        .list_desc p:nth-child(3),
        .list_desc p:nth-child(4){
            height:.13rem;
            line-height:.13rem;
        }
        .list_desc p:nth-child(3){
            font-size:.12rem;
        }
        .list_desc p:nth-child(4){
            i{
                color:#ff6743;
            }
        }
        .no-more{
            width:100%;
            text-align:center;
        }
    }

` 