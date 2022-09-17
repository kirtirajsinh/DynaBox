import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from "wagmi";

const ConnectWallet = () => {
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {account ? (
        data
    ) : (
        <ConnectButton />
    )}
    </div>
  )
}

export default connectWallet