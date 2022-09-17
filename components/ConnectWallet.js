import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from "wagmi";

const ConnectWallet = () => {
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className='bg-white p-1 rounded-[15px] mt-[40px]'>
      {account ? (
        data
      ) : (
          <ConnectButton />
      )}
    </div>
  )
}

export default ConnectWallet