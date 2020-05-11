import React from 'react'
import {
  PageWrapper,
  PageSection,
  Headline,
  Subtitle,
  Paragraph,
} from './styles'
import { ContactAndConnectLinks } from './ContactAndConnectLinks'

function App() {
  return (
    <PageWrapper>
      <PageSection>
        <Subtitle>show me the</Subtitle>
        <Headline>system</Headline>
        <Paragraph>
          We live in an interconnected world. Yet we see and talk about it in
          bits and pieces.
        </Paragraph>
        <Paragraph>
          At Show Me the System, we're inventing media forms that let humanity
          see the big picture of our most important problems.
        </Paragraph>
        <ContactAndConnectLinks />
      </PageSection>
    </PageWrapper>
  )
}

export default App
