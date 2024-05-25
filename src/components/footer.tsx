import React from "react";

const footer = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-4">
        <div className="bg-blue-600 h-1"></div>
        <div className="bg-green-600 h-1"></div>
        <div className="bg-orange-600 h-1"></div>
        <div className="bg-red-600 h-1"></div>
      </div>
      <div className="bg-zinc-900">
        <div className="grid grid-cols-4 mx-72 space-x-20 pt-4 pb-6">
          <div>
            <img src="/logo.png" alt="logo" className=" w-36 text-center" />
            <p className=" text-gray-400 font-bold w-56">
              American International University-Bangladesh (AIUB)
            </p>
            <p className="flex text-gray-400 w-56 mt-2">
              <img
                src="/location.png"
                className="w-4 mr-1 pb-14 pt-1"
                alt="location icon"
              />
              <span>
                408/1 (Old KA 66/1), Kuratoli, Khilkhet, Dhaka 1229, Bangladesh
              </span>
            </p>
            <div className="flex  text-gray-400 w-56">
              <img src="/email.png" className="w-5 mr-1" alt="email icon" />
              <span>
                <a href="mailto:info@aiub.edu" className="text-gray-400">
                  info@aiub.edu
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-200 text-2xl">Become AIUBian</p>
            <hr className="bg-sky-500 h-0.5 w-full mt-2" />

            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Future Students</p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">On Campus </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Admission </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Tuition Fees </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Scholarships </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Apply Now </p>
          </div>

          <div className="flex flex-col w-72">
            <p className="text-gray-200 text-2xl">Academics</p>
            <hr className="bg-sky-500 h-0.5 w-full mt-2" />

            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Academic Calendar</p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Academic Regulations </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Arts & Social Sciences </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Business Administration </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Engineering </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Faculty of Science & Technology </p>
          </div>

          <div className="flex flex-col w-72">
            <p className="text-gray-200 text-2xl">Research</p>
            <hr className="bg-sky-500 h-0.5 w-full mt-2" />

            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">AJBE</p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">AJSE</p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Past Conferences </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Upcoming Conferences </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Collaborating Institutes </p>
            <p className="text-gray-400 text-lg hover:underline hover:text-gray-100 cursor-pointer">Innovations </p>
          </div>
        </div>
        <div className="bg-neutral-800 h-4"></div>
      </div>
    </div>
  );
};

export default footer;
