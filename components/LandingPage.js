import React from 'react'
import ConnectWallet from './ConnectWallet'
import LandingPage_logo from './LandingPage_logo'
import LandingPage_3options from './LandingPage_3options'

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <LandingPage_logo />
      <ConnectWallet />

      {/* if ConnectWallet is connected, show LandingPage_3options */}
      <LandingPage_3options />

    </div>
  )
}

export default LandingPage