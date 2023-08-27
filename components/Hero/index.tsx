"use client";
import Link from "next/link";
import { useAccount } from "wagmi";
import { Web3Button } from '@web3modal/react'

export default function index() {
  const { address,isConnected } = useAccount();
  return (
    <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold">An onchain Blockchain Certificate Generator</h1>
              <p className="py-6">A user-friendly certificate generating software for every Lms platform. Transparancy at every step! </p>
              {isConnected?<Link href={`address/${address}/certificates`} className="btn">Check your certificates</Link>:<Web3Button/>}
            </div>
        </div>
    </div>
  )
}
