import React from 'react'

const ContactUs = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md relative">
        <button 
          className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <form className='w-[400px] md:w-[450px] flex flex-col gap-3'>
          <h1 className='text-center md:text-xl font-bold mb-4'>Contact Us</h1>
          <div className="mb-4">
            <input type="text" id="name" placeholder='Name' className="w-full border border-primary-dark rounded-md px-4 p-2"/>
          </div>
          <div className="mb-4">
            <input type="email" id="email" placeholder='Email' className="w-full border border-primary-dark rounded-md px-4 p-2"/>
          </div>
          <div className="mb-4">
            <input type="number" id="mobile" placeholder='Mobile Number' className="w-full border border-primary-dark rounded-md px-4 p-2"/>
          </div>
          <div className="mb-4">
            <textarea id="message" placeholder='Message' className="w-full h-32 border border-primary-dark rounded-md px-4 p-3"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
