import EmblaCarousel from "./EmblaCarousel";
import Footer from "./Footer";
import { EmblaOptionsType } from "embla-carousel";
import "../../embla.css"

export interface CaroulselProps {
  items: {
    title: string;
    description: string;
    status: string;
    repoLink: string;
    productionLink: string;
  }[];
}

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Carousel({ items }: CaroulselProps) {
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Footer />
    </>
  );
}

{
  /* {items.map((item) => {
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
})} */
}
