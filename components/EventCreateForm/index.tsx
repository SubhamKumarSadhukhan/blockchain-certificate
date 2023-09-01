import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { writeContract } from '@wagmi/core'
import CERTIFICATEABI from '@/lib/contracts/CERTIFICATEABI.json'
import { toast } from 'react-toastify';
interface FormData {
  eventName: string;
  ownerAddress: string;
}

const EventCreateSchema = Yup.object().shape({
  ownerAddress: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  eventName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const EventForm = () => {
  const initialValues: FormData = {
    eventName: '',
    ownerAddress: '',
  };
  async function createEvent(formData: FormData) {
    try{
      toast.loading("Creating event");
    const data= await writeContract({
  address: "0xEaf8bE7cd839af2Bd428295B52E54f72Ac661922",
  abi: CERTIFICATEABI,
  functionName: 'createEvent',
  args:[formData.ownerAddress,formData.eventName]
     });
     
    }catch(e){
      toast.dismiss();
      toast.error("Error creating event");
      console.log("e",e);
    }
    }
  const formik = useFormik({
    initialValues,
    validationSchema: EventCreateSchema,
    onSubmit: (values) => {
      console.log(values);
      createEvent(values);
    },
  });

  return (
    <div className="p-4 contents-center">
      <div className="flex items-center justify-center h-screen">
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Event Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input value={formik.values.eventName} name="eventName" onChange={formik.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='madhyamik' />
            </div>
            {formik.touched.eventName && formik.errors.eventName && <div className="text-red-500">{formik.errors.eventName}</div>}
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Owner Address
              </label>
            </div>
            <div className="md:w-2/3">
              <input value={formik.values.ownerAddress} name="ownerAddress" onChange={formik.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="0x.................." />
            </div>
            {formik.touched.ownerAddress && formik.errors.ownerAddress && <div className="text-red-500">{formik.errors.ownerAddress}</div>}
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
