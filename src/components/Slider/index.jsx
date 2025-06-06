import { getImages } from "../../utils/getImages";
import Card from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function Slider({ info, title, media_type }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to ={`/filmes-react/detalhe/${media_type || "movie"}/${item.id}`}>
            <Card item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
