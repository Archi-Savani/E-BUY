import React from 'react'
import Slider from '../../components/Home/Slider'
import { Box, Container } from '@mui/material'
import TopOffers from '../../components/Home/TopOffers'
import Electric from '../../components/Home/Electric'
import BestOffers from '../../components/Home/BestOffers'
import Backimg from '../../components/Home/Backimg'
import back1 from "../../assets/images/Home/back1.png"
import back2 from "../../assets/images/Home/back2.png"
import back3 from "../../assets/images/Home/back3.png"
import OtherCard from '../../components/Home/OtherCard'
import TodayDeal from '../../components/Home/TodayDeal'
import HighRate from '../../components/Home/HighRate'
import BeautyImg from '../../components/Home/BeautyImg'
import Offers from '../../components/Home/Offers'



const Home = () => {
  return (
    <Box sx={{backgroundColor: "#F8F8F8"}}>
        <Container maxWidth={"xl"}>
            <Slider/>
            <TopOffers/>
            <Electric/>
            <BestOffers/>
            <Backimg img={back1}/>
            <Backimg img={back2}/>
            <OtherCard/>
            <TodayDeal/>
            <Backimg img={back3}/>
            <HighRate/>
            <BeautyImg/>
            <Offers/>
        </Container>
    </Box>
  )
}

export default Home