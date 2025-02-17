import HeroSection from '@/src/components/Herosection'
import React from 'react'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, } from 'react-icons/fa'
import { IoMdCall, IoMdMail } from 'react-icons/io'

const Contact = () => {

  return (
    <div>
      <HeroSection
        Background={"/img/background3.jpg"}
        title={"Every great journey starts with a single sip. Ready to reach us?"}
      />

      <div className="globalContainer py-28 flex justify-between gap-10 text-white">

        {/* Left Section - Contact Info */}
        <div className=' w-[45%]'>
          <h2 className="text-[36px] font-bold ">Get in Touch</h2>
          <p className="mt-2 text-lg ">
            We love to hear from you. Please fill out the form or contact us using the information below.
          </p>

          {/* Contact Info */}
          <div className="flex items-center gap-3 mt-12">
            <div className='p-2 bg-white rounded-full'><FaMapMarkerAlt color='#2E358C' size={20} /></div>
            <div>
              <p>Address</p>
              <p className='mt-[-4px]'>Japan</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <div className='p-2 bg-white rounded-full'><IoMdCall color='#2E358C' size={20} /></div>
            <div>
              <p>Phone</p>
              <p className='mt-[-4px]'>+123-456-7890</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <div className='p-2 bg-white rounded-full'><IoMdMail color='#2E358C' size={20} /></div>
            <div>
              <p>Email</p>
              <p className='mt-[-4px]'>mail@jhandabeer.com</p>
            </div>
          </div>


          {/* Social Media */}
          <div className="mt-10 w-full bg-white rounded-2xl p-5 ">
            <p className="text-black text-lg">Follow Us</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="bg-[#2E358C] p-2 rounded-full">
                <FaFacebook />
              </a>
              <a href="#" className="bg-[#2E358C] p-2 rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>


        {/* Right Section - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#111827]">Send a Message</h2>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-gray-700">Message</label>
              <textarea
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>

            <button className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg hover:bg-blue-800 transition">
              Submit Message
            </button>
          </form>

          {/* Privacy Notice */}
          <p className="text-gray-500 text-sm mt-4">
            By submitting this form, you agree to our privacy policy and terms of service. We will handle your information in accordance with our data protection guidelines.
          </p>
        </div>
      </div>
    </div >
  )
}

export default Contact