import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo'

const FooterContainer = styled.div`
    min-height: 30em;
    background-color: #1d2124;
    ${tw`
flex
min-w-full
pt-4
md:pt-12
pb-1
items-center
justify-center
 `};
`

const InnerContainer = styled.div`
 ${tw`
 flex
 flex-col
 w-full
 h-full
 max-w-screen-2xl
 `};
`

const AboutContainer = styled.div`
    ${tw`
 flex
 flex-col
 `};
`

const AboutText = styled.p`
 ${tw`
 text-white
 text-sm
 font-normal
 max-w-xs
 leading-5
 mt-2
 `};
`

const SectionContainer = styled.div`
 ${tw`
 flex
 flex-col
 mr-3
 `};
`

const LinksList = styled.ul`
 ${tw`
 outline-none
 list-none
 flex
 flex-col
 `};
`

const ListItem = styled.li`
${tw`
 mb-3
 `};
 & > a{
     ${tw`
     text-sm
     text-white
     `}
 }
`
const HeaderTitle = styled.h3`
 ${tw`
 text-base
 font-bold
 text-white
 mb-3
 `};
`

export function Footer() {
    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color={'white'} bgColor="dark" />
                    <AboutText>YourCar is a safe, supportive community over 14 million strong with more than 450,000 vehicles listed and over 850 unique makes and models available. </AboutText>
                </AboutContainer>
                <SectionContainer>
                    <LinksList>
                    <HeaderTitle>Links</HeaderTitle>
                    </LinksList>
                </SectionContainer>
            </InnerContainer>
        </FooterContainer>
    )
}
