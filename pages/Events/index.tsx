import EventCard from '@/components/EventCard'
type Props = {}
const s = [
    {
    name: "Madhyamik-2021",
    description: "Madhyamik-2021",
    image: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
    name: "Madhyamik-2022",
    description: "Madhyamik-2022",
    image: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
    name: "Full Stack Web Development",
    description: "Full Stack Web Development",
    image: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    }
]

export default function index({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="mockup-browser border bg-base-300 w-full">
            <div className="mockup-browser-toolbar">
                <input type="text" placeholder="Event name" className="input " />

                {/* <div className="input">https://daisyui.com</div> */}
            </div>
            {/* <div className="flex justify-center px-4 py-16 bg-base-200"> */}
                <div className="flex justify-center px-4 py-16 min-h-screen bg-base-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {s.map((event) => (<EventCard name={event.name} description={event.description}/>))}
            {/* </div> */}
            </div>
        </div>
        <div className="mockup-phone border-primary">
            <div className="camera"></div> 
            <div className="display">
                <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
</div>
            
    </main>
  )
}