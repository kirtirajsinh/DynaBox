import React from 'react'
import ConnectWallet from './ConnectWallet'

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <img src="/DYNABOX.png" className="w-1/3 h-1/3 py-3" />
        <ConnectWallet />
    </div>
  )
}

export default LandingPage