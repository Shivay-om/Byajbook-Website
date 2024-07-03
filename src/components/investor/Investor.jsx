import React from 'react'
import inv from '../../assets/images/inv.png'

const Investor = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 overflow-y-auto">
    <div className=" bg-white p-6 rounded-md shadow-md relative mx-auto my-8">
      <button 
        className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-500"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="md:w-[800px] flex flex-col justify-center items-center gap-4 md:p-4 text-center">
        <h1 className="text-sm md:text-xl font-semibold mb-4">We are backed by a supportive investor who embraces our culture & disruptive vision for Byaj<span className='text-[#3BBD61]'>book</span>.</h1>
        <img src={inv} alt="Investor Relations" className="m-5 md:m-10 w-48 md:w-80"/>
        <h1 className="text-xs md:text-lg mb-4">We are always leveling the playing field. Everyone should have access to the most promising investments.</h1>
        <button 
          className="bg-primary-dark text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          I'm interested in your next round
        </button>
      </div>
    </div>
  </div>
  )
}

export default Investor
