import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;
    @media (max-width: 420px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    background-color: #f7f7f7;
    width: 100%;
    padding: 8px;
    border: 1px solid #28a789;
    border-radius: 8px;

    :focus {
        border: 3px solid #28a789;
        outline: none;
    }
`;


export const Button = styled.button`
    background: #28a789;  
    border-radius: 8px;
    border: 2px solid #28a789;
    color: white;
    margin-left: 1em;
    padding: 8px 20px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 550;
    @media (max-width: 420px) {
        margin-top: 10px;
        margin-left: 0;
        width: 100%;
    }
`;