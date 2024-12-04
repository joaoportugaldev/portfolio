import * as S from "./styles";
import Slider from "react-slick";

export interface CaroulselProps {
  items: {
    title: string;
    description: string;
    status: string;
    repoLink: string;
    productionLink: string;
  }[];
}

export default function Carousel({ items }: CaroulselProps) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item) => {
          return (
            <S.ItemCarousel key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div>
                <span>Status: </span>
                <span>{item.status}</span>
              </div>
              <div>
                <a href={item.repoLink}></a>
                {item.productionLink && (
                  <a href={item.productionLink}>Production</a>
                )}
              </div>
            </S.ItemCarousel>
          );
        })}
      </Slider>
    </div>
  );
}
