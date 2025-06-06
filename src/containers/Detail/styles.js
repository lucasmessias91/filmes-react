import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.image});
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
    }

    @media (max-width: 768px) {
        height: 30vh;
        &::after {
            height: 80px;
        }
    }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
    
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -50px;
    padding: 10px;
  }

`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 99;
    animation: ${scale} 0.5s linear;
    img {
        width: 450px;
        border-radius: 30px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        
    }

    @media (max-width: 768px) {
        padding: 10px;
        justify-content: center;
        img {
            width: 80%;
            max-width: 300px;
            border-radius: 20px;
        }
    }
`

export const Info = styled.div`
    padding: 20px;
    z-index: 99;
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #ffffff;
    }
    p {
        font-weight: 700;
        color: #ffffff;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
        h2 {
            font-size: 28px;
        }
        p {
            font-size: 14px;
        }
        
    }
`

export const ContainerMovies = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 20px 0;
    }
    h4 {
        color: #ffffff;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    iframe {
        border: none;
    }
    @media (max-width: 768px) {
        padding: 10px;
        h4 {
            font-size: 20px;
        }
        iframe {
            height: 200px;
        }
    }
`
  

