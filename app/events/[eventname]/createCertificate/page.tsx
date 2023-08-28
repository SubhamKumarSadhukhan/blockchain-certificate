"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'next/navigation';
import { writeContract } from 'wagmi/actions';
import CERTIFICATEABI from '@/lib/contracts/CERTIFICATEABI.json'
import { toast } from 'react-toastify';

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

interface FormData {
  name: string;
  description: string;
  duration: number;
  validTill: number;
  gender: string;
  uniqueId: string;
  grade: number;
  to: string;
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
    duration: Yup.number()
        .min(0, 'Too Short!')
        .default(0)
        .required('Required'),
    validTill: Yup.number()
        .min(0, 'Cannot be negative')
        .default(0)
        .required('Required'),
    gender: Yup.mixed().oneOf(["Male","Female","Other"]).required('Required'),
    to: Yup.string().required('Required'),
 });


export default function EventForm () {
  const router: any = useParams();
  const [loading,setLoading]=useState<boolean>(false);
  const initialValues: FormData = {
    name: '',
    description: '',
    duration: 0,
    validTill: 0,
    gender: Gender.Male,
    uniqueId: '',
    grade: 0,
    to: ''
  };


  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      createCertificate(values);
    },
  });
  async function createCertificate(formData: FormData) {
    try{
      setLoading(true);
      toast.loading("Creating Certificate");
  const gender=(formData.gender=='Male')?0:formData.gender=="Female"?1:2;
  const year=new Date().getFullYear();
  const month=new Date().getMonth();
  const day=new Date().getDate();

  const response=await fetch('https://ipfs-phdr.onrender.com/generate/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.name,
      event: router.eventname,
      doi: day,
      moi: month,
      yoi: year,
  })
})  
const respons=await response.json();
const ipfsHash=`ipfs://${respons}`;
const data = await writeContract({
address: "0xEaf8bE7cd839af2Bd428295B52E54f72Ac661922",
  abi: CERTIFICATEABI,
  functionName: 'generateCertificate',
  args: [
      formData.grade,formData.duration,formData.validTill,gender,router.eventname,formData.name,formData.description,ipfsHash,formData.uniqueId,formData.to
  ],
});
    toast.dismiss();
    toast.info("Certificate Createing in progress");
    }catch(e){
      console.log(e);
      toast.dismiss();
      setLoading(false);
      toast.error("Error in creating certificate");
    }
  }

  return (
    <div className="p-4 card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Create Certificate</h1>
      <form onSubmit={formik.handleSubmit} className="card-body space-y-4">
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
        <select id='gender' name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} className="select select-warning w-full max-w-xs">
            {/* onBlur={formik.handleBlur} className="select select-warning w-full max-w-xs"> */}
            <option disabled selected>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
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
            type="number"
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
        <div>
          <label htmlFor="to" className="font-semibold">To Address</label>
          <input
            type="text"
            id="to"
            name="to"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full"
            placeholder="Address of the person to whom certificate is to be issued"
          />
          {formik.touched.to && formik.errors.to && <div className="text-red-500">{formik.errors.to}</div>}
        </div>
        <button disabled={loading} type="submit" className="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  );
};