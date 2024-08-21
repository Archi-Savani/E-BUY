import { Box, Grid } from '@mui/material'
import React from 'react'
import oc1 from "../../assets/images/Home/oc1.png"
import oc2 from "../../assets/images/Home/oc2.png"
import oc3 from "../../assets/images/Home/oc3.png"

const othercardData = [
    {
        img: oc1
    },
    {
        img: oc2
    },
    {
        img: oc3
    },
]

const OtherCard = () => {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {othercardData.map((item, index) => (
                    <Grid item xs={4}>
                        <Box>
                            <img src={item.img} alt="" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default OtherCard