import React from 'react'
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import FeaturesNovaTemplate from '../components/sections/FeaturesNovaTemplate'
import { ColorModeProvider } from '../context/UseContextArchive'
import { useColorMode } from '../context/UseContextArchive'

function FeaturesRoute({ colorMode }) {
  return (
    <div className="bg-black min-h-screen">
      <ColorModeProvider>
        <NavbarNovaTemplate colorMode="dark" />
        <div className="h-24 tablet1:h-32 " />
        <FeaturesNovaTemplate colorMode="dark" />
      </ColorModeProvider>
    </div>
  )
}

export default FeaturesRoute
