import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import styled from 'styled-components'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Banner = () => {
    return (
        <SwiperStyle pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
            <Box className="slide-box" bg={'primary'}>
                    <Heading className="slide-title">Discover, collect, and sell extraordinary NFTs</Heading>
                    <Text className="slide-text">
                        Enter in this creative world. Discover now the latest NFTs or start creating your own!
                    </Text>
                    <Flex className="btn-area" gap={7}>
                        <ButtonStyle $white>Discover now</ButtonStyle>
                        <ButtonStyle>Watch Video</ButtonStyle>
                    </Flex>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
            <Box className="slide-box" bg={'primary'}>
                    <Heading className="slide-title">Discover, collect, and sell extraordinary NFTs</Heading>
                    <Text className="slide-text">
                        Enter in this creative world. Discover now the latest NFTs or start creating your own!
                    </Text>
                    <Flex className="btn-area" gap={7}>
                        <ButtonStyle $white>Discover now</ButtonStyle>
                        <ButtonStyle>Watch Video</ButtonStyle>
                    </Flex>
                </Box>
            </SwiperSlide>
        </SwiperStyle>
    )
}

const ButtonStyle = styled.button`
    height: 40px;
    padding: 0 15px;
    border-radius: 12px;
    font-size: 16px;
    background: ${(props) => (props.$white ? 'white' : '')};
    color: ${(props) => (props.$white ? 'black' : '#F4F7FE')};
`

const SwiperStyle = styled(Swiper)`
    width: 100%;
    height: 340px;
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    .swiper-slide {
    }
    .slide-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 56px 64px;
    }
    .slide-title {
        width: 52%;
        font-size: 30px;
        color: white;
    }
    .slide-text {
        margin-top: 10px;
        color: #E3DAFF;
        font-size: 16px;
        font-weight: 500;
    }
    .btn-area {
        margin-top: auto;
    }
    .swiper-pagination {
        bottom: 0;
    }
`

export default Banner