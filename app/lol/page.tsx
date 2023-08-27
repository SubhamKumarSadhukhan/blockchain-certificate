"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [state, setState] = useState([])
    useEffect(() => {
        const fetchTodo = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await res.json();
            setState(json)
            console.log(json)
        };
        fetchTodo();
    }, [])
  return (
    <main>
        <Link href="/">
            Home
        </Link>
          <button className="btn">Hello daisyUI</button>;

        {state.map((item:{title: string},id) => {
            return (
                <div key={id}>
                    {item.title}
                </div>
            )
        })}
        page
    </main>
  )
}
