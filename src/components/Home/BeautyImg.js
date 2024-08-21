import { Box, Grid } from '@mui/material'
import React from 'react'
import beauty1 from "../../assets/images/Home/beauty1.png"
import beauty2 from "../../assets/images/Home/beauty2.png"

const BeautyImg = () => {
    return (
        <Box margin={{ md: "50px 0", xs: "15px 0" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={6} xs={12}>
                    <img src={beauty1} alt="" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <img src={beauty2} alt="" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default BeautyImg