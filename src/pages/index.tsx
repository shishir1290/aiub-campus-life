import Image from "next/image";
import { motion } from "framer-motion"; // Import the motion module from framer-motion package
import Navbar from "@/components/navbar";
import Link from "next/link";
import ImageSlider from "@/components/imageSlider";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/footer";

const home_images = [
  { src: "/aiub-cover-1.jpg", width: 800, height: 600 },
  { src: "/aiub-cover-2.jpg", width: 800, height: 600 },
  { src: "/aiub-cover-3.jpg", width: 800, height: 600 },
  { src: "/aiub-cover-4.jpg", width: 800, height: 600 },
  { src: "/aiub-cover-5.jpg", width: 800, height: 600 },
  { src: "/aiub-cover-6.jpg", width: 800, height: 600 },
  { src: "/aiub-cover-7.jpg", width: 800, height: 600 },
  { src: "/aiub-cover-8.jpg", width: 800, height: 600 },
  // Add more image URLs as needed
];

const images = [
  {
    src: "/student-lounge-2.jpg",
    alt: "Student Lounge",
    caption:
      "Students are sitting in the umbrella canteen and enjoying their time.",
  },
  {
    src: "/student-lounge.jpg",
    alt: "Student Lounge",
    caption:
      "Students are sitting in the student lounge and enjoying their time.",
  },
  {
    src: "/library.jpg",
    alt: "Library",
    caption: "Students are sitting in the library and study together.",
  },
  {
    src: "/shop.jpg",
    alt: "Shop",
    caption: "Students are arranging a fair in the campus.",
  },
  {
    src: "/singing.jpg",
    alt: "Singing",
    caption: "Students are singing in the campus.",
  },
  {
    src: "/dancing.jpg",
    alt: "Dancing",
    caption: "Students are dancing in the campus.",
  },
  {
    src: "/cricket.jpg",
    alt: "Cricket",
    caption: "Students are playing cricket in the campus.",
  },
  {
    src: "/football.jpg",
    alt: "Football",
    caption: "Students are playing football in the campus.",
  },
  {
    src: "/volleyball.jpg",
    alt: "Volleyball",
    caption: "Students are playing volleyball in the campus.",
  },
  {
    src: "/basketball.jpg",
    alt: "Basketball",
    caption: "Students are playing basketball in the campus.",
  },
  {
    src: "/chess.jpg",
    alt: "Chess",
    caption: "Students are playing chess in the campus.",
  },
];

