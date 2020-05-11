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
    padding: 48px;
    font-family: 'PT Sans', sans-serif;
    background-color: ${COLORS.dark};
    color: ${COLORS.light};
  }
`

export const Headline = styled.div`
  font-size: 64px;
  font-weight: bolder;
  line-height: 40px;
`

export const Subtitle = styled.div`
  font-size: 24px;
  font-weight: lighter;
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
