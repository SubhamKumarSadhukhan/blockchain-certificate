import React, { useState } from 'react';

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

interface EventFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  description: string;
  eventName: string;
  duration: number;
  validTill?: number;
  gender: Gender;
  uniqueId: string;
  grade: string;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    eventName: '',
    duration: 0,
    validTill: 0,
    gender: Gender.Male,
    uniqueId: '',
    grade: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4 mx-40">
        <div>
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="description" className="font-semibold">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e: any)=>handleInputChange(e)}
            className="input input-bordered w-full"
            placeholder="Enter description"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="eventName" className="font-semibold">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter event name"
          />
        </div>
        <div>
          <label htmlFor="duration" className="font-semibold">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter event duration"
          />
        </div>
        <div>
          <label htmlFor="validTill" className="font-semibold">Valid Till</label>
          <input
            type="number"
            id="validTill"
            name="validTill"
            value={formData.validTill}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter valid till"
          />
        </div>
        <div>
          <label htmlFor="gender" className="font-semibold">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          >
            <option value={Gender.Male}>Male</option>
            <option value={Gender.Female}>Female</option>
            <option value={Gender.Other}>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="uniqueId" className="font-semibold">Unique ID</label>
          <input
            type="text"
            id="uniqueId"
            name="uniqueId"
            value={formData.uniqueId}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter unique ID"
          />
        </div>
        <div>
          <label htmlFor="grade" className="font-semibold">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter grade"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