export default function Home() {
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div>
      <Navbar />
      <section className="Home" id="home">
        <div className=" pt-32 h-screen">
          <div>
            <ImageSlider images={home_images} />
          </div>
        </div>
      </section>

      <section className="activity" id="activity" ref={inViewRef}>
        <div className="justify-center pt-40 h-screen">
          <div>
            <div className="text-2xl text-blue-600 ml-96 mb-4 underline">
              <p className="p-4">Student Activities</p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative w-20 h-96 overflow-hidden hover:w-96 transition-width duration-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <img
                      src={image.src}
                      className="absolute inset-0 w-full h-full object-cover transition-transform transform"
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
            <div className="flex justify-center mt-4 ml-96 pl-48 opacity-50 hover:opacity-100">
              <Link
                href="/activities"
                className="text-xl text-blue-500 hover:font-bold"
              >
                <div className="flex items-center">
                  <p>Show more details</p>
                  <img src="arrow.gif" className="w-8 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="clubs" id="clubs">
        <div className="pt-20 h-screen">
          <div className="text-2xl text-blue-600 ml-96 mb-4 underline">
            <p className="p-2">AIUB Clubs</p>
          </div>

          <div className="grid grid-cols-3 items-center gap-4 mx-72">
            <div className="bg-slate-200 rounded-lg shadow-lg w-96">
              <img
                src="acc-logo.jpg"
                alt="Image 1"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Computer Club [ACC]
                </p>
                <p className="mt-2 text-center">
                  AIUB Computer Club (ACC) is a club of AIUB that is dedicated
                  to the students who are interested in computer science and
                  technology. The club organizes various events, workshops, and
                  seminars to help students learn and grow in the field of
                  computer science.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg w-96">
              <img
                src="aiub-red-logo.png"
                alt="Image 2"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Research for Development Club
                </p>
                <p className="mt-2 text-center">
                  AIUB Research for Development Club (AIUBReD) is a club of AIUB
                  that is dedicated to the students who are interested in
                  research and development. The club organizes various events,
                  workshops, and seminars to help students learn and grow in the
                  field of research and development.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg w-96">
              <img
                src="aac.png"
                alt="Image 3"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Arts Club
                </p>
                <p className="mt-2 text-center">
                  AIUB Arts Club is a club of AIUB that is dedicated to the
                  students who are interested in arts and culture. The club
                  organizes various events, workshops, and seminars to help
                  students learn and grow in the field of arts and culture.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg shadow-lg w-96">
              <img
                src="apc.png"
                alt="Image 4"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Photography Club
                </p>
                <p className="mt-2 text-center">
                  AIUB Photography Club is a club of AIUB that is dedicated to
                  the students who are interested in photography. The club
                  organizes various events, workshops, and seminars to help
                  students learn and grow in the field of photography.
                </p>
              </div>
            </div>

            <div className="bg-slate-200 p-4 rounded-lg shadow-lg w-96">
              <img
                src="ieesb.png"
                alt="Image 5"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  IEEE AIUB Student Chapter [IEEE AIUB SB]
                </p>
                <p className="mt-2 text-center">
                  IEEE AIUB Student Branch is a student branch of IEEE that is
                  dedicated to the students who are interested in electrical and
                  electronics engineering. The club organizes various events,
                  workshops, and seminars to help students learn and grow in the
                  field of electrical and electronics engineering.
                </p>
              </div>
            </div>

            <div className="bg-slate-200 p-4 rounded-lg shadow-lg w-96">
              <img
                src="arc.png"
                alt="Image 6"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="h-48">
                <p className="mt-2 text-center text-sky-600 font-bold">
                  AIUB Robotic Crew
                </p>
                <p className="mt-2 text-center">
                  AIUB Robotic Crew is a club of AIUB that is dedicated to the
                  students who are interested in robotics. The club organizes
                  various events, workshops, and seminars to help students learn
                  and grow in the field of robotics.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 ml-96 pl-48 opacity-50 hover:opacity-100">
            <Link
              href="/clubs"
              className="text-xl text-blue-500 hover:font-bold"
            >
              <div className="flex items-center">
                <p>Show more details</p>
                <img src="arrow.gif" className="w-8 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="facilities" id="facilities">
        <div className="pt-20 h-screen">
          <div>
            <div className="text-2xl text-blue-600 ml-96 mb-4 underline">
              <p className="p-4">Facilities</p>
            </div>

            <div className="grid grid-cols-2 items-center gap-4 mx-72">
              <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                  Library
                </p>
                <div className="flex justify-normal space-x-4">
                  <img
                    src="library2.jpg"
                    alt="library"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <p className="mt-2 text-wrap text-left bg-white p-2 rounded-lg">
                    The AIUB Library is spread across an area of around 11,590
                    sq. ft., located on the top floor of the iconic spherical
                    building in the heart of the campus, with a 360-degree view
                    of the stunning serenity.
                  </p>
                </div>
              </div>

              {/* laboratory */}
              <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                  Laboratory
                </p>
                <div className="flex justify-normal space-x-4">
                  <img
                    src="laboratory.jpg"
                    alt="laboratory"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <p className="mt-2 text-wrap text-left bg-white p-2 rounded-lg">
                    The largest virtual lab setup is the South Asian region. 5
                    computer labs, 19 engineering labs, 10 design studios, 4
                    physics labs, 2 chemistry labs, and 1 language lab with 40
                    workstations.
                  </p>
                </div>
              </div>

              {/* Sports */}
              <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                  Sports
                </p>
                <div className="flex justify-normal space-x-4">
                  <img
                    src="sports.jpg"
                    alt="sports"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <p className="mt-2 text-wrap text-left bg-white p-2 rounded-lg">
                    Engaging sports facilities sprawling across the campus with
                    a full-length football field, cricket practice-pitch,
                    basketball, tennis, badminton, volleyball courts, and an
                    open gallery with a seating capacity of around 500.
                  </p>
                </div>
              </div>

              {/* indor games */}
              <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                  Indoors Games
                </p>
                <div className="flex justify-normal space-x-4">
                  <img
                    src="indoor.jpg"
                    alt="indoor games"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <p className="mt-2 text-wrap text-left bg-white p-2 rounded-lg">
                    A dedicated indoor games room with table tennis, carom,
                    chess, and other board games to keep the students engaged
                    and entertained during their leisure time.
                  </p>
                </div>
              </div>

              {/* gym */}
              <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                  AIUB Gymnasium
                </p>
                <div className="flex justify-normal space-x-4">
                  <img
                    src="gym.jpg"
                    alt="gym"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <p className="mt-2 text-wrap text-left bg-white p-2 rounded-lg">
                    There is a fully-equipped gymnasium on campus, to encourage
                    the physical fitness and well-being of the students,
                    faculties, and officials.
                  </p>
                </div>
              </div>

              {/* childcare */}
              <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                <p className="mt-2 text-2xl text-center text-sky-600 font-bold pb-4">
                  AIUB Childcare
                </p>
                <div className="flex justify-normal space-x-4">
                  <img
                    src="childcare.jpg"
                    alt="childcare"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <p className="mt-2 text-wrap text-left bg-white p-2 rounded-lg">
                    AIUB Childcare is a dedicated facility for the children of
                    the students, faculties, and officials, to ensure that the
                    parents can focus on their work and studies without any
                    worries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 ml-96 pl-48 opacity-50 hover:opacity-100">
            <Link
              href="/facilities"
              className="text-xl text-blue-500 hover:font-bold"
            >
              <div className="flex items-center">
                <p>Show more details</p>
                <img src="arrow.gif" className="w-8 ml-2" />
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

      <Footer/>
    </div>
  );
}
