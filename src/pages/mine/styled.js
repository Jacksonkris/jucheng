
import styled from "styled-components";

export const MineContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#f5f5f5;

    .info{
        display:flex;
        flex-direction
        width:100%;
        height:1.75rem;
        background:url('https://m.juooo.com/static/img/personal_bg_1.f5fc96c.png') no-repeat;
        background-size:100%;

        .iconfont{
            color:#fff;
            font-size:.25rem;
            position:absolute;
            top:.1rem;
            right:.128rem;
        }
        .info-main{
            width:2.94rem;
            height:1.32rem;
            margin:.48rem .128rem 0 .128rem;
            background:#fff;
            border-radius:.05rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            font-size:.14rem;
        }
        .mine-info_head{
            width:100%;
            height:.44rem;
            padding:0 .128rem;
            display:flex;
            position:relative;
            
            img{
                width:.5rem;
                height:.5rem;
                position:absolute;
                top:-.1rem;
                left:.15rem;
            }
            .users{
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                margin-left:.6rem;

                b{
                    font-size:.12rem;
                    font-weight:700;
                }
                span{
                    color:#999;
                    font-size:.11rem;
                }
            }
        }
        .mine-info_label{
            width:100%;
            height:.22rem;
            display:flex;
            justify-content:flex-end;

            span{
                width:.7rem;
                height:100%;
                font-size:.13rem;   
                display:flex;
                justify-content:center;
                align-items:center;
                font-weight:700;      
                border-radius:.05rem 0 0 .05rem;
               background: linear-gradient(-45deg,#f5dea9,#f8d583); 
            }
        }
        .mine-info_cnt{
            width:100%;
            height:.68rem;
            display:flex;

            li{
                width:25%;
                height:100%;
                padding:.12rem 0;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;

                i{
                    color:#ff6743;
                    font-size:.18rem;
                }
                span{
                    font-size:.12rem;
                }
            }
        }
    }
    .mine-vip{
        width:100%;
        height:.76rem;
        margin-top:.1rem;
        display:flex;
        justify-content:center;
        align-items:center;

        img{
            width:3.15rem;
            height:.76rem;
        }
    }
    .mine-setting{
        width:100%;
        height:1.6rem;
        padding:0 .128rem;

        .setting-list{
            width:100%;
            height:.75rem;
            background:#fff;
            display:flex;
            font-size:.12rem;
            margin-bottom:.1rem;
    
            li{
                width:25%;
                height:100%;
                padding:.15rem 0;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;

                i{
                    color:#ff6743;
                    font-size:.2rem;
                }
            }        
        }
    }
` 