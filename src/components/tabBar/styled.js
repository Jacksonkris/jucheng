import styled from "styled-components"

export const TabBarContainer = styled.div`
    width:100%;
    height: .42rem;
    background: #fff;
    position: fixed;
    left:0;
    bottom: 0;
    border-top:1px solid #ccc;
    z-index:1111;
    ul{
        width:100%;
        height: .42rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .active{
            color:#FF6c00;
        }
    }
    li{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i{
            font-size:.18rem;
        }
        span{
            font-size: .11rem;
        }
    }
`