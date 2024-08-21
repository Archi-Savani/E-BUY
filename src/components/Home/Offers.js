import { Box, Grid } from '@mui/material'
import React from 'react'

const Offers = () => {
    return (
        <Box margin={{ md: "50px 0", xs: "15px 0" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={3} xs={6}>
                    <Box sx={{ backgroundColor: "#EFEFEF", padding: { md: "22px", xs: "17px" } }}>
                        <Box className="desc" sx={{fontSize: {md:"20px",xs: "16px"},fontWeight: 700}}>
                            Single Spices & Herbs
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} xs={6}>
                    sdcd
                </Grid>
                <Grid item md={3} xs={6}>
                    sdcd
                </Grid>
                <Grid item md={3} xs={6}>
                    cd
                </Grid>
            </Grid>
        </Box>
    )
}

export default Offers