'use client'
import HeroSection from '@/src/components/Herosection'
import { ChangeEvent, useState } from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, } from 'react-icons/fa'
import { IoMdCall, IoMdMail } from 'react-icons/io'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');
  const [Loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/SendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid JSON response. Check API endpoint.');
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email.');
      }

      setResponseMessage('Email Sent!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred.');
    } finally {
      setLoading(false)
    }
  };

  console.log(error)


  return (
    <div>
      <HeroSection
        Background={"/img/background3.jpg"}
        title={"Every great journey starts with a single sip. Ready to reach us?"}
      />

      <div className="globalContainer py-10 md:py-28 md:flex md:flex-row justify-between gap-10 text-white">

        {/* Left Section - Contact Info */}
        <div className=' md:w-[45%]'>
          <h2 className="text-[30px] md:text-[36px] font-bold ">Get in Touch</h2>
          <p className="mt-2 text-base md:text-lg ">
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
        <div className="bg-white mt-5 md:mt-0 p-8 rounded-2xl shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#111827]">Send a Message</h2>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700">Name</label>
              <input
                type="text"
                id='name'
                className="w-full mt-1 p-3 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>

            <div>
              <label className="text-gray-700">Email Address</label>
              <input
                type="email"
                id='email'
                className="w-full mt-1 p-3 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div>
              <label className="text-gray-700">Message</label>
              <textarea
                id='message'
                className="w-full mt-1 p-3 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your message"
                rows={4}
                onChange={handleChange}
                value={formData.message}

              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg hover:bg-blue-800 transition"
            >
              {
                responseMessage ? (
                  <p>{responseMessage}</p>
                ) : Loading ? (
                  <p>Loading...</p>
                ) : (
                  <p>Send Message</p>
                )
              }
            </button>
          </form>

          {/* Privacy Notice */}
          <p className="text-gray-500 text-xs md:text-sm mt-4">
            By submitting this form, you agree to our privacy policy and terms of service. We will handle your information in accordance with our data protection guidelines.
          </p>
        </div>
      </div>
    </div >
  )
}

export default Contact