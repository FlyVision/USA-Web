/* eslint-disable semi,react/jsx-indent */
/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */

//libraries
import React from 'react'
import styled from 'react-emotion'
// design components
import logo from '../images/flyvision-logo.svg'
import header from '../images/header.svg'
import background from '../images/background.jpg'
import bgBody from '../images/body.jpg'
import './index.css'
//images
import photo1 from '../photos/1.jpg'
import photo2 from '../photos/2.jpg'
import photo3 from '../photos/3.jpg'
import photo4 from '../photos/4.jpg'
import photo5 from '../photos/5.jpg'
import photo6 from '../photos/6.jpg'
import photo7 from '../photos/7.jpg'
import photo8 from '../photos/8.jpg'
//portfolio logos
import christian from '../portfolio/christian.svg'
import hublot from '../portfolio/hublot.svg'
import samsung from '../portfolio/samsung.svg'
import swarovski from '../portfolio/swarovski.svg'
import telenor from '../portfolio/telenor.svg'

//icons
import Octicon,{
    Globe,
    Settings,
    Tag,
    Eye,
    Organization,
    Gift
} from '@githubprimer/octicons-react'

//background
const Header = styled('div')`
background: url(${background});
`;
const Body = styled('div')`
background: url(${background});
background-position: center;
`;

//logo
const Container = styled('div')`${tw( [
    'flex',
    'justify-center',
    'mb-4',] )};
    img {margin:50px;}`;

//body
const Hero = styled('div')` ${ tw([
    'flex',
    'flex-wrap',
    'w-1/3'
])};
margin-top: 100px;
margin-left: 200px;
margin-bottom: 100px;
img {
min-width: 300px;
}
p {
font-family: InterUIRegular;
}
`;
//photos
const PhotoGrid = styled('div')`${tw('flex justify-center flex-wrap')};
img {
    max-width: 220px;
}
`;

const HeaderImage = styled('img')`${tw( [
    'w-1/4',
    'mt-8',
    'flex-none',
] )};`;

const BlueButton = styled('button')`${tw( [
    'flex-initial',
    'bg-blue',
    'hover:bg-blue-dark',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded-full'
        ] )};`;
const VideoButton = styled('button')`${tw([
    'flex-initial',
    'font-bold',
    'hover:bg-grey',
    'leading-normal',
    'px-4',
    'py-1',
    'rounded-full',
    'text-xs'
])};`;
const Buttons = styled('div')` ${tw([
    'flex',
    'justify-center',
])};
`;

const Paragraph = styled('p')`${tw( [
    'text-sm',
] )};
font-family: InterUIRegular;
text-align: ${props=>props.ta};
margin: 50px 250px;
`;



const HeaderContainer = styled('div')`${tw( [
] )};
display: flex;
flex-wrap: no-wrap;
margin: ${props=>props.margin};
justify-content: ${props=>props.justify};
`;

const ParagraphHeader = styled('div')` ${ tw([
    'uppercase',
] )};
font-family: ${props=>props.ff};
font-size: ${props=>props.fs};
`;

const Icons = styled('div')` ${tw( [
    'flex',
    'flex-wrap',
    'items-center',
    'justify-center'
] )};`;

const Box = styled('div')`${tw( [
    'flex',
    'flex-wrap',
    'justify-center',
    'w-1/3'
] )};
svg {
    width: 100%;
}
p {
    width: 70%;
    text-align: center;
    font-family: InterUIRegular;
}
`;

const Portfolio = styled('div')` ${ tw( [
    'flex',
    'flex-wrap',
    'justify-around',
    'bg-blue'
] ) };
img {
    width: 15%;
    height: 100px;
    margin: 20px;
}
`;

const Photo = styled('div')`${tw( [
] )};
margin: 15px;
`;



