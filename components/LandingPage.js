import React from 'react'
import ConnectWallet from './ConnectWallet'

const LandingPage = () => {
  return (
    // <div className="flex flex-col h-screen items-center justify-center ">
    <div className="flex flex-col h-screen items-center">
      <img src="/DYNABOX.png" className="max-w-2xl mt-[8rem]" />
      <p className="tracking-[.32em] text-[1.55rem] text-white m-[0px]">
          THE AWESOME NFT EXCHANGE GAME
      </p>
      <div className='bg-white p-1 rounded-[15px] mt-[40px]'>
        <ConnectWallet />
      </div>
    </div>
  )
}

export default LandingPage