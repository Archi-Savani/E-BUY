import { Box, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper/modules";
import t1 from "../../assets/images/Home/t1.png"
import t2 from "../../assets/images/Home/t2.png"
import t3 from "../../assets/images/Home/t3.png"
import t4 from "../../assets/images/Home/t4.png"
import t5 from "../../assets/images/Home/t5.png"
import t6 from "../../assets/images/Home/t6.png"
import { Link } from 'react-router-dom';



const herodetails = [
    {
        img: t1,
        title: "Top selling Projectors",
        offer: "Upto 40% off"
    },
    {
        img: t2,
        title: "Best selling Smartwatch",
        offer: "Starting from ₹999"
    },
    {
        img: t3,
        title: "Latest Smart phone",
        offer: "Get 50% off"
    },
    {
        img: t4,
        title: "Alexa TV device",
        offer: "Starting from ₹99"
    },
    {
        img: t5,
        title: "4K Smart TVs",
        offer: "Min 30% off"
    },
    {
        img: t6,
        title: "Samsung Headphones",
        offer: "50% - 70% off"
    },
]


const TopOffers = () => {
    return (
        <Box margin={{ md: "50px 0", xs: "15px 0" }}>
            <Box sx={{
                backgroundColor: "#fff", height: "auto",
                padding: { sm: "30px 40px", xs: "7px 10px" }
            }}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box className='desc' fontSize={{ sm: "30px", xs: "11px" }} fontWeight={700}>Top Offers on Electronic</Box>
                    <Link style={{textDecoration: "none"}} to={"/filter"}>
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
                        {herodetails?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link style={{ color: "unset", textDecoration: "unset" }} to={"/filter"}>
                                    <Box
                                        sx={{
                                            height: {
                                                xs: "220px", // Small screens
                                                sm: "240px", // Small to Medium screens
                                                md: "280px", // Medium screens
                                                lg: "286px", // Large screens
                                            },
                                            width: {
                                                xs: "180px",
                                                md: "210px",
                                                lg: "237px",
                                            },
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
                                                height: {
                                                    xs: "140px", // Small screens
                                                    sm: "150px", // Small to Medium screens
                                                    md: "180px", // Medium screens
                                                    lg: "186px", // Large screens
                                                },
                                                flexShrink: 0 // Prevent shrinking
                                            }}
                                        >
                                            <img
                                                src={item.img}
                                                alt=""
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Box>
                                        <Box className="desc" sx={{ padding: { sm: "10px 15px", xs: "8px", fontWeight: 700, fontSize: { sm: "17px", xs: "14px" } }, flexShrink: 0, whiteSpace: "nowrap" }}>
                                            {item.title}
                                        </Box>
                                        <Box sx={{ padding: { sm: "15px", xs: "8px" }, backgroundColor: "#CFE6FF", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Box className="desc"
                                                sx={{


                                                    flexShrink: 0,
                                                    fontWeight: 700,
                                                    fontSize: { sm: "15px", xs: "12px" }
                                                }}
                                            >
                                                {item.offer}
                                            </Box>
                                            <Box>
                                                <NavigateNextIcon style={{ color: "#007BFF", fontSize: "25px" }} />
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

export default TopOffers