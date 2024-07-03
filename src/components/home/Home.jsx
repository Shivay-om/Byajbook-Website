import React from 'react'
import playstore from '../../assets/images/playstore_img.jpg'
import mobile from '../../assets/images/Mobile_img.png'
import landing from '../../assets/images/landing-img.png'
import vector2 from '../../assets/images/Vector 2.png'

const Home = () => {
  return (
    <>
      {/* for mobile view */}
      <div className='p-5 md:hidden mt-14 bg-primary-light'>
        <div className='p-5 flex justify-between items-center'>
          <div>
            <h1 className='text-primary-dark text-2xl mb-3 font-semibold'>Download the <br /> app now!!</h1>
            <img className='h-10 w-auto' src={playstore} alt="" />
          </div>
          <div>
            <img className='h-64 w-auto' src={mobile} alt="" />
          </div>
        </div>
      </div>

      {/* for big display view */}
      <div className='hidden md:block mt-16 p-5 relative bg-primary-light'>
        <div className='p-5 w-4/5 mx-auto mt-5 flex justify-between items-center'>
          <div className='w-[45%]'>
            <h1 className=' text-4xl font-semibold'>Simplifying <br />
              Credit & Finance for Lenders in Bharat</h1>
            <div>
              <h2 className='mt-10'>We provide solutions to improve credit & finance,
                making it simplest and fastest for Bharat.</h2>
              <p className='my-4 font-semibold'>Already using ByajBook ?</p>
              <button className='bg-primary-dark text-white p-2 px-4 rounded-md font-semibold'>Web-app Login</button>
            </div>
          </div>
          <div>
            <img className='h-[400px] w-auto z-50' src={landing} alt="" />
          </div>

        </div>
        <div className='absolute top-56'>
          <img src={vector2} alt="" />
        </div>
      </div>

      {/* about us */}
      <div>
        <div></div>
      </div>
    </>
  )
}

export default Home
