import Image from "next/image";
import { motion } from "framer-motion"; // Import the motion module from framer-motion package
import Navbar from "@/components/navbar";
import Link from "next/link";
import ImageSlider from "@/components/imageSlider";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/footer";

const home_images = [
  { src: "/home/aiub-cover-1.jpg", width: 800, height: 600 },
  { src: "/home/aiub-cover-2.jpg", width: 800, height: 600 },
  { src: "/home/aiub-cover-3.jpg", width: 800, height: 600 },
  { src: "/home/aiub-cover-4.jpg", width: 800, height: 600 },
  { src: "/home/aiub-cover-5.jpg", width: 800, height: 600 },
  { src: "/home/aiub-cover-6.jpg", width: 800, height: 600 },
  { src: "/home/aiub-cover-7.jpg", width: 800, height: 600 },
  { src: "/home/aiub-cover-8.jpg", width: 800, height: 600 },
  // Add more image URLs as needed
];

const images = [
  {
    src: "/home/student-lounge-2.jpg",
    alt: "Student Lounge",
    caption:
      "Students are sitting in the umbrella canteen and enjoying their time.",
  },
  {
    src: "/home/student-lounge.jpg",
    alt: "Student Lounge",
    caption:
      "Students are sitting in the student lounge and enjoying their time.",
  },
  {
    src: "/home/library.jpg",
    alt: "Library",
    caption: "Students are sitting in the library and study together.",
  },
  {
    src: "/home/shop.jpg",
    alt: "Shop",
    caption: "Students are arranging a fair in the campus.",
  },
  {
    src: "/home/singing.jpg",
    alt: "Singing",
    caption: "Students are singing in the campus.",
  },
  {
    src: "/home/dancing.jpg",
    alt: "Dancing",
    caption: "Students are dancing in the campus.",
  },
  {
    src: "/home/cricket.jpg",
    alt: "Cricket",
    caption: "Students are playing cricket in the campus.",
  },
  {
    src: "/home/football.jpg",
    alt: "Football",
    caption: "Students are playing football in the campus.",
  },
  {
    src: "/home/volleyball.jpg",
    alt: "Volleyball",
    caption: "Students are playing volleyball in the campus.",
  },
  {
    src: "/home/basketball.jpg",
    alt: "Basketball",
    caption: "Students are playing basketball in the campus.",
  },
  {
    src: "/home/chess.jpg",
    alt: "Chess",
    caption: "Students are playing chess in the campus.",
  },
];

