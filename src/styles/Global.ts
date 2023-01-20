import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
:root{
    --white-1: #FFFFFF;
    --gray-1: #F2F2F2;
    --gray-2: #E6E6E6;
    --gray-3: #D8D8D8;
    --blue-1: #5B82D0;
    --blue-2: #5E87DB;
    --black-1: #585858;
    --black-2: #6E6E6E;
    --green-1: #1CAC78;
}

*{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font: unset;
    font-family: 'Nunito Sans', sans-serif;
}

button{
    cursor: pointer;
}

#root{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    
}
`;
