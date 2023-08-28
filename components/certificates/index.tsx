"use client";
import { readContract } from '@wagmi/core'
import CERTIFICATEABI from '@/lib/contracts/CERTIFICATEABI.json'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAccount } from 'wagmi';
interface Event {
  name: string;
  description: string;
  duration: number;
}
export default function Profile() {
  const router: any = useParams();
  const [state,setState]=useState([]);
  const { isConnected } = useAccount();
  async function getCertificate() {
    const data:any= await readContract({
  address: "0xEaf8bE7cd839af2Bd428295B52E54f72Ac661922",
  abi: CERTIFICATEABI,
  functionName: 'getCertificatesTokenIds',
  args: [router.id]
     });
  const cert=[];
  for (const i in data){
    cert.push(readContract({
  address: "0xEaf8bE7cd839af2Bd428295B52E54f72Ac661922",
  abi: CERTIFICATEABI,
  functionName: 'getCertificateDetails',
  args: [data[i]]
     }));
    }
  let s:any=(await Promise.all(cert));
  setState(s);
  }

  useEffect(() => {
    if(isConnected)
    getCertificate()
    },[isConnected])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="mockup-browser border bg-base-300 w-full">
            <div className="mockup-browser-toolbar">
            </div>
            <div className="flex justify-center px-4 py-16 min-h-screen bg-base-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {state.map((event:Event) => 
                    <div className="card w-full glass h-60">
                        <div className="card-body">
                            <h2 className="card-title">{event.name}</h2>
                            <p>Madhyamik-2021</p>
                            <div className="card-actions justify-items-center">
                                <button className="btn btn-primary">View Details</button>
                                <button className="btn btn-primary">Share</button>
                            </div>
                        </div>
                    </div>)}
                </div>
        </div>
    </main>
  )
}


