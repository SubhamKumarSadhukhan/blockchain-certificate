"use client";
import EventCard from '@/components/EventCard'
import { readContract } from 'wagmi/actions';
import CERTIFICATEABI from '@/lib/contracts/CERTIFICATEABI.json'
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
type Props = {}

export default function index({}: Props) {
    const router: any = useRouter();
    const [events, setEvents] = useState([]);
    const { address } = useAccount();
    const [state, setState] = useState("");
    useEffect(() => {
        if (address) {
            setState(address);
        }
    }, [address]);

    async function getEvents() {
    const data:any = await readContract({
      address: "0xEaf8bE7cd839af2Bd428295B52E54f72Ac661922",
      abi: CERTIFICATEABI,
      functionName: 'getAccessToEvent',
      args: [address]
     });
     console.log("data",data);
    setEvents(data);
    }
  useEffect(() => {
    getEvents()
    },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="mockup-browser border bg-base-300 w-full">
            <div className="mockup-browser-toolbar">
                <input type="text" placeholder="Event name" className="input py-6" />
                <button onClick={()=>router.push('/events/createEvent')} className="btn btn-primary">Create Event</button>
            </div>
            {/* <div className="flex justify-center px-4 py-16 bg-base-200"> */}
                <div className="flex justify-center px-4 py-16 min-h-screen bg-base-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {events.map((event) => (<EventCard name={event} />))}
            {/* </div> */}
            </div>
        </div>
    </main>
  )
}