import React from "react";
import "swiper/css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { Item } from "./Item/Item";
import { Certificate } from "@/types/certificate";
import { DeviceSizes } from "../../../types/deviceSizes";
import styles from "./List.module.scss";

interface Props {
  certificates: Certificate[];
}

export const List: React.FC<Props> = ({ certificates }) => {
  return (
    <div className={styles.content}>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        grid={{
          fill: "row",
          rows: 2,
        }}
        modules={[Grid]}
        breakpoints={{
          [DeviceSizes.desktop]: {
            slidesPerView: 3,
            grid: {
              rows: 3,
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
