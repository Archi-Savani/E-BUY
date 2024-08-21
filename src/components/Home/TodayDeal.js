import { Box, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper/modules";
import tt1 from "../../assets/images/Home/tt1.png"
import tt2 from "../../assets/images/Home/tt2.png"
import tt3 from "../../assets/images/Home/tt3.png"
import tt4 from "../../assets/images/Home/tt4.png"
import tt5 from "../../assets/images/Home/tt5.png"
import tt6 from "../../assets/images/Home/tt6.png"
import tt7 from "../../assets/images/Home/tt7.png"
import tt8 from "../../assets/images/Home/tt8.png"
import tt9 from "../../assets/images/Home/tt9.png"
import tt10 from "../../assets/images/Home/tt10.png"
import tt11 from "../../assets/images/Home/tt11.png"
import tt12 from "../../assets/images/Home/tt12.png"
import { Link } from 'react-router-dom';



const todayDeal1 = [
    {
        img: tt1,
        title: "Rakhi hamper",
        offer: "Starting from ₹299"
    },
    {
        img: tt2,
        title: "Best selling Smartwatch",
        offer: "Starting from ₹999"
    },
    {
        img: tt3,
        title: "Silver Diamond ring",
        offer: "Get 50% off"
    },
    {
        img: tt4,
        title: "Special Mava laddu",
        offer: "Starting from ₹99"
    },
    {
        img: tt5,
        title: "Luxuries Bean bags",
        offer: "Min 30% off"
    },
    {
        img: tt6,
        title: "PTron wireless Bluetooth",
        offer: "50% - 70% off"
    },
]
const todayDeal2 = [
    {
        img: tt7,
        title: "Rakhi Special gift",
        offer: "Upto 40% off"
    },
    {
        img: tt8,
        title: "Sectional sofaset",
        offer: "Starting from ₹2699"
    },
    {
        img: tt9,
        title: "Single leg anklet",
        offer: "Starting only ₹99"
    },
    {
        img: tt10,
        title: "Special Mava laddu",
        offer: "Starting from ₹99"
    },
    {
        img: tt11,
        title: "Luxuries Bean bags",
        offer: "Min 30% off"
    },
    {
        img: tt12,
        title: "PTron wireless Bluetooth",
        offer: "50% - 70% off"
    },
]

const TodayDeal = () => {
    return (
        <Box margin={{ md: "50px 0", xs: "15px 0" }}>
            <Box sx={{
                backgroundColor: "#fff", height: "auto",
                padding: { sm: "30px 40px", xs: "7px 10px" }
            }}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box className='desc' fontSize={{ sm: "30px", xs: "11px" }} fontWeight={700}>Today’s best deals</Box>
                    <Link style={{ textDecoration: "none" }} to={"/filter"}>
                        <Box display={"flex"} alignItems={"center"} color={"#007BFF"} fontSize={{ sm: "24px", xs: "9px" }} fontWeight={700} className="desc">
                            See all <NavigateNextIcon height={"10px"} />
                        </Box>
                    </Link>
                </Box>
                <Box padding={{ sm: "30px 10px", xs: "5px 0" }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                            },
                            400: {
                                slidesPerView: 2.5,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 3.5,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1400: {
                                slidesPerView: 5,
                            },
                        }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop={true}
                        autoplay={false}
                    >
                        {todayDeal1?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link style={{ color: "unset", textDecoration: "unset" }} to={"/filter"}>
                                    <Box
                                        sx={{
                                            height: "auto",
                                            width: "auto",
                                            border: "2px solid #C2C2C2",
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            display: "flex",
                                            flexDirection: "column", // Stack children vertically
                                            justifyContent: "space-between" // Distribute space between children
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                flexShrink: 0 // Prevent shrinking
                                            }}
                                        >
                                            <img
                                                src={item.img}
                                                alt="image"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Box>
                                        <Box className="desc" sx={{ textAlign: "center",padding: { sm: "10px 15px", xs: "8px", fontWeight: 700, fontSize: { sm: "17px", xs: "14px" } }, flexShrink: 0, whiteSpace: "nowrap" }}>
                                            {item.title}
                                        </Box>
                                        <Box sx={{ textAlign: "center",marginBottom: "10px"}}>
                                            <Box className="desc"
                                                sx={{


                                                    flexShrink: 0,
                                                    fontWeight: 700,
                                                    fontSize: { sm: "15px", xs: "12px" }
                                                }}
                                            >
                                                {item.offer}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </Box>
                <Box padding={{ sm: "30px 10px", xs: "5px 0" }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                            },
                            400: {
                                slidesPerView: 2.5,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 3.5,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1400: {
                                slidesPerView: 5,
                            },
                        }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop={true}
                        autoplay={false}
                    >
                        {todayDeal2?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link style={{ color: "unset", textDecoration: "unset" }} to={"/filter"}>
                                    <Box
                                        sx={{
                                            height: "auto",
                                            width: "auto",
                                            border: "2px solid #C2C2C2",
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            display: "flex",
                                            flexDirection: "column", // Stack children vertically
                                            justifyContent: "space-between" // Distribute space between children
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                flexShrink: 0 // Prevent shrinking
                                            }}
                                        >
                                            <img
                                                src={item.img}
                                                alt="image"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Box>
                                        <Box className="desc" sx={{ textAlign: "center",padding: { sm: "10px 15px", xs: "8px", fontWeight: 700, fontSize: { sm: "17px", xs: "14px" } }, flexShrink: 0, whiteSpace: "nowrap" }}>
                                            {item.title}
                                        </Box>
                                        <Box sx={{ textAlign: "center",marginBottom: "10px"}}>
                                            <Box className="desc"
                                                sx={{


                                                    flexShrink: 0,
                                                    fontWeight: 700,
                                                    fontSize: { sm: "15px", xs: "12px" }
                                                }}
                                            >
                                                {item.offer}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}

export default TodayDeal