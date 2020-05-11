import React from 'react'
import { Button } from 'antd'
import { ContactAndConnectLinksContainer } from './styles'
import { Emoji } from './Emoji'

export const ContactAndConnectLinks = () => {
  return (
    <ContactAndConnectLinksContainer>
      <a
        href="http://eepurl.com/g27KZX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>
          <Emoji symbol="📮" label="mail" fontSize={16} />
          Keep me updated via email!
        </Button>
      </a>
    </ContactAndConnectLinksContainer>
  )
}
