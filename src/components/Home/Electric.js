import { Box, Grid } from '@mui/material'
import React from 'react'
import e1 from "../../assets/images/Home/e1.png"
import e2 from "../../assets/images/Home/e2.png"
import e3 from "../../assets/images/Home/e3.png"
import e4 from "../../assets/images/Home/e4.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Electric = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {isMobile? (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={5}>
          <Box>
            <img src={e1} alt="" />
          </Box>
        </Grid>

        <Grid item xs={7}>
          <Box>
            <img src={e2} alt="" />
          </Box>
          <Box>
            <img src={e3} alt="" />
          </Box>
        </Grid>
      </Grid>
      ): (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={3.5}>
          <Box
            sx={{
              height: {
                xs: '200px', // Small screens
                sm: '300px', // Medium screens
                md: '100%',  // Larger screens
              },
              overflow: 'hidden'
            }}
          >
            <img
              src={e1}
              alt=""
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </Box>
        </Grid>

        <Grid item md={5}>
          <Box
            sx={{
              height: {
                xs: '200px', // Small screens
                sm: '300px', // Medium screens
                md: '50%',   // Larger screens
              },
              overflow: 'hidden'
            }}
          >
            <img
              src={e2}
              alt=""
              style={{
                objectFit: 'contain',
                height: '100%',
                width: '100%',
              }}
            />
          </Box>
          <Box
            sx={{
              height: {
                md: '50%',   // Larger screens
              },
              overflow: 'hidden'
            }}
          >
            <img
              src={e3}
              alt=""
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </Box>
        </Grid>

        <Grid item md={3.5} >
          <Box
            sx={{
              height: {
                xs: '200px', // Small screens
                sm: '300px', // Medium screens
                md: '100%',  // Larger screens
              },display: {md: "block",xs: "none"},
              overflow: 'hidden'
            }}
          >
            <img
              src={e4}
              alt=""
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </Box>
        </Grid>
      </Grid>
      )}
      
    </Box>
  )
}

export default Electric