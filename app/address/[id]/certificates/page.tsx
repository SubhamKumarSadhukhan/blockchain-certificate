"use client"
import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'
import Profile from '@/components/certificates'

const chains = [goerli]
const projectId = '3aad51954bc9beedced7e487b5802f04'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

export default function page() {
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
        <Profile/>
    </WagmiConfig>
    </>
  )
}
