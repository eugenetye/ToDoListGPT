import styled from "styled-components";
import {FiTrash2} from 'react-icons/fi';

export const ListContainer = styled.ul`
padding: 0;
`;

export const Row = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 0;
font-size: 1rem;
`;

export const Text = styled.span`
justify-content: left;
::first-letter {
    text-transform: capitalize;
}
`;

export const Icons = styled.section`
justify-content: space-between;
padding: 8px 0;
`;

export const Generate = styled.button`
cursor: pointer;
background: #28a789;  
border-radius: 8px;
border: 2px solid #28a789;
color: white;
margin-left: 1em;
padding: 8px 20px;
cursor: pointer;
font-size: 1rem;
font-weight: 550;
`;

export const Delete = styled(FiTrash2)`
cursor: pointer;
margin-left: 50px
`;