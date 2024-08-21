import { Box, Grid } from '@mui/material'
import React from 'react'
import o1 from "../../assets/images/Home/o1.png"
import o2 from "../../assets/images/Home/o2.png"
import o3 from "../../assets/images/Home/o3.png"
import o4 from "../../assets/images/Home/o4.png"
import o5 from "../../assets/images/Home/o5.png"
import o6 from "../../assets/images/Home/o6.png"
import o7 from "../../assets/images/Home/o7.png"
import o8 from "../../assets/images/Home/o8.png"
import o9 from "../../assets/images/Home/o9.png"
import o10 from "../../assets/images/Home/o10.png"
import o11 from "../../assets/images/Home/o11.png"
import o12 from "../../assets/images/Home/o12.png"

const bestOffersdata = [
    {
        img: o1,
        des: "Pet care | Up to 55% offer"
    },
    {
        img: o2,
        des: "Grocery | Up to 55% off | Free home deliv..."
    },
    {
        img: o3,
        des: "Beauty care | Extra up to 65% off"
    },
    {
        img: o4,
        des: "Organic Baby food | Up to 55% offer"
    },
    {
        img: o5,
        des: "Kitchen | Up to 55% off | Free home deliv..."
    },
    {
        img: o6,
        des: "A4 Book | Extra up to 65% off"
    },
]

const bestDeal = [
    {
        img: o7,
        des: "Travelling suitcase | Extra up to 65% off"
    },
    {
        img: o8,
        des: "Women’s bag | Extra up to 65% off"
    },
    {
        img: o9,
        des: "Kids school bag | Extra up to 65% off"
    },
    {
        img: o10,
        des: "Ladies Purse | Extra up to 65% off"
    },
    {
        img: o11,
        des: "Kids girl fency purse | Extra up to 65% off"
    },
    {
        img: o12,
        des: "GYM bags | Extra up to 65% off"
    },
]

const BestOffers = () => {
    return (
        <Box margin={{ md: "50px 0", xs: "15px 0" }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Box sx={{
                        backgroundColor: "#fff", height: "auto",
                        padding: { md: "30px 20px", xs: "7px 8px" }
                    }}>
                        <Box className="desc" sx={{ fontSize: { md: "30px", sm: "20px", xs: "10px" }, fontWeight: 700 }}>
                            Extra up to best offers
                        </Box>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {bestOffersdata.map((item, index) => (
                                <Grid item lg={4} xs={6}>
                                    <Box sx={{ backgroundColor: "#FBFBFB",height: "100%", margin: { md: "10px", xs: "5px 0" }, padding: { md: "10px 15px", sm: "5px", xs: "0" } }}>
                                        <Box sx={{ height: { md: "180px", sm: "60px", xs: "40px" } }}>
                                            <img src={item.img} alt="" style={{ objectFit: "contain" }} />
                                        </Box>
                                        <Box className="desc" sx={{ fontSize: { md: "19px", sm: "10px", xs: "6px" }, fontWeight: 700,marginTop: {md:"10px",xs: "5px" }}}>
                                            {item.des}
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{
                        backgroundColor: "#fff", height: "auto",
                        padding: { md: "30px 20px", xs: "7px 8px" }
                    }}>
                        <Box className="desc" sx={{ fontSize: { md: "30px", sm: "20px", xs: "10px" }, fontWeight: 700 }}>
                            Extra up to best offers
                        </Box>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {bestDeal.map((item, index) => (
                                <Grid item lg={4} xs={6}>
                                    <Box sx={{ backgroundColor: "#FBFBFB",height: "100%", margin: { md: "10px", xs: "5px 0" }, padding: { md: "10px 15px", sm: "5px", xs: "0" } }}>
                                        <Box sx={{ height: { md: "180px", sm: "60px", xs: "40px" } }}>
                                            <img src={item.img} alt="" style={{ objectFit: "contain" }} />
                                        </Box>
                                        <Box className="desc" sx={{ fontSize: { md: "19px", sm: "10px", xs: "6px" }, fontWeight: 700,marginTop: {md:"10px",xs: "5px" }}}>
                                            {item.des}
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default BestOffers