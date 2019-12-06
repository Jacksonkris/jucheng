import styled from "styled-components";


export const DetailsContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#f6f6f6;

    .detail-brief{
        width:100%;
        height:1.85rem;

        .brief_primary{
            width:100%;
            height:100%;
            color:#fff;

            .Mask{
                position:absolute;
                z-index:1;
                width:100%;
                height:1.85rem;
                 background: rgba(0,0,0,.3);
            }
            .pic-bg{
                width:100%;
                height:1.85rem;
                position: absolute;
                left: 0;
                top: 0;
                background-color: #b8abab;
                filter: blur(.15rem);
            }
        }
        .fg_title{
            position:relative;
            z-index:1;
            width:100%;
            height:.37rem;
            font-size:.14rem;
            display:flex;
            justify-content:space-around;
            align-items:center;

            p{
                width:1rem;
                font-weight:600;
                margin-left:1rem;
            }
        }
        .fg_content{
            position:relative;
            z-index:1;
            width:100%;
            height:1.48rem;
            padding:.128rem;
            font-size:.14rem;
            display:flex;
            justify-content:space-between;
            align-items:center;

            .pic{
                width:.94rem;
                height:1.26rem;
            }
            .Rcontent{
                width:1.92rem;
                height:1.26rem;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                P{
                    font-weight:600;
                    font-size:.15rem;
                    line-height:.22rem;
                }
            }
        }
        .brief_secondary{
            position:relative;
            z-index:1;
            width:100%;
            height:.98rem;
            background:#fff;
            padding:0 .128rem .18rem .128rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
           
            .showTime{
                height:0.48rem;
                font-size:.12rem;
                font-weight:600;
                line-height:.4rem;
                line-height:0.48rem;
                span{
                    margin-left:.15rem;
                }
                i{
                    font-size:.1rem;
                    margin-top:0.06rem;
                }
            }
            p{
                font-size:.13rem;
                font-weight:600;
            }
            span{
                font-size:.11rem;
                margin-top:0.06rem;
                color:#666;
            }
            .location{
                position:absolute;
                top:0.5rem;
                right:.35rem;
                width:.34rem;
                height:.34rem;
                line-height:.34rem;
                text-align:center;
                color:#ff6700;
                font-size:.2rem;
                border-radius:50%;
                background:#f5f5f5;
            }
        }
        .center_right{
            width:100%;
            height:1.84rem;
            background:#f6f6f6;
        }
        .benefit{
            width:100%;
            height:1.22rem;
            font-size:.11rem;
            background:#fff;
            margin-top:.1rem;
            padding:0 .128rem;

            .gird-title{
                width:100%;
                height:.4rem;
                border-bottom:1px solid #f1f1f1;
                display:flex;
                align-items:center;
                color:#999;
                
                span{
                    font-size:.12rem;
                    color:#666; 
                    display:block;
                    width:0.42rem;
                }
                P{
                    margin-left:.1rem;
                    font-size:0.11rem;
                }
                .iconfont{
                    font-size:.11rem;
                    margin-left:.5rem;
                }
            }
        }
        .out{
            width:100%;
            height: .51rem;
            padding:0 .128rem .14rem .128rem;
            background:#fff;
        }
       .plus_tip{
            width: 2.94rem;
            height: .37rem;
            font-size: .12rem;
            color: #f5dea9;
            background-image: linear-gradient(-4deg,#1e1e1e,#464542);
            border-radius:.05rem;
            display:flex;
            justify-content:space-around;
            align-items:center;

            span:nth-of-type(1){
                width:.6rem;
                height:.16rem;
                background:#f5dea9;
                color:#000;
            }
            i{
                font-size:.11rem;
            }
        }
    }
    .foot{
        width:100%;
        height:0.4rem;
        display:flex;
        position: fixed;
        bottom:0;
        left:0;
        font-size:0.14rem;
        color:#fff;
        .find{
            width:50%;
            height:100%;
            display:flex;
            background:#ff9a34;
            justify-content:center;
            align-items:center;
            color:#fff;
        }
        div:nth-child(2){
            width:50%;
            height:100%;
            background:#ff4d4a;
            text-align:center;
            line-height:0.4rem;
        }
    }


`