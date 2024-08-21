import { Box } from '@mui/material'
import React from 'react'

const Backimg = ({ img }) => {
    return (
        <Box
            margin={{
                md: "50px 0",
                xs: "15px 0"
            }}
            sx={{
                height: "100%",
                width: "100%",
                overflow: "hidden"
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img
                    src={img}
                    alt=""
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain"
                    }}
                />
            </Box>
        </Box>
    )
}

export default Backimg