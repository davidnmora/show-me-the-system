import React from 'react'
import { Button } from 'antd'
import { ContactAndConnectLinksContainer } from './styles'
import { Emoji } from './Emoji'

export const ContactAndConnectLinks = () => {
  return (
    <ContactAndConnectLinksContainer>
      <Button onClick={() => window.open('http://eepurl.com/g27KZX')}>
        <Emoji symbol="📮" label="mail" fontSize={16} />
        Stay me updated via email!
      </Button>
      <Button
        onClick={() => window.open('https://medium.com/show-me-the-system')}
      >
        <Emoji symbol="📜" label="mail" fontSize={16} />
        Read the Manifesto on Medium
      </Button>
    </ContactAndConnectLinksContainer>
  )
}