export default () => (
  <React.Fragment>
      <Header>
          <Container>
              <img src={logo} />
          </Container>
          <Hero>
              <HeaderImage src={header} />
              <p>Revolutionary new display platform providing
                  <br /> the ultimate in product presentation;
                  <br />envisioning the future of display marketing.
              </p>
              <Buttons>
                  <BlueButton>
                      LEARN MORE
                  </BlueButton>
                  <VideoButton>
                      WATCH THE VIDEO
                  </VideoButton>
              </Buttons>
          </Hero>

          <PhotoGrid>

              <Photo>
                  <img src={photo1} />
              </Photo>
              <Photo>
                  <img src={photo2} />
              </Photo>
              <Photo>
                  <img src={photo3} />
              </Photo>
              <Photo>
                  <img src={photo4} />
              </Photo>
          </PhotoGrid>
      </Header>

      <Body>

          <HeaderContainer justify="center" margin="50px 250px">
            <ParagraphHeader ff="InterUIExtraBold" fs="3rem" margin="50px 250px">Display&nbsp;</ParagraphHeader>
            <ParagraphHeader ff="InterUIRegular" fs="3rem" margin="50px 250px">| Options</ParagraphHeader>
          </HeaderContainer>

          <PhotoGrid>
            <Photo>
              <img src={photo5} />
                <HeaderContainer justify="center" margin="5px 0px">
                    <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">1&nbsp;</ParagraphHeader>
                    <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Sided</ParagraphHeader>
                </HeaderContainer>
            </Photo>
            <Photo>
              <img src={photo6} />
                <HeaderContainer justify="center" margin="5px 0px">
                    <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">2&nbsp;</ParagraphHeader>
                    <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Sided</ParagraphHeader>
                </HeaderContainer>
            </Photo>
            <Photo>
              <img src={photo7} />
                <HeaderContainer justify="center" margin="5px 0px">
                    <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">4&nbsp;</ParagraphHeader>
                    <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Sided</ParagraphHeader>
                </HeaderContainer>
            </Photo>
            <Photo>
              <img src={photo8} />
                <HeaderContainer justify="center" margin="5px 0px">
                    <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">LCD&nbsp;</ParagraphHeader>
                    <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Incorporated</ParagraphHeader>
                </HeaderContainer>
            </Photo>
          </PhotoGrid>

          <HeaderContainer justify="flex-end" margin="50px 250px">
            <ParagraphHeader ff="InterUIExtraBold" fs="3rem">Visual&nbsp;</ParagraphHeader>
            <ParagraphHeader ff="InterUIRegular" fs="3rem">| Options</ParagraphHeader>
          </HeaderContainer>
          <Paragraph ta="right">Each display can be configured into four (4) options.<br />
              The options are... 1-Sided, 2-Sided, 4-Sided and LCD incorporated.<br />Learn More</Paragraph>

          <HeaderContainer justify="flex-start" margin="50px 250px">
            <ParagraphHeader ff="InterUIExtraBold" fs="3rem">Benefits&nbsp;</ParagraphHeader>
            <ParagraphHeader ff="InterUIRegular" fs="3rem">| Features</ParagraphHeader>
          </HeaderContainer>
          <Paragraph ta="left">FlyVision is a 21st Century technology based company that<br />
              offers unique and innovative display solutions designed to<br />
              drive incremental sales at the point of purchase.</Paragraph>

          <Icons>
            <Box>
              <Octicon icon={Gift} size="large" />
              <p>First mover advantage for a new to market product</p>
            </Box>
            <Box>
              <Octicon icon={Organization} size="large" />
              <p>Opportunity to increase sales at point of purchase</p>
            </Box>
            <Box>
              <Octicon icon={Eye} size="large" />
              <p>Revolutionary new display platform providing the ultimate in product presentation</p>
            </Box>
            <Box>
              <Octicon icon={Tag} size="large" />
              <p>Reinforce premium position of your brand</p>
            </Box>
            <Box>
              <Octicon icon={Settings} size="large" />
              <p>Flexible options for display solutions using FlyVision technology</p>
            </Box>
            <Box>
              <Octicon icon={Globe} size="large" />
              <p>FlyVision currently operating in 6 markets</p>
            </Box>
          </Icons>

          <HeaderContainer justify="flex-start" margin="50px 250px">
            <ParagraphHeader ff="InterUIExtraBold" fs="3rem">Client&nbsp;</ParagraphHeader>
            <ParagraphHeader ff="InterUIRegular" fs="3rem">| Testimonials</ParagraphHeader>
          </HeaderContainer>

          <Portfolio>
            <img src={christian} />
            <img src={hublot} />
            <img src={samsung} />
            <img src={swarovski} />
            <img src={telenor} />
          </Portfolio>

          <HeaderContainer justify="flex-start" margin="50px 250px">
            <ParagraphHeader ff="InterUIExtraBold" fs="3rem">Inquire&nbsp;</ParagraphHeader>
            <ParagraphHeader ff="InterUIRegular" fs="3rem">| Need Assistance</ParagraphHeader>
          </HeaderContainer>

       </Body>

  </React.Fragment>

)
