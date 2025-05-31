import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 30px;
    width: 300px;
    height: autp;
    object-fit: cover;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.03);
    }
    @media (max-width: 768px) {
      width: 140px;
    }
  }
  h2 {
    color: #ffffff;
    margin-top: 15px;
    text-align: center;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;
