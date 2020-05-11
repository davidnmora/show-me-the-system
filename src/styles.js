// import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const COLORS = {
  dark: '#2F2F2F',
  light: '#eee',
  cool: '#9feeeb',
  hot: '#eea8e9',
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'PT Sans', sans-serif;
    background-color: ${COLORS.dark};
    color: ${COLORS.light};
  }
`

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const PageSection = styled.section`
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 700px;
`

export const Headline = styled.div`
  font-size: 64px;
  font-weight: bolder;
  line-height: 40px;
  margin-bottom: 36px;
`

export const Subtitle = styled.div`
  font-size: 24px;
  font-weight: lighter;
`

export const Paragraph = styled.p`
  font-weight: lighter;
  font-size: 16px;
  line-height: 1.6;
  max-width: 500px;
`

export const ContactAndConnectLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 24px;

  max-width: 400px;

  & > * {
    margin-top: 24px;
    //margin-bottom: 24px;
  }
`
