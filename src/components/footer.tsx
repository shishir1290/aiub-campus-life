import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-4">
        <div className="bg-blue-600 h-1"></div>
        <div className="bg-green-600 h-1"></div>
        <div className="bg-orange-600 h-1"></div>
        <div className="bg-red-600 h-1"></div>
      </div>
      <div className="bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16 lg:px-24 xl:px-36 pt-4 pb-6">
          <div>
            <img src="/home/logo.png" alt="logo" className="w-36 mx-auto md:mx-0" />
            <p className="text-gray-400 font-bold w-full md:w-56 mt-4 md:mt-2">
              American International University-Bangladesh (AIUB)
            </p>
            <p className="flex items-start text-gray-400 w-full md:w-56 mt-2">
              <img
                src="/home/location.png"
                className="w-4 mr-2"
                alt="location icon"
              />
              <span>
                408/1 (Old KA 66/1), Kuratoli, Khilkhet, Dhaka 1229, Bangladesh
              </span>
            </p>
            <div className="flex items-center text-gray-400 w-full md:w-56 mt-2">
              <img src="/home/email.png" className="w-5 mr-2" alt="email icon" />
              <span>
                <a href="mailto:info@aiub.edu" className="text-gray-400">
                  info@aiub.edu
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-200 text-2xl">Become AIUBian <hr className="bg-sky-500 h-0.5 w-full mt-2" /></p>
            <div className="flex flex-col space-y-2 mt-4">
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Future Students</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">On Campus</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Admission</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Tuition Fees</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Scholarships</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Apply Now</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-200 text-2xl">Academics <hr className="bg-sky-500 h-0.5 w-full mt-2" /></p>
            <div className="flex flex-col space-y-2 mt-4">
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Academic Calendar</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Academic Regulations</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Arts & Social Sciences</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Business Administration</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Engineering</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Science & Technology</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-200 text-2xl">Research <hr className="bg-sky-500 h-0.5 w-full mt-2" /></p>
            <div className="flex flex-col space-y-2 mt-4">
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">AJBE</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">AJSE</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Past Conferences</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Upcoming Conferences</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Collaborating Institutes</p>
              <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Innovations</p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 h-4"></div>
      </div>
    </div>
  );
};

export default Footer;
