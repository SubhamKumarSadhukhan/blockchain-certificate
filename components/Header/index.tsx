"use client";
import { Web3Button } from '@web3modal/react'

import './Header.scss'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Header() {
      const router = useRouter();


    return (
        <div className="navbar bg-default px-6">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/profile">Your certificates</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/about">About</Link></li>
                    {/* <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li> */}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Certificate generator</a>
            </div>
            <div className="navbar-center hidden lg:flex p-2">
                <ul className="menu menu-horizontal px-1 mx-3">
                    <li><Link href="/" replace>Home</Link></li>
                    <li><Link href="/profile" replace>Your certificates</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><a onClick={()=>router.push('/about')}>About</a></li>
                {/* <li tabIndex={0}>
                    <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                </li> */}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn" onClick={() => open()}>Button</a> */}
                <Web3Button />
            </div>
        </div>
    )
}

// const Header: React.FC = () => {
//   return (
//     <div className="mx">
//       <div className="header">
//         <Link href="/">
//           <Image src={Logo} alt="" width="70" height="70" />
//         </Link>
//         <Web3Button />
//       </div>
//     </div>
//   )
// }

