import React from 'react'
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import AboutNovoTemplate from '../components/sections/AboutNovoTemplate'
import { ColorModeProvider } from '../context/UseContextArchive'
import { useColorMode } from '../context/UseContextArchive'
import FooterNovoTemplate from '../components/sections/FooterNovoTemplate'
import SocialMediaTemplate from '../components/sections/SocialMediaTemplate'

function AboutRoute({ colorMode }) {
  return (
    <div className="bg-black min-h-screen">
      <ColorModeProvider>
        <NavbarNovaTemplate colorMode="dark" />
        <div className="h-24 tablet1:h-32 " />
        <AboutNovoTemplate colorMode="dark" />
        <SocialMediaTemplate
          colorMode="dark"
          className="bg-darkOpacity py-[64px] desktop1:py-[96px]"
        />
        <FooterNovoTemplate
          colorMode="dark"
          expediente={true}
          adress={true}
          emailSecond={true}
        />
      </ColorModeProvider>
    </div>
  )
}

export default AboutRoute
