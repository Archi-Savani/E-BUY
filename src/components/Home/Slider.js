import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper/modules";
import s1 from "../../assets/images/Home/s1.png"
import s2 from "../../assets/images/Home/s2.png"

const herodetails = [
    {
        img: s1,
        img1: s2,
    },
    {
        img: s1,
        img1: s2,
    },
    {
        img: s1,
        img1: s2,
    },
    {
        img: s1,
        img1: s2,
    },
]

const Slider = () => {
    return (
        <Box>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                nav={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {herodetails?.map((item, index) => (
                    <SwiperSlide>
                        <Box marginTop={{sm:"20px",xs: "10px"}} sx={{ backgroundImage: { md: `url(${item.img})`, xs: `url(${item.img1})` }, height: { xs: "100px", sm: "200px", md: "300px", lg: "350px" }, backgroundPosition: "center", width: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default Slider