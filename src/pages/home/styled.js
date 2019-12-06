import styled from "styled-components"

export const GoodContainer = styled.div`
    width:100%;
    height:100%;
    background:#fff;
    .slider-list,.recommend-block_list{ touch-action: pan-y; }
    /* position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    padding-bottom:0.42rem; */
    font-size:0.14rem;
    .header{
        width:100%;
        height:0.38rem;
        padding:0 0.2rem;
        display:flex;
        align-items: center;
        justify-content: space-between;
        text-align:center;
        position: absolute;
        left: 0;
        right: 0;
        box-sizing: border-box;
        z-index: 10;
        color:#fff;
        .head_address{
            width:0.52rem;
            height:0.26rem;
            background-color: rgba(0,0,0,.3);
            border: 1px solid hsla(0,0%,88%,.3);
            border-radius:0.1rem;
            display:flex;
            align-items: center;
            justify-content: center;
            .addicon{
                font-size:0.12srem;
            }
            .city{
                font-size:0.11rem;
            }
        }
        .head-search{
            width:1.82rem;
            height:0.26rem;
            background-color: rgba(0,0,0,.3);
            border: 1px solid hsla(0,0%,88%,.3);
            border-radius:0.1rem;
            display:flex;
            align-items: center;
            padding-left:0.15rem;
            color:#ccc;
            span:nth-child(1){
                font-size:0.14rem;
            }
            span:nth-child(2){
                display:block;
                margin-left:0.04rem;
                font-size:0.11rem;
            }
        }
        .head-calendar{
            width:0.23rem;
            height:0.26rem;
            background-color: rgba(0,0,0,.3);
            border: 1px solid hsla(0,0%,88%,.3);
            font-size:0.2rem;
            span{
                display:block;
                color:#fff;
                margin-top:0.04rem;
            }
        }
    }
    main{
        width:100%;
        height:100%;
        overflow:auto;
        .banner_pit{
            width:100%;
            height:1.67rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .advertion-wrap{
            width:100%;
            height:1.34rem;
            padding:0.08rem 0.15rem 0 0.15rem;
            margin-bottom:0.15rem;
        }
        .label-item{
            width:100%;
            height:1.28rem;
            margin-bottom:0.15rem;
            li{
                width:0.58rem;
                height:0.61rem;
                display:flex;
                flex-direction:column;
                align-items:center;
                text-align:center;
                float:left;
                img{
                    width:0.43rem;
                    height:0.43rem;
                }
                span{
                    display:block;
                    font-size: 0.12rem;
                    color: #232323;
                    margin-top: 0.04rem;
                    color:#232323;
                }
            }
        }
        
        }
        .hot-block{
            width:100%;
            height:2.44rem;
            padding-top: 0.15rem;
            padding-left: 0.15rem;
            padding-bottom: 0.1rem;
            .hot-block__lab{
                width:100%;
                height:0.2rem;
                display:flex;
                align-items:center;
                justify-content: space-between;
                padding-right:0.16rem;
                span{
                    font-size:0.1rem;
                }
            }
        }
        .hot-block__list{
            width:100%;
            height:1.72rem;
            margin-top:0.15rem;
            display:flex;
            overflow-x:scroll;
            li{
                width:0.91rem;
                height:1.72rem;
                float:left;
                margin-right:0.08rem;
                color:#000;
                img{
                    width:0.91rem;
                    height:1.24rem;
                }
                h3{
                    margin-top:0.1rem;
                    font-size:0.12rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
            
        }
        .tour-block{
            width:100%;
            height:2.44rem;
            padding-top: 0.15rem;
            padding-left: 0.15rem;
            padding-bottom: 0.1rem;
            background-color: #f5f5f5;
            .hot-block__lab{
                width:100%;
                height:0.2rem;
                display:flex;
                align-items:center;
                justify-content: space-between;
                padding-right:0.16rem;
                span{
                    font-size:0.1rem;
                }
            }
            .tour-block__list{
                width:100%;
                height:1.66rem;
                display:flex;
                li{
                    margin-right:0.2rem;
                    width:2.09rem;
                    height:1.66rem;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    margin-top:0.15rem;
                    img{
                        width:2.09rem;
                        height:1.19rem;
                    }
                    h3{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width:100%;
                        height:0.17rem;
                        margin-top:0.1rem;
                        font-size:0.12rem;
                    }
                    p{
                        text-align:center;
                        color:#666;
                        font-size:0.12rem;
                    }
                }
            }
        }
        .sing_list{
            width:100%;
            min-height:4.02rem;
            margin-bottom:0.15rem;
            background:#fff;
            .category-block_list{
                width:100%;
                height:3.8rem;
                .hot-block_lab{
                    width:100%;
                    height:0.2rem;
                    display:flex;
                    align-items:center;
                    justify-content: space-between;
                    padding-right:0.16rem;
                    padding-left: 0.15rem;
                    padding-top:0.12rem;
                    span{
                        font-size:0.1rem;
                    }
                }
                .category-block_list_wrap{
                    width:100%;
                    height:1.42rem;
                    background: rgb(78, 67, 68);
                    margin-top:0.15rem;
                    .row_bg{
                        width:100%;
                        height:100%;
                        padding:0.12rem 0 0.12rem 0.14rem;
                        display:flex;
                        img{
                            width:0.85rem;
                            height:1.16rem;
                        }
                        .row_info{
                            width:2.07rem;
                            height:1.18rem;
                            margin-left:0.1rem;
                            padding-top:0.15rem;
                            display:flex;
                            flex-direction:column;
                            color:#fff;
                            .yc_data{
                                width:100%;
                                height:0.2rem;
                                display:flex;
                                margin-bottom:0.1rem;
                                line-height:0.2rem;
                                overflow:hidden;
                                span{
                                    display:block;
                                    font-size:0.12rem;
                                    margin-left:0.04rem;
                                    font-weight:500;
                                }
                            }
                            .text-double{
                                width:90%;
                                height:0.36rem;
                                font-size:0.12rem;
                                line-height:0.2rem;
                                word-break: break-all;
                                display: -webkit-box;
                                line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                white-space:normal;
                                text-overflow: ellipsis;
                            }
                            .yc_add{
                                width:100%;
                                margin-top:0.1rem;
                                font-size:0.11rem;
                            }
                        }
                    }
                }
                .list_column{
                    width:100%;
                    height:2.02rem;
                    padding:0.15rem 0 0 0.15rem;
                    ul{
                        width:100%;
                        height:100%;
                        display:flex;
                        overflow-x:scroll;
                        li{
                            width:0.9rem;
                            height:1.88rem;
                            margin-right:0.1rem;
                            float:left;
                            img{
                                width:0.91rem;
                                height:1.24rem;
                            }
                            h3{
                                width:100%;
                                word-break: break-all;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                color:#232323;
                                font-size:0.12rem;
                                margin-top:0.04rem;
                                line-height:0.15rem;
                            }
                            p{
                                display:flex;
                                margin-top:0.06rem;
                                strong{
                                    color:#ff6743!important;
                                    margin-right:0.02rem;
                                    font-weight:600;
                                    font-size:0.12rem;
                                }
                                span{
                                    display:block;
                                    color:#999;
                                    font-size:0.11rem;
                                }
                            }
                        }
                    }
                }
            }
        }
        .hot-venue{
            width:100%;
            height:2.88rem;
            padding-left:0.15rem;
            .hot-venue_wrap{
                width:100%;
                height:0.22rem;
                display:flex;
                align-items:center;
                justify-content: space-between;
                padding-right:0.15rem;
                span{
                    font-size:0.12rem;
                }
            }
            .hot-venue_block{
                width:100%;
                height:2.53rem;
                margin-top:0.15rem;
                ul{
                    width:100%;
                    height:100%;
                    display:flex;
                    overflow-x:scroll;
                    li{
                        width:2.24rem;
                        height:2.53rem;
                        border-radius: 0.04rem;
                        border: 1px solid #ebebeb;
                        padding:0.18rem 0.15rem;
                        margin-right:0.2rem;
                        float:left;
                        .block_info{
                            width:100%;
                            height:0.44rem;
                            display:flex;
                            
                            img{
                                width:0.42rem;
                                height:0.42rem;
                            }
                            .info_con{
                                width:1.06rem;
                                height:0.4rem;
                                display:flex;
                                flex-direction:column;
                                margin-left:0.1rem;
                                h3{
                                    font-size:0.12rem;
                                    margin-top:0.04rem;
                                    margin-bottom:0.1rem;
                                }
                                p{
                                    font-size:0.11rem;
                                }
                            }
                            a{
                                display:block;
                                margin-left:0.2rem;
                                color:#666;
                            }
                        }
                        .theater-show{
                            width:100%;
                            height:1.64rem;
                            margin-top:.11rem;
                            background:#fff;
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
                        .hot-venue_block_list{
                            width:100%;
                            height:1.26rem;
                            margin-top:0.15rem;
                            display:flex;
                            float:left;
                            img{
                                width:0.91rem;
                                height:1.24rem;
                                margin-right:0.15rem;
                            }
                        }
                    }
                }
            }
        }
        .recommend-block{
            width:100%;
            min-height:1.22rem;
            margin-top:0.25rem;
            padding-left:0.15rem;
            background:#fff;
            .recommend-block_wrap {
                width:100%;
                height:0.22rem;
            }
            .recommend-block_list{
                width:100%;
                min-height:100%;
                margin-top:0.1rem;
                .recommend-list{
                    width:100%;
                    height:1.22rem;
                    margin-bottom:0.2rem;
                    display:flex;
                    img{
                        width:0.89rem;
                        height:1.22rem;
                    }
                    .schedule-cell_info{
                        width:1.9rem;
                        height:1.22rem;
                        margin-left:0.1rem;
                        .data_week{
                            width:100%;
                            height:0.13rem;
                            display:flex;
                            margin-top:0.1rem;
                            .week_data{
                                font-weight:700
                            }
                            .week_week{
                                margin-left:0.04rem;
                                font-size:0.11rem
                            }
                        }
                        .week_title{
                            font-size: 0.12rem;
                            font-weight: 700;
                            color: #232323;
                            height:0.37rem;
                            line-height:0.2rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            margin-top:0.1rem;
                        }
                        .week_space{
                            width:100%;
                            height:0.12rem;
                            color: #666;
                            font-size:0.11rem;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            margin-top:0.1rem;
                        }
                        .week_price{
                            display:flex;
                            margin-top:0.1rem;
                            span:nth-child(1){
                                display:block;
                                font-size: 0.12rem;
                                color: #ff6743;
                                font-weight: 400;
                            }
                            span:nth-child(2){
                                display:block;
                                font-size: 0.11rem;
                                color: #999;
                                margin-left:0.06rem;
                            }
                        }
                    }
                }
               
            }
        }
    

`

