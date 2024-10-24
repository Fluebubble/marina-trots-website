import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import { Item } from "./Item/Item";
import { Certificate } from "@/types/certificate";
import { DeviceSizes } from "../../../types/deviceSizes";
import styles from "./List.module.scss";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  certificates: Certificate[];
}

export const List: React.FC<Props> = ({ certificates }) => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const paginationSettings = {
    clickable: true,
    el: paginationRef.current,
  };

  const lightboxSlides = certificates.map(({ alt, image, id }) => ({
    src: image,
    alt,
    id,
  }));

  // const [open, setOpen] = useState(false);
  const [currentSlideId, setCurrentSlideId] = useState<Pick<
    Certificate,
    "id"
  > | null>(null);

  console.dir(lightboxSlides);

  return (
    <div className={styles.content}>
      <Swiper
        speed={500}
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        grid={{
          fill: "row",
          rows: 2,
        }}
        pagination={paginationSettings}
        modules={[Grid, Pagination, Autoplay]}
        breakpoints={{
          [DeviceSizes.desktop]: {
            slidesPerView: 3,
            grid: {
              rows: 2,
            },
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {certificates.map((cert) => (
          <SwiperSlide key={cert.id}>
            <Item
              title={cert.title}
              image={cert.image}
              alt={cert.alt}
              thumb={cert.thumb}
              id={cert.id}
              setCurrentSlideId={setCurrentSlideId}
            />
          </SwiperSlide>
        ))}
        <div ref={paginationRef} className={styles.pagination}></div>
      </Swiper>
      <Lightbox
        open={currentSlideId !== null}
        close={() => setCurrentSlideId(null)}
        slides={lightboxSlides}
      />
      {/* <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button> */}
    </div>
  );
};
