import styled from "styled-components";


export const TheaterContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding-top:.38rem;
    h2{
        width:100%;
        height:.38rem;
        background:#fff;
        border-bottom:1px solid #e5e5e5;
        color:#232323;
        text-align:center;
        line-height:.38rem;
        position:fixed;
        top:0;
        left:0;
        font-size:0.16rem;font-weight:normal;
        z-index:1
    }
    .theaterList{
        width:100%;
        height:100%;
        padding-top:.12rem;
        padding-bottom:0.42rem;
        .showlist{
            width:100%;
            height:100%;
            padding:0 .12rem;
            background:#fff;

            .List{
                border:1px solid #e5e5e5;
                border-radius:0.05rem;
                width:100%;
                height:2.5rem;
                background:#fff;
                padding:.17rem .14rem;
                margin-bottom:.128rem;
            }
        }
        .theater-info{
            width:100%;
            height:.42rem;
            display:flex;
            justify-content:space-between;

            img{
                width:.42rem;
                height:.42rem;
                border-radius:.05rem;
            }
            div{
                width:1.92rem;
                height:.42rem;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                P{
                    color:#232323;
                    font-size:.16rem;
                    font-weight:700;
                }
                span{
                    color:#666;
                    font-size:.12rem;
                }
            }
            i{
                width:.18rem;
                font-size:.2rem;
            }
        }
        .theater-show{
            width:100%;
            height:1.64rem;
            margin-top:.11rem;
            background:#fff;
            overflow-x: auto;
            display: flex;
            flex-wrap: nowrap;

            .Show{
                width:.98rem;
                height:1.64rem;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                float:left;
                
            }
        }
        
        .theater-show::-webkit-scrollbar {
            display: none;
        }

        .show-data{
            width:100%;
            height:.23rem;
            padding-bottom:.12rem;
            border-bottom:1px solid #ccc;
            font-size:.13rem;
            font-weight:600;
            text-align:center;
            color:#b3b3b3;
            position:relative;

            span{
                width:.05rem;
                height:.05rem;
                position:absolute;
                border-radius:50%;
                background:#b3b3b3;
                top:.2rem;
                left:.46rem;
            }
        }
        .show-pic{
            width:100%;
            height:1.24rem;
            margin-right:.1rem;
            img{
                width:.91rem;
                height:1.24rem;
            }
        }
    }




`