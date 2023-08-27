
export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <div className="mockup-browser border bg-base-300 w-full">
            <div className="mockup-browser-toolbar">
            </div>
            <div className="flex justify-center px-4 py-16 min-h-screen bg-base-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                    <div className="card w-full glass h-60">
                        <div className="card-body">
                            <h2 className="card-title">Madhyamik-2021</h2>
                            <p>Madhyamik-2021</p>
                            <div className="card-actions justify-items-center">
                                <button className="btn btn-primary">View Details</button>
                                <button className="btn btn-primary">Share</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </main>
  )
}
