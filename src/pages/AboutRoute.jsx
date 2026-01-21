import React from 'react'
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import AboutNovoTemplate from '../components/sections/AboutNovoTemplate'
import { ColorModeProvider } from '../context/UseContextArchive'
import { useColorMode } from '../context/UseContextArchive'

function AboutRoute({ colorMode }) {
  return (
    <div className="bg-black min-h-screen">
      <ColorModeProvider>
        <NavbarNovaTemplate colorMode="dark" />
        <div className="h-24 tablet1:h-32 " />
        <AboutNovoTemplate colorMode="dark" />
      </ColorModeProvider>
    </div>
  )
}

export default AboutRoute
