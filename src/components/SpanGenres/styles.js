import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;

  span {
    padding: 10px 18px;
    border: 2px solid #ccc;
    background-color: #0f0f0f;
    color: #fff;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #1a1a1a;
    }

  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    span {
      margin: 5px;
      padding: 8px 12px;
      font-size: 10px;
    }
  }
`