export default function Home() {
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className="w-screen">
      <Navbar />
      <section className="Home" id="home">
        <div className=" pt-20 md:pt-20 h-screen w-screen">
          <div className="">
            <ImageSlider images={home_images} />
          </div>
        </div>
      </section>

      <section className="activity" id="activity" ref={inViewRef}>
        <div className="pt-20 md:pt-40 h-screen">
          <div className="w-full px-4 md:px-0">
            <div className="text-2xl text-blue-600 mx-auto mb-4 text-center">
              <p className="p-4">Student Activities</p>
              <hr className="w-24 md:w-52 border-2 border-blue-600 rounded-xl mx-auto" />
            </div>
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center space-x-0 md:space-x-4">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative w-16 h-60 md:h-96 overflow-hidden hover:w-60 md:hover:w-96 transition-width duration-500 rounded-lg m-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <img
                      src={image.src}
                      className="absolute inset-0 w-full h-full object-cover transition-transform transform rounded-lg"
                      alt={image.alt}
                    />
                    <div className="absolute inset-0 flex justify-center items-end opacity-0 hover:opacity-100 transition-opacity hover:delay-150 duration-500 bg-black bg-opacity-30">
                      <div className="text-white text-lg font-bold p-4">
                        {image.caption}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-4 mr-8 opacity-50 hover:opacity-100">
              <Link
                href="/activities"
                className="text-xl text-blue-500 hover:font-bold"
              >
                <div className="flex items-right">
                  <p>Show more details</p>
                  <img src="/home/arrow.gif" className="w-8 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="clubs" id="clubs">
        <div className="py-10 md:py-20 lg:h-screen">
          <div className="text-2xl text-blue-600 md:ml-8 lg:ml-96 mb-2">
            <p className="p-2">
              AIUB Clubs
              <hr className="w-36 border-2 border-blue-600 rounded-xl" />
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-full md:w-auto md:grid-cols-3 md:mx-24 lg:mx-84 xl:mx-96">
            <div className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-gray-400 hover:shadow-gray-600 w-full h-auto">
              <img
                src="/home/acc-logo.jpg"
                alt="Image 1"
                className="w-full md:h-40  object-cover rounded-t-lg hover:scale-105"
              />
              <div className="">
                <p className=" md:mt-2 text-center text-sky-600 font-bold">
                  AIUB Computer Club [ACC]
                </p>
                <p className="md:mt-2 text-justify tracking-tight hidden md:block">
                  AIUB Computer Club (ACC) is a club of AIUB that is dedicated
                  to the students who are interested in computer science and
                  technology. The club organizes various events, workshops, and
                  seminars to help students learn and grow in the field of
                  computer science.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-gray-400 hover:shadow-gray-600 w-full h-auto">
              <img
                src="/home/aiub-red-logo.png"
                alt="Image 2"
                className="w-full md:h-40  object-cover rounded-t-lg hover:scale-105"
              />
              <div className="">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Research for Development Club
                </p>
                <p className="mt-2 text-justify  hidden md:block">
                  AIUB Research for Development Club (AIUBReD) is a club of AIUB
                  that is dedicated to the students who are interested in
                  research and development. The club organizes various events,
                  workshops, and seminars to help students learn and grow in the
                  field of research and development.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-gray-400 hover:shadow-gray-600 w-full h-auto">
              <img
                src="/home/aac.png"
                alt="Image 3"
                className="w-full md:h-40 object-cover rounded-t-lg hover:scale-105"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Arts Club
                </p>
                <p className="mt-2 text-justify hidden md:block">
                  AIUB Arts Club is a club of AIUB that is dedicated to the
                  students who are interested in arts and culture. The club
                  organizes various events, workshops, and seminars to help
                  students learn and grow in the field of arts and culture.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-gray-400 hover:shadow-gray-600 w-full h-auto">
              <img
                src="/home/apc.png"
                alt="Image 4"
                className="w-full md:h-40 object-cover rounded-t-lg hover:scale-105"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Photography Club
                </p>
                <p className="mt-2 text-justify hidden md:block">
                  AIUB Photography Club is a club of AIUB that is dedicated to
                  the students who are interested in photography. The club
                  organizes various events, workshops, and seminars to help
                  students learn and grow in the field of photography.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-gray-400 hover:shadow-gray-600 w-full h-auto">
              <img
                src="/home/ieesb.png"
                alt="Image 5"
                className="w-full md:h-40 object-cover rounded-t-lg hover:scale-105"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  IEEE AIUB Student Chapter [IEEE AIUB SB]
                </p>
                <p className="mt-2 text-justify hidden md:block">
                  IEEE AIUB Student Branch is a student branch of IEEE that is
                  dedicated to the students who are interested in electrical and
                  electronics engineering. The club organizes various events,
                  workshops, and seminars to help students learn and grow in the
                  field of electrical and electronics engineering.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-gray-400 hover:shadow-gray-600 w-full h-auto">
              <img
                src="/home/arc.png"
                alt="Image 6"
                className="w-full md:h-40 object-cover rounded-t-lg hover:scale-105"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Robotic Crew
                </p>
                <p className="mt-2 text-justify hidden md:block">
                  AIUB Robotic Crew is a club of AIUB that is dedicated to the
                  students who are interested in robotics. The club organizes
                  various events, workshops, and seminars to help students learn
                  and grow in the field of robotics.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4 mr-8 opacity-50 hover:opacity-100">
              <Link
                href="/clubs"
                className="text-xl text-blue-500 hover:font-bold"
              >
                <div className="flex items-right">
                  <p>Show more details</p>
                  <img src="/home/arrow.gif" className="w-8 ml-2" />
                </div>
              </Link>
            </div>
        </div>
      </section>

      <section className="facilities" id="facilities">
        <div className="pt-10 md:pt-20 lg:h-screen">
          <div>
          <div className="text-2xl text-blue-600 md:ml-8 lg:ml-96 mb-2">
            <p className="p-2">
              Facilities
              <hr className="w-36 border-2 border-blue-600 rounded-xl" />
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full md:w-auto md:mx-24 lg:mx-36 xl:mx-48">
            {/* library */}
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg shadow-gray-400 hover:shadow-gray-700 transform hover:scale-105 transition-transform">
              <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                Library
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <img
                  src="/home/library2.jpg"
                  alt="library"
                  className="w-full md:w-1/2 h-40 object-cover rounded-t-lg"
                />
                <p className="text-left bg-white p-2 rounded-lg hidden md:block">
                  The AIUB Library is spread across an area of around 11,590 sq.
                  ft., located on the top floor of the iconic spherical building
                  in the heart of the campus, with a 360-degree view of the
                  stunning serenity.
                </p>
              </div>
            </div>

            {/* laboratory */}
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg shadow-gray-400 hover:shadow-gray-700 transform hover:scale-105 transition-transform">
              <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                Laboratory
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <img
                  src="/home/laboratory.jpg"
                  alt="laboratory"
                  className="w-full md:w-1/2 h-40 object-cover rounded-t-lg"
                />
                <p className="text-left bg-white p-2 rounded-lg hidden md:block">
                  The largest virtual lab setup is the South Asian region. 5
                  computer labs, 19 engineering labs, 10 design studios, 4
                  physics labs, 2 chemistry labs, and 1 language lab with 40
                  workstations.
                </p>
              </div>
            </div>

            {/* Sports */}
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg shadow-gray-400 hover:shadow-gray-700 transform hover:scale-105 transition-transform">
              <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                Sports
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <img
                  src="/home/sports.jpg"
                  alt="sports"
                  className="w-full md:w-1/2 h-40 object-cover rounded-t-lg"
                />
                <p className="text-left bg-white p-2 rounded-lg hidden md:block">
                  Engaging sports facilities sprawling across the campus with a
                  full-length football field, cricket practice-pitch,
                  basketball, tennis, badminton, volleyball courts, and an open
                  gallery with a seating capacity of around 500.
                </p>
              </div>
            </div>

            {/* indoor games */}
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg shadow-gray-400 hover:shadow-gray-700 transform hover:scale-105 transition-transform">
              <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                Indoors Games
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <img
                  src="/home/indoor.jpg"
                  alt="indoor games"
                  className="w-full md:w-1/2 h-40 object-cover rounded-t-lg"
                />
                <p className="text-left bg-white p-2 rounded-lg hidden md:block">
                  A dedicated indoor games room with table tennis, carom, chess,
                  and other board games to keep the students engaged and
                  entertained during their leisure time.
                </p>
              </div>
            </div>

            {/* gym */}
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg shadow-gray-400 hover:shadow-gray-700 transform hover:scale-105 transition-transform">
              <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                AIUB Gymnasium
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <img
                  src="/home/gym.jpg"
                  alt="gym"
                  className="w-full md:w-1/2 h-40 object-cover rounded-t-lg"
                />
                <p className="text-left bg-white p-2 rounded-lg hidden md:block">
                  There is a fully-equipped gymnasium on campus, to encourage
                  the physical fitness and well-being of the students,
                  faculties, and officials.
                </p>
              </div>
            </div>

            {/* childcare */}
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg shadow-gray-400 hover:shadow-gray-700 transform hover:scale-105 transition-transform">
              <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                AIUB Childcare
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <img
                  src="/home/childcare.jpg"
                  alt="childcare"
                  className="w-full md:w-1/2 h-40 object-cover rounded-t-lg"
                />
                <p className="text-left bg-white p-2 rounded-lg hidden md:block">
                  AIUB Childcare is a dedicated facility for the children of the
                  students, faculties, and officials, to ensure that the parents
                  can focus on their work and studies without any worries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 mr-8 opacity-50 hover:opacity-100">
              <Link
                href="/facilities"
                className="text-xl text-blue-500 hover:font-bold"
              >
                <div className="flex items-right">
                  <p>Show more details</p>
                  <img src="/home/arrow.gif" className="w-8 ml-2" />
                </div>
              </Link>
            </div>
            </div>
      </section>

      <section className="contact" id="contact">
        <div className="pt-20 h-screen">
          {/* <div className="text-2xl text-blue-600 ml-96 mb-4 underline">
            <p className="p-4">Contact Us</p>
          </div> */}
          {/* create contact form for submit inquiries or feedback using email*/}
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
