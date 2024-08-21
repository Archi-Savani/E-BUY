import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import w1 from "../../assets/images/Home/w1.png"
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import GradeIcon from '@mui/icons-material/Grade';

const highrateData = [
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
    {
        img: w1,
        title: "Charlie Carson Ladies watch",
        des: "Designed and assembled in France, the Initial 36 Skeleton - Rose gold/blue openwork features clean lines.....",
        p1: "₹800.00 Only",
        p2: "₹1000.00",
        p3: "20% off",
        other: "Rose gold / Blue / Pink / White "
    },
]



const HighRate = () => {

    const [liked, setLiked] = useState(Array(8).fill(false));


    // setLiked(Array(response.data.length).fill(false));
    const handleLikeToggle = (index) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);
    };

    return (
        <Box margin={{ md: "50px 0", xs: "15px 0" }}>
            <Box sx={{
                height: "auto",
            }}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box className='desc' fontSize={{ sm: "30px", xs: "11px" }} fontWeight={700}>Highly rated items</Box>
                    <Link style={{ textDecoration: "none" }} to={"/filter"}>
                        <Box display={"flex"} alignItems={"center"} color={"#007BFF"} fontSize={{ sm: "24px", xs: "9px" }} fontWeight={700} className="desc">
                            See all <NavigateNextIcon height={"10px"} />
                        </Box>
                    </Link>
                </Box>
                <Box padding={{ sm: "30px 10px 0 10px", xs: "5px 0" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {highrateData.map((item, index) => (
                            <Grid item lg={2.4} md={3} xs={6}>
                                <Box sx={{ backgroundColor: "#fff", padding: "5px" }}>
                                    <Box position={"relative"}>
                                        <img src={item.img} alt="" />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "2%",
                                                right: "3%",
                                            }}
                                        >
                                            <GradeIcon
                                                className="like"
                                                sx={{
                                                    color: liked[index] ? "red" : "white",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => handleLikeToggle(index)}
                                            />
                                        </Box>
                                        <Box className="desc" sx={{ position: "absolute", borderRadius: "0 20px 0 0", bottom: "5px", left: "0", backgroundColor: "#007BFF", padding: { sm: "10px", xs: "5px" }, color: "#fff", fontSize: { sm: "8px", xs: "5px" } }}>
                                            Free Fastest Delivery
                                        </Box>
                                        <Box className="desc" sx={{position: "absolute",right: "0",bottom: "0",fontWeight: 700,backgroundColor: "#fff",display: "flex",padding: "10px",alignItems: "center"}}>
                                            <Box>
                                                4.5
                                            </Box>
                                            <Box>
                                                <GradeIcon style={{color: "#FFAE00"}}/>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Link style={{ textDecoration: "none", color: "unset" }} to={"/filter"} >

                                        <Box sx={{ padding: { md: "10px", xs: "5px" } }}>
                                            <Box className="desc" sx={{ fontSize: { sm: "16px", xs: "9px" }, fontWeight: 700, marginBottom: "5px" }}>
                                                {item.title}
                                            </Box>
                                            <Box className="desc" sx={{ fontSize: { sm: "10px", xs: "5px" }, color: "#878787", fontWeight: 500, marginBottom: "5px" }}>
                                                {item.des}
                                            </Box>
                                            <Box className="desc" sx={{ display: "flex", fontSize: { sm: "12px", xs: "8px" }, marginBottom: "5px" }}>
                                                <Box marginRight={{ md: "8px", xs: "3px" }} fontWeight={600}>
                                                    {item.p1}
                                                </Box>
                                                <Box marginRight={{ md: "8px", xs: "3px" }} fontWeight={500} color={"#5A5A5A"}>
                                                    {item.p2}
                                                </Box>
                                                <Box fontWeight={700} color={"#28A745"}>
                                                    {item.p3}
                                                </Box>
                                            </Box>
                                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                                <Box className="desc" sx={{ fontSize: { sm: "10px", xs: "5px" }, color: "#878787", fontWeight: 500 }}>
                                                    {item.other}
                                                </Box>
                                                <Box>
                                                    <EastIcon fontSize='24px' />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default HighRate