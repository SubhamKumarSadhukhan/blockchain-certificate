import Link from "next/link";

export default function index() {
  return (
    <div className="hero min-h-screen bg-info rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold">This is an onchain blockchain certificate generator</h1>
              <p className="py-6">Now days every Lms platform want to generate such certificate that can be persistent and easy to verify. So our SAAS will solve the problem by create a block chain baised certificate, here the data is even stored in block chain so it's completly transparrent to all users.</p>
              <Link href={'/profile'} className="btn">Check your certificates</Link>
            </div>
        </div>
    </div>
  )
}
