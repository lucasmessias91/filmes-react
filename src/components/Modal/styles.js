import styled from "styled-components";


export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
    background-color: #000;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed ;
    padding: 50px;
    max-width: 1200px;

    button {
      background-color: #000;
      color: #fff;
      border: none;
      font-size: 20px;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
    }

    iframe {
      border: none;
    }

`

  

