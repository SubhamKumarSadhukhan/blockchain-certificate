"use client";
import { useRouter } from 'next/navigation';

export default function index({name}: any) {
  const router = useRouter();
  return (
    <div className="w-full">
        <div className="card w-full glass h-60">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                <button onClick={()=>router.push(`/events/${name}/createCertificate`)} className="btn btn-primary">Generate Certificate</button>
                </div>
            </div>
        </div>
    </div>
  )
}