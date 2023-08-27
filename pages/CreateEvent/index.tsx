"use client";
import EventForm from "@/components/EventCreateForm";

export default function index() {
    async function createEvent(eventData: any) {
        const response = await fetch('/api/new-event', {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
  return (
    <EventForm onSubmit={createEvent}/>
  )
}
