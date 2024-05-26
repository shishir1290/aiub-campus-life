import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const index = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto mt-32">
        <div className="text-2xl text-blue-600 text-center mb-8">
          <h1>
            Facilities
            <hr className="border-2 border-blue-600 w-32 mx-auto" />
          </h1>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-blue-200 pb-8 rounded-lg">
          {/* library */}
          <div className="text-xl text-blue-600 ml-8 pt-8">
            <h1>
              Library
              <hr className="border-2 border-blue-600 w-20" />
            </h1>
          </div>

          <div className="px-8 pt-4">
            <p className="pb-4">
              The AIUB Library is spread across an area of around 11,590 sq.
              ft., located on the top floor of the iconic spherical building in
              the heart of the campus, with a 360-degree view of the stunning
              serenity.
            </p>
            <ul className="list-disc ml-5">
              <li className="pb-2">
                With a total seating capacity of 500, the library has a common
                space on the main floor along with a separate 'quiet zone' on
                the mezzanine floor for those who require a more silent ambience
                for studying/working.
              </li>
              <li className="pb-2">
                The library boasts a rich and diverse collection of about 59,000
                volumes including books, journals, articles, newsletters,
                research works, CDs, DVDs, etc., covering a number of different
                areas of interest, covering more than 80 academic areas in arts,
                business, engineering, science, social science, technology, as
                well as a wide selection of materials highlighting global
                benchmarks, international news, and other developing theories,
                concepts, researches, innovations, issues, etc. from around the
                world.
              </li>
            </ul>
          </div>

          <div className="container mx-auto px-5 py-2 ">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/library_3.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/library_2.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/library_1.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/library_5.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/library_6.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/library_4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Laboratory */}
          <div className="text-xl text-blue-600 ml-8 pt-8">
            <h1>
              Laboratory Facilities
              <hr className="border-2 border-blue-600 w-52" />
            </h1>
          </div>

          <div className="px-8 pt-4">
            <ul className="list-disc ml-5">
              <li className="pb-2">
                The largest virtual lab setup is the South Asian region.
              </li>
              <li className="pb-2">
                25 computer labs, 19 engineering labs, 10 design studios, 4
                physics labs, 2 chemistry labs, and 1 language lab with 40
                workstations in each and 24 servers to support the IT
                infrastructure.
              </li>
              <li className="pb-2">
                6 dedicated workshops, including foundry, woodworks, and
                machinery casting, for the Industrial Production and Engineering
                (IPE) Lab.
              </li>

              <li className="pb-2">
                Fully operational MAC Lab with 41 workstations, along with an
                Animation Lab with the state-of-art technology for honing skills
                of editing, graphics, animation, and visual effects software.
              </li>

              <li className="pb-2">
                International standard Moot Court to facilitate the overall
                clinical legal education, through practical applications of the
                rules, regulations, and procedures of the legal system to
                develop advocacy skills amongst students beyond the theoretical
                borders of a classroom.
              </li>

              <li className="pb-2">
                Media Studio with professional-grade facilities for shooting,
                online editing, and live broadcasting, including a studio
                console, audio recording booth, video cameras (including options
                with Full HD Resolution), DSLR cameras, light & sound system,
                full-time studio personnel, set stage, dressing room, etc. with
                a seating capacity of 120.
              </li>
            </ul>
          </div>

          <div className="container mx-auto px-5 py-2 ">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/laboratory_1.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/laboratory_2.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/laboratory_5.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/laboratory_4.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/laboratory_3.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/laboratory_6.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Co-curricular Activities */}
          <div className="text-xl text-blue-600 ml-8 pt-8">
            <h1>
              Co-curricular Activities
              <hr className="border-2 border-blue-600 w-52" />
            </h1>
          </div>

          <div className="px-8 pt-4">
            <p className="pb-4">
              Along with academics, AIUB also thrives on co-curricular
              activities, coordinated through the Office of Student Affairs
              (OSA), which acts as the hub of the university, interconnecting
              several major functions that multitask various operations, both
              internal and external. Through the executions of the Office of
              Sports, Office of Cultural Affairs, and Student Services &
              Welfare, numerous dynamic outreach programs, along with
              constructive seminars, workshops, competitions, conferences, and
              other such socio-cultural student club activities as well as
              departmental academic events are organized, facilitated, and
              participated in by the university on internal, national, and
              international levels. Some of the major highlights:
            </p>
            <ul className="list-disc ml-5">
              <li className="pb-2">AIUB CS Fest</li>
              <li className="pb-2">AIUB National Debate Fest</li>
              <li className="pb-2">
                AIUB Robotic Crew at University Rover Challenge (Annual
                International Tournament on Robotics held in Utah, USA)
              </li>
              <li className="pb-2">Case Storm (National Case Competition)</li>
              <li className="pb-2">
                Star Cineplex Short Film Festival (Annual National Short Film
                and Documentary Festival)
              </li>
              <li className="pb-2">
                The IDEAS Challenge (National Competition for Showcasing Ideas
                to Address Social Issues)
              </li>
              <li className="pb-2">
                The Tale of the Darkroom (National Photography Exhibition)
              </li>
              <li className="pb-2">
                AIUB Champions League (Football Tournament)
              </li>
              <li className="pb-2">AIUB Indoor Games</li>
              <li className="pb-2">AIUB Premier League (Cricket Tournament)</li>
              <li className="pb-2">
                International Conferences on Arts, Business, Science,
                Engineering
              </li>
              <li className="pb-2">
                International Exchange Programs (Cultural and Academic)
              </li>
              <li className="pb-2">
                AIUB Boishakhi Ullash (Annual Celebration of the Bengali New
                Year)
              </li>
              <li className="pb-2">
                AIUB Foundation Celebration (Annual Commemoration of the
                Founding Month of AIUB)
              </li>
              <li className="pb-2">
                AIUB Job Fair (Annual Flagship Event for Career and Placement of
                Current Students and Alumni)
              </li>
              <li className="pb-2">
                Dr. Anwarul Abedin Lecture Series (Regular Lecture Series in
                honor of the Late Founding Chairman, focusing on
                national/international issues of arts, business, engineering,
                and sciences)
              </li>
            </ul>
          </div>

          <div className="container mx-auto px-5 py-2 ">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/co_1.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/co_2.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/co_5.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/co_4.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/co_3.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition duration-300 ease-in-out"
                    src="/facilities/co_6.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
