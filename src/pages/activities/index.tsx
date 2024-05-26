import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const Index = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedActivityImages, setSelectedActivityImages] = useState([]);

  const handleActivityClick = (images: any) => {
    setSelectedActivityImages(images);
    setPopupVisible(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 mt-20">
        <div className="pt-20 bg-gradient-to-r from-blue-100 to-blue-200 md:h-screen">
          <div className="text-2xl text-blue-600 text-center mb-8">
            <h1>Student Activities</h1>
            <hr className="border-2 border-blue-600 w-52 mx-auto" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-center mx-4">

            {/* activities 1 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-md hover:shadow-xl cursor-pointer"
              onClick={() =>
                handleActivityClick([
                  "/activities/a1.jpg",
                  "/activities/a1_2.jpg",
                  "/activities/a1_3.jpg",
                  "/activities/a1_4.jpg",
                  "/activities/a1_5.jpg",
                  "/activities/a1_6.jpg",
                  "/activities/a1_7.jpg",
                  "/activities/a1_8.jpg",
                ])
              }
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/activities/a1.jpg"
                  alt="Student Activities"
                  className="w-72 rounded-lg"
                />
              </div>
              <p className="text-center text-blue-700">
                FBA Events and Students' Engagements
              </p>
            </div>

            {/* activities 2 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-md hover:shadow-xl cursor-pointer"
              onClick={() =>
                handleActivityClick([
                  "/activities/a2.jpg",
                  "/activities/a2_2.jpg",
                  "/activities/a2_3.jpg",
                  "/activities/a2_4.jpg",
                  "/activities/a2_5.jpg",
                  "/activities/a2_6.jpg",
                ])
              }
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/activities/a2.jpg"
                  alt="Student Activities"
                  className="w-72 rounded-lg"
                />
              </div>
              <p className="text-center text-blue-700">
                Deparment of Accounting
              </p>
            </div>

            {/* activities 3 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-md hover:shadow-xl cursor-pointer"
              onClick={() =>
                handleActivityClick([
                  "/activities/a3.jpg",
                  "/activities/a3_2.jpg",
                  "/activities/a3_3.jpg",
                  "/activities/a3_4.jpg",
                  "/activities/a3_5.jpg",
                  "/activities/a3_6.jpg",
                  "/activities/a3_7.jpg",
                  "/activities/a3_8.jpg",
                  "/activities/a3_9.jpg",
                ])
              }
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/activities/a3.jpg"
                  alt="Student Activities"
                  className="w-72 rounded-lg"
                />
              </div>
              <p className="text-center text-blue-700">
                Department of Finance, Business Economics, and Investment
                Management
              </p>
            </div>

            {/* activities 4 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-md hover:shadow-xl cursor-pointer"
              onClick={() =>
                handleActivityClick([
                  "/activities/a4.jpg",
                  "/activities/a4_2.jpg",
                  "/activities/a4_3.jpg",
                  "/activities/a4_4.jpg",
                  "/activities/a4_5.jpg",
                  "/activities/a4_6.jpg",
                  "/activities/a4_7.jpg",
                  "/activities/a4_8.jpg",
                  "/activities/a4_9.jpg",
                ])
              }
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/activities/a4.jpg"
                  alt="Student Activities"
                  className="w-72 h-40 rounded-lg"
                />
              </div>
              <p className="text-center text-blue-700">
                Department of Management, HRM, and Innovation & Entrepreneurship
              </p>
            </div>

            {/* activities 5 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-md hover:shadow-xl cursor-pointer"
              onClick={() =>
                handleActivityClick([
                  "/activities/a5.jpg",
                  "/activities/a5_2.jpg",
                  "/activities/a5_3.jpg",
                  "/activities/a5_4.jpg",
                  "/activities/a5_5.jpg",
                  "/activities/a5_6.jpg",
                  "/activities/a5_7.jpg",
                  "/activities/a5_8.jpg",
                  "/activities/a5_9.jpg",
                ])
              }
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/activities/a5.jpg"
                  alt="Student Activities"
                  className="w-72 rounded-lg"
                />
              </div>
              <p className="text-center text-blue-700">
                Department of Marketing, THM, and International Business
              </p>
            </div>

            {/* activities 6 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-md hover:shadow-xl cursor-pointer"
              onClick={() =>
                handleActivityClick([
                  "/activities/a6.jpg",
                  "/activities/a6_2.jpg",
                  "/activities/a6_3.jpg",
                  "/activities/a6_4.jpg",
                  "/activities/a6_5.jpg",
                  "/activities/a6_6.jpg",
                  "/activities/a6_7.jpg",
                  "/activities/a6_8.jpg",
                  "/activities/a6_9.jpg",
                ])
              }
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/activities/a6.jpg"
                  alt="Student Activities"
                  className="w-72 rounded-lg"
                />
              </div>
              <p className="text-center text-blue-700">
                Department of MIS and Business Analytics
              </p>
            </div>

            {/* activities 7 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-md hover:shadow-xl cursor-pointer"
              onClick={() =>
                handleActivityClick([
                  "/activities/a7.jpg",
                  "/activities/a7_2.jpg",
                  "/activities/a7_3.jpg",
                  "/activities/a7_4.jpg",
                  "/activities/a7_5.jpg",
                  "/activities/a7_6.jpg",
                ])
              }
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/activities/a7.jpg"
                  alt="Student Activities"
                  className="w-72 h-auto rounded-lg md:h-40"
                />
              </div>
              <p className="text-center text-blue-700">
                Department of Operations and Supply Chain Management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
{popupVisible && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 mt-52 md:mt-20">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-lg relative overflow-y-auto max-h-screen">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        onClick={() => setPopupVisible(false)}
      >
        <img src="/activities/close.gif" alt="Close" className="w-6" />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedActivityImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Activity ${index + 1}`}
            className="rounded-lg w-full"
            style={{ maxWidth: "400px", maxHeight: "400px" }}
          />
        ))}
      </div>
    </div>
  </div>
)}



      <Footer />
    </div>
  );
};

export default Index;
