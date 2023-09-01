"use client";
import WalletConnectRequired from "@/pages/WalletConnectRequired";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { readContract } from "@wagmi/core";
import CERTIFICATEABI from "@/lib/contracts/CERTIFICATEABI.json";
import { useParams } from "next/navigation";
import Image from "next/image";
interface Certificate {
    name: string;
    description: string;
    duration: number;
    validTill: number;
    grade: number;
    date: number;
    gender: number;
    uniqueId: string;
    image: string;
    eventName: string;
    owner: string;
}

export default function index() {
    const router: any = useParams();
    const { isConnected } = useAccount();
    const [state,setState]=useState<any>({});
    useEffect(() => {
        async function getCertificate() {
        try{
        const tokenIds:any = await readContract({
            address:"0xEaf8bE7cd839af2Bd428295B52E54f72Ac661922",
            abi: CERTIFICATEABI,
            functionName: 'getCertificateDetails',
            args: [router.tokenid]
        });
        console.log("tokenIds",tokenIds);
        setState(tokenIds);
    }catch(e){
        console.log("e",e);
    }
    }
    if(isConnected)
    getCertificate()
    },[isConnected])
  return (
    <>{isConnected?
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
        name: {state.name}<br/>
        description: {state.description}<br/>
        duration: {state.duration}<br/>
        gender: {state.gender==0?"Male":state.gender==1?"Female":"Other"}<br/>
        {state.validTill?<>validTill: {state.validTill}<br/></>:null}
        {state.grade?<>grade: {state.grade}<br/></>:null}
        issued to: {state.owner}<br/>
        {state.image&&<img src={`https://ipfs.io/ipfs/${state.image.split('/')[2]}`} width={400} height={400} alt={""} />}
    </main>:<WalletConnectRequired/>}
    </>
  )
}