import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/responsive'
import JeepImg from '../../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
    ${tw`
 w-full
 flex
 flex-wrap
 items-center
 md:justify-center
 pt-4
 pb-4
 pr-7
 pl-7
 md:pl-0
 md:pr-0
 bg-white
 `};
`

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -50px;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }
    @media (min-width: ${SCREENS['2xl']}) {
        height: 35em;
        margin-left: 0;
    }
`

const InfoContainer = styled.div`
    ${tw`
 md:w-1/2
 flex
 flex-col
 md:ml-6
 2xl:ml-16
 `};
`

const Title = styled.h1`
    ${tw`
 text-black
 text-2xl
 md:text-5xl
 font-extrabold
 md:font-black
 md:leading-normal
 `};
`

const InfoText = styled.p`
    ${tw`
 md:max-w-2xl
 text-sm
 md:text-base
 text-gray-500
 mt-4
 font-normal
 `};
`

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="JeepImg" />
            </CarContainer>
            <InfoContainer>
                <Title>We Provide Quality Service Since 1993 </Title>
                <InfoText>
                    YourCar is the world’s largest peer-to-peer car sharing
                    marketplace where you can book any car you want, wherever
                    you want it, from a vibrant community of trusted hosts
                    across the US, Canada, and the UK. Guests choose from a
                    totally unique selection of nearby cars, while hosts earn
                    extra cash to offset the costs of car ownership. A pioneer
                    of the sharing economy and the travel industry, YourCar is a
                    safe, supportive community over 14 million strong with more
                    than 450,000 vehicles listed and over 850 unique makes and
                    models available. Whether it’s a rugged truck to help out on
                    moving day, something smooth and buttery for a luxurious
                    weekend away, or a vintage van for a picture-perfect road
                    trip, YourCar lets you find the perfect vehicle for your
                    next adventure.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}
