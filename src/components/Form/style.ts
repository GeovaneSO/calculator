import styled from "styled-components";

export const FormBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    *box-sizing: border-box;

    gap: 5px;

    width: 60%;

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
        height: 18%;
        
        gap: 10px;
        label{
            color: #7d7b7b;
        }
        input{
            padding: 8px 12px;
            width: 90%;
            margin: 0;
            height: 30%;
            border-radius: 5px;
            border: solid 1px  #d8e1e8; 
        }
    }
    .box_select {
        color: red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 55%;
        height: 20%;
        
        margin: 0;
        gap: 10px;
        select{
            width: 100%;
            margin: 0;
            height: 30%;
            
        }
    }
`;
