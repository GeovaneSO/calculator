import styled from "styled-components";

export const FormBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    *box-sizing: border-box;

    /* gap: 1%; */

    width: 60%;
    height: 100%;

    background-color: white;

    .box_title{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        h2 {
            width: fit-content;
            font-size: 25px;
            margin: 0;
            color: #7d7b7b;
            font-weight: 600;
        }

    }

    .box_input {
        color: red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0;
        width: 65%;
        height: 15%;
        
        gap: 5%;
        label{
            color: #7d7b7b;
        }
        .box_input_error{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
           
            input{
                padding: 8px 12px;
                width: 90%;
                margin: 0;
                height: 60%;
                border-radius: 5px;
                border: solid 1px  #d8e1e8; 
            }
        }
    }

    .cursor {
        cursor: pointer;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: ${(props) => props.theme.white};
        min-width: 160px;
        box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;
        font-size: 2.5vw;
        border-radius: 0.15vw;
        
        color: var(--red-2) tex;
        margin: 0;
        
        p{
            font-size: 30%;
            width: fit-content;
            margin: 0;
            line-height: 20px;
        }
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    
`;
