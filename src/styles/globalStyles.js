import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
  }
  body {
    background: black;
    color: #fff;
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    html, body {
      overflow-x: hidden;
    }
  }

  `
