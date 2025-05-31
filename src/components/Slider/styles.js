import styled from "styled-components";

export const Container = styled.div`
  background-color: #000000;
  padding: 0 20px;
  h2 {
    color: #ffffff;
    margin: 20px 0 20px 20px;
    font-size: 24px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 18px;

  }
  .swiper-wrapper {
    display: flex;
    padding-bottom: 20px;
    @media (max-width: 768px) {
      padding: 0 10px;
    }
  }
`

export const CardWrapper = styled.div`
  width: 200px;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 140px;
  }
`
  

