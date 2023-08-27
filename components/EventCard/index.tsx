
type Props = {
    name: string,
    description: string,
}

export default function index({name,description}: Props) {
  return (
    <div className="w-full">
        <div className="card w-full glass h-60">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Generate Certificate</button>
                </div>
            </div>
        </div>
    </div>
  )
}