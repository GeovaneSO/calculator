import styled from "styled-components";
export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
    background-color:  #f3f7f9;
    
    section{
        margin: 0;
        display: flex;

        /* gap: 1%; */
        width: 60%;
        height: 75%;

        border: solid 2px #d8e1e8;
        border-radius: 5px;
        .box_values{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color:  #f3f7f9;
            width: 40%;
            
            .values{
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 70%;
                height: 50%;
                .box_title{

                    border-bottom: solid 1px #a4bddf;
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    margin: 0;
                    h3{
                        font-size: 18px;
                        margin: 0;
                        color: #4b8bdf;
                    }
                }
                p{
                    margin: 0;
                    color: #a4bddf;
                    font-weight: 500;
                    span{
                        color: #4b8bdf;
                        font-weight: 600;
                    }
                }
            }
        }
        
    }
`;
