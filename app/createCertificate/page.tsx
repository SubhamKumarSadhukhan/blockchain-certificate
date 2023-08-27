"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

enum Gender {
  Male = 0,
  Female = 1,
  Other = 2,
}

interface FormData {
  name: string;
  description: string;
  eventName: string;
  duration: number;
  validTill: number;
  gender: number;
  uniqueId: string;
  grade: number;
}

 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   description: Yup.string()
     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   eventName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    duration: Yup.number()
        .min(0, 'Too Short!')
        .default(0)
        .required('Required'),
    validTill: Yup.number()
        .min(0, 'Cannot be negative')
        .default(0)
        .required('Required'),
    gender: Yup.mixed().oneOf(Object.keys(Gender)).required('Required'),
 });


export default function EventForm (props:any) {
  const initialValues: FormData = {
    name: '',
    description: '',
    eventName: '',
    duration: 0,
    validTill: 0,
    gender: Gender.Male,
    uniqueId: '',
    grade: 0,
  };


  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  return (
    <div className="p-4 md:w-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Create Certificate</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
          {formik.touched.name && formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}
        </div>
        <div>
          <label htmlFor="description" className="font-semibold">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Enter Certificate Description"
          />
          {formik.touched.description && formik.errors.description && <div className="text-red-500">{formik.errors.description}</div>}
        </div>
        <div>
          <label htmlFor="eventName" className="font-semibold">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formik.values.eventName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Enter Event name"
          />
          {formik.touched.eventName && formik.errors.eventName && <div className="text-red-500">{formik.errors.eventName}</div>}
        </div>
        <select id='gender' name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} className="select select-warning w-full max-w-xs">
            {/* onBlur={formik.handleBlur} className="select select-warning w-full max-w-xs"> */}
            <option disabled selected>Select Gender</option>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
            <option value={2}>Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender && <div className="text-red-500">{formik.errors.gender}</div>}
        <div>
          <label htmlFor="duration" className="font-semibold">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Duration in hours"
          />
          {formik.touched.duration && formik.errors.duration && <div className="text-red-500">{formik.errors.duration}</div>}
        </div>
        <div>
          <label htmlFor="validTill" className="font-semibold">Valid till</label>
          <input
            type="text"
            id="validTill"
            name="validTill"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Enter 0 if no expiry"
          />
          {formik.touched.validTill && formik.errors.validTill && <div className="text-red-500">{formik.errors.validTill}</div>}
        </div>
        <div>
          <label htmlFor="uniqueId" className="font-semibold">Unique Id</label>
          <input
            type="string"
            id="uniqueId"
            name="uniqueId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Enter Unique Id"
          />
          {formik.touched.uniqueId && formik.errors.uniqueId && <div className="text-red-500">{formik.errors.uniqueId}</div>}
        </div>
        <div>
          <label htmlFor="grade" className="font-semibold">Grade</label>
          <input
            type="number"
            id="grade"
            name="grade"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Enter Grade or 0 if no grade"
          />
          {formik.touched.grade && formik.errors.grade && <div className="text-red-500">{formik.errors.grade}</div>}
        </div>
        <button type="submit" className="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  );
};