
import React, { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const ClubDetailsModal = ({ club, onClose }: { club: any; onClose: any }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 w-full sm:w-3/4 lg:w-1/2 h-full sm:h-3/4 overflow-y-auto rounded-lg shadow-xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <img src="/activities/close.gif" alt="Close" className="w-6" />
        </button>
        <h2 className="text-xl font-bold mb-4">{club.name}</h2>
        <div className="flex justify-center">
          <img
            src={club.image}
            alt={club.name}
            className="w-72 sm:w-96 object-cover mb-4 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Objective</h3>
          <p>{club.objective}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Activities</h3>
          <p>{club.activities}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Membership</h3>
          <p>{club.membership}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Leadership</h3>
          <p>{club.leadership}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Future Outlook</h3>
          <p>{club.future_outlook}</p>
        </div>
      </div>
    </div>
    
      );
      
};

const Index = () => {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubs = [
    {
      id: 1,
      name: "AIUB Computer Club [ACC]",
      description:
        "AIUB Computer Club (ACC) is a club of AIUB that is dedicated to the students who are interested in computer science and technology. The club organizes various events, workshops, and seminars to help students learn and grow in the field of computer science.",
      image: "/home/acc-logo.jpg",
      objective:
        "ACC commenced in 2012 with the idea of creating a platform for students to spread out the light of technology, building skills in various sectors including Content Writing, Photojournalism, Video Editing, Event Organizing, Volunteering, Development, UI/UX Design, and Graphic Design, connect with a community of members, alumni, and faculties in order to learn about the demanding skills of the current and future professional domain, and organize programs that train and test their aptitudes in the field of computer science.",
      activities:
        "ACC is an infusion of a diverse set of interests existing within the students of science and IT, enhancing the educational learning with value-added trainings, workshops, and seminars for the members. Their events entail numerous activities like programming contests, gaming tournaments, idea/concept presentations, mobile, web, & desktop app showcases, and networking contests, collaborating with established brands of the tech industry like Microsoft, Oracle, Cisco, etc. ACC engages in several flagship events like the Computer Science Festival, Cyber-Gaming Fest, Jarvis, etc., besides their regular seminars and workshops. Keeping attuned with the industry trends, ACC collaborates with various organizations like Mozilla Bangladesh, Microsoft Student Partner, BASIS Student Forum.",
      membership:
        "ACC is considered as a departmental club for the Faculty of Science (FST), but students from the Faculty of Engineering (FE) are also encouraged to apply for the membership. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 130 proactive members working at ACC.",
      leadership:
        "ACC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). Together in coordination with FST, OSA provides overall guidance, logistical facilitation, and constant support to the EC for implementing the various events of the club.",
      future_outlook:
        "ACC focuses on the development of students, committed to introducing them to the ever-changing information and technology world of today. They are working with a vision to create leaders in the emerging technology sector, preparing them for the as the future pioneering trailblazers of the future.",

    },

    {
        id: 2,
        name: "AIUB Research for Development Club",
        description:
          "AIUB Research for Development Club (AIUBReD) is a club of AIUB that is dedicated to the students who are interested in research and development. The club organizes various events, workshops, and seminars to help students learn and grow in the field of research and development.",
        image: "/home/aiub-red-logo.png",
        objective:
          "Established in 2023, the AIUB Research for Development Club (AIUBReD) focuses on research, development, and innovation (RDI) among AIUB students across all disciplines. It cultivates a collaborative learning environment where students can develop critical thinking, problem-solving, and research methodologies. In order to nurture future researchers and innovators by providing opportunities to translate theoretical knowledge into practical solutions, AIUBReD works on bridging the gap between academia and industry by fostering connections with external stakeholders.",
        activities:
          "AIUBReD arranges research paper presentations, poster sessions, and symposiums showcasing members’ research within the university community. They organize workshops and seminars on topics like research design, data analysis, scientific writing, and intellectual property. The club explores industry collaborations by partnering with companies, NGOs, or research institutions for internship opportunities, guest lectures, and real-world research projects. AIUBBReD connects experienced researchers from the different faculties as well as skilled industry professionals with student members as a knowledge-sharing platforms, for them to share research findings and engage in intellectual discourse.",
        membership:
          "Membership of AIUBReD is open to students from all 4 Faculties of the university, who are interested in research in any field. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 140 proactive members working at AIUBReD.",
        leadership:
          "AIUBReD operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "AIUBReD aspires to become a leading platform for nurturing future generations of Bangladeshi researchers and innovators. The club will establish a strong alumni network that can provide career guidance, mentorship, and potential research collaborations for current members. Eventually, they will be participating in national and international research conferences, showcasing the AIUBReD’s achievements and connect students with a broader research network, advocating for increased research funding and infrastructure development within AIUB can further support student research endeavors.",

      },

      {
        id: 3,
        name: "AIUB Arts Club",
        description:
          "AIUB Arts Club is a club of AIUB that is dedicated to the students who are interested in arts and culture. The club organizes various events, workshops, and seminars to help students learn and grow in the field of arts and culture.",
        image: "/home/aac.png",
        objective:
          "Established in 2006, the purpose of the AAC is to provide students with an opportunity to explore their creativity and artistic talents. The club aims to encourage students to explore their artistic talents, provide a platform for students to share their work with others, promote creativity and foster a sense of community among them.",
        activities:
          "The club engages in a variety of activities, ranging from art workshops, competitions, and exhibitions, organizing and participating within and outside of the university. From commemorating the International Mother Language Day on the 21st of February to celebrating the Bengali New Year on Pahela Baishakh every year, AAC collaborates to express their creativity through strokes, colors, and shades to create awe-inspiring pieces of art.",
        membership:
          "Membership of AAC is open to students from all 4 Faculties of the university, who are interested in art. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 96 proactive members working in AAC.",
        leadership:
          "AAC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance, logistical facilitation, and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "AAC plans to expand its scope and reach as an artistic platform in the future. The club hopes to offer more constructive workshops, as well as opportunities for students to create incredible artwork, participate in competitions, and exhibit their work to the world.",

      },


      {
        id: 4,
        name: "AIUB Photography Club",
        description:
          "AIUB Photography Club is a club of AIUB that is dedicated to the students who are interested in photography. The club organizes various events, workshops, and seminars to help students learn and grow in the field of photography.",
        image: "/home/apc.png",
        objective:
          "The AIUB Photography Club (AIUBPC) has been dedicated to the art and practice of photography since its inception in 2005. The club aims to provide students with opportunities to learn about the basics of photography, develop their skills, share their work by collaborating with a network of professional photographers.",
        activities:
          "The AIUBPC organizes workshops to improve techniques on composition, lighting, and exposure of the various genres of photography. From field trips to local photographic locations to in-depth discussion critiquing members’ work, the club arranges and participates in a number of different photography competitions and exhibitions, within and outside of AIUB. Members showcase their work on international platforms, while gaining submissions in their events from across the globe as well. The club also undertakes the responsibility of providing photography and videography support in events at the university, along with programs of other student organizations, voluntarily, adding a significant collaborative value as a part of the student community.",
        membership:
          "Membership of AIUBPC is open to students from all 4 Faculties of the university, who are interested in photography. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 170 proactive members working at AIUBPC.",
        leadership:
          "AIUBPC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "AIUBPC will expand its scope through additional field trips, workshops, exhibitions, and competitions, building a stronger online presence to utilize digital platforms to increase reach. The club will explore new avenues of photography, beyond the existing lines of event, mobile, portrait, and street photography, focusing on areas like photojournalism, macro, wildlife, and commercial photography, etc. Engaging in mutually beneficial partnerships with industry experts, AIUBPC will not only enhance their capabilities, but their capacities for a career in photography through mentorships with professional photographers as well.",

      },

      {
        id: 5,
        name: "IEEE AIUB Student Chapter [IEEE AIUB SB]",
        description:
          "IEEE AIUB Student Branch is a student branch of IEEE that is dedicated to the students who are interested in electrical and electronics engineering. The club organizes various events, workshops, and seminars to help students learn and grow in the field of electrical and electronics engineering.",
        image: "/home/ieesb.png",
        objective:
          "Since its inception in 2006, the primary aim and objectives of IEEE are centered on fostering knowledge sharing, collaboration, and the establishment of standards within the worldwide technical community. Operating as an official IEEE Student Branch, the mission of the IEEE AIUB Student Branch (SB) is to extend STEM initiatives across the nation and beyond. This is accomplished through engaging educational and technical events, as well as networking opportunities. Additionally, the branch strives to leverage technology to address humanitarian challenges and further its applications and promote the international scientific community of IEEE.",
        activities:
          "The IEEE AIUB SB is committed to the advancement in technology, spreading knowledge, and engaging with the community through a broad range of activities. The branch provides its members with the opportunity to stay up to date on cutting-edge research and trends in different fields of engineering, electronics, and computer science through a variety of workshops, seminars, and technical sessions. These exercises not only broaden their learning but also enable them to come up with innovative solutions for real-world issues. Additionally, the branch reaches out to the broader community through activities that promote the use of technology for humanitarian objectives. Furthermore, the branch encourages networking and collaboration among students, professionals, and researchers, building a community based on shared wisdom and collaborative efforts. Because of their exceptional performance, reach, and impact, the IEEE AIUB SB has been one of the largest and most successful student branches since its inception in Bangladesh and has been awarded the ‘IEEE Regional Exemplary Student Branch Award’ consecutively four times in the entire Asia-Pacific Region also known as Region 10.",
        membership:
          "Membership of IEEE AIUB SB is open to students from the Faculty of Engineering (FE) and the Faculty of Science & Technology (FST), who have a keen interest in expanding and exchanging their knowledge of engineering, technology, and digital development. Recruitments are conducted annually, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 155 proactive members and 38 volunteers and executive committee members working at IEEE AIUB SB.",
        leadership:
          "IEEE AIUB Student Branch operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "IEEE AIUB SB believes that the synergy created through cooperation and partnership outweighs the merits of any personal accomplishment. Building on a solid foundation of collaboration, technological growth, and a beneficial effect on society, the branch will continue to make an even greater impact. The objective is to keep connecting professionals, learners, and researchers, delivering a vibrant environment for sharing ideas and knowledge. The IEEE AIUB SB hopes to keep on top of addressing real-world challenges with novel technological solutions, aiming for a future of excellence, progress, and positive change to the community.",

      },

      {
        id: 6,
        name: "AIUB Robotic Crew",
        description:
          "AIUB Robotic Crew is a club of AIUB that is dedicated to the students who are interested in robotics. The club organizes various events, workshops, and seminars to help students learn and grow in the field of robotics.",
        image: "/home/arc.png",
        objective:
          "AIUB Robotic Crew (ARC) is a team of undergraduate students from American International University-Bangladesh (AIUB) who is passionate about the field of robotics. The team was formed with the purpose to compete in the University Rover Challenge (URC), an annual international robotics tournament for college students held Utah, USA since its inception in 2006. ARC started off as a young team (mostly 3rd year undergraduates) with little experience but they have made up for it with their passion to learn and excel in pursuing their dreams. The team was formed around the beginning of 2015 and soon got approval from their university to initiate their involvement in the competition, and have successfully participated in the competition as one of the teams selected and invited from Bangladesh 4 times in a row (2015-18) amongst the Top 36 Finalists at the URC. Even though hundreds of students were initially interested, the team had to be filtered down to only 18 of the best. The team comprises of 14 bright and hardworking students from the Electrical and Electronics Engineering Department of AIUB and 4 exceptionally talented stalwarts from the Computer Science Department of AIUB. Some of these members had participated in robotics and programming contests and won national awards. Even with such diverse backgrounds and disciplines, the members of ARC share one common goal and that is to represent themselves, their alma mater and their nation, at the highest platform. With strong determination and work ethics, this team has grown in strength and confidence exponentially over time. They believe that through this opportunity they will be part of something special and inspire the future generations to follow in their footsteps.",
        activities:
          "The team has been working on the design and development of a Mars Rover for the competition. The competition is a 4-day event where the team has to design, build and operate a Mars Rover that can perform a series of tasks in a simulated Martian environment. The tasks include traversing through rough terrains, collecting soil samples, and analyzing them for signs of life. The team has been working on the mechanical, electrical, and software aspects of the rover. They have designed and built the chassis, suspension system, and wheels of the rover. They have also designed and built the electrical system that powers the rover and the software that controls the rover. The team has been working on the design and development of a Mars Rover for the competition. The competition is a 4-day event where the team has to design, build and operate a Mars Rover that can perform a series of tasks in a simulated Martian environment. The tasks include traversing through rough terrains, collecting soil samples, and analyzing them for signs of life. The team has been working on the mechanical, electrical, and software aspects of the rover. They have designed and built the chassis, suspension system, and wheels of the rover. They have also designed and built the electrical system that powers the rover and the software that controls the rover.",
        membership:
          "Membership of ARC is open to students from the Faculty of Engineering (FE) and the Faculty of Science & Technology (FST), who have a keen interest in robotics. Recruitments are conducted annually, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 18 proactive members working at ARC.",
        leadership:
          "ARC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club. The team is led by a team captain who is responsible for coordinating the activities of the team and ensuring that the team meets its goals. The team captain is supported by a team of officers who are responsible for managing the different aspects of the team's operations. The team also has a faculty advisor who provides guidance and support to the team. The faculty advisor is a professor from the Electrical and Electronics Engineering Department of AIUB who has experience in robotics and has been involved in the competition in the past.",
        future_outlook:
          "ARC aims to continue participating in the University Rover Challenge and other robotics competitions in the future. The team is committed to improving its performance in the competition and to representing AIUB and Bangladesh on the international stage. The team also aims to inspire other students to take an interest in robotics and to pursue careers in science and technology. The team hopes to build a strong robotics community at AIUB and to establish itself as a leader in the field of robotics in Bangladesh. The team is also working on developing partnerships with other universities and organizations to collaborate on research and development projects in the field of robotics. The team is excited about the future and is looking forward to achieving great things in the years to come.",

      },

      {
        id: 7,
        name: "AIUB Moot Court Club (AMCC)",
        description:
          "AIUB Moot Court Club (AMCC) is a club of AIUB that is dedicated to the students who are interested in law and advocacy. The club organizes various events, workshops, and seminars to help students learn and grow in the field of law and advocacy.",
        image: "/home/amcc.png",
        objective:
          "Established in 2023, the AIUB Moot Court Club (AMCC) with the aim to cultivate a stimulating environment where students can develop exceptional legal research, writing, and advocacy skills through moot court competitions. AMCC fosters critical thinking, analytical reasoning, and persuasive communication in a competitive legal setting, providing opportunities for students to gain practical courtroom experience and build confidence in public speaking, while promote a deeper understanding of legal principles and their application in contemporary legal issues.",
        activities:
          "AMCC arranges weekly workshops on legal research strategies, case analysis, and oral advocacy techniques and internal moot court competitions simulating real-world court proceedings, allowing students to hone their litigation skills. Members also participate in regional, national, and international moot court competitions, representing AIUB on a prestigious platform. The club also organizes guest speaker sessions featuring legal professionals, judges, or prominent lawyers sharing insights from the legal field along with conducting mock client consultations and negotiation exercises to develop client communication and problem-solving skills. AMCC offers its members and alumni networking opportunities with alumni working in the legal profession and potential employers.",
        membership:
          "AMCC is considered as a departmental club for the Department of Law under the Faculty of Arts & Social Sciences (FASS). Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 77 proactive members working at AMCC.",
        leadership:
          "AMCC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "AMCC aims to be a premier organization for aspiring legal professionals at AIUB. T The club plans to collaborate with local law firms, legal aid organizations, or judicial chambers can expose members to practical legal applications, organize on-campus legal workshops or seminars for the wider student body can expand the club's reach and promote legal awareness, and building a strong alumni network can provide mentorship and career opportunities for current and future members.",

      },

      {
        id: 8,
        name: "AIUB Volunteer Unit",
        description:
          "AIUB Volunteer Unit (AVU) is a club of AIUB that is dedicated to the students who are interested in volunteering and community service. The club organizes various events, workshops, and seminars to help students learn and grow in the field of volunteering and community service.",
        image: "/home/avu.png",
        objective:
          "The AIUB Volunteer Unit was established in 2001 to cultivate a spirit of unity, responsibility and support amongst AIUB students by providing a platform for students to develop valuable skills and gain practical experience by assisting the OSA and other university departments with administrative, logistical, and event-related tasks. The Volunteer Unit fosters a sense of community spirit and encourages student engagement in the university's operations, cultivating leadership, teamwork, communication, and problem-solving skills through participation in diverse volunteer activities. The unit offers opportunities for personal growth and professional development in a supportive university environment.",
        activities:
          "The Volunteer Unit undertakes administrative support by assisting OSA with tasks such as data entry, scheduling meetings, managing registration processes, or preparing informational materials for student events. They are also involved in university events like orientation programs, career fairs, guest lectures, or cultural celebrations, supporting logistics, set-up, and participant management as volunteers. Their experience acts as skill-building workshops and training sessions on communication, teamwork, time management, and problem-solving to enhance volunteer effectiveness.",
        membership:
          "Membership to the Volunteer Unit is open to students from all 4 Faculties of the university, who are interested in volunteering their support for the university. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the unit. Currently, there are 40 proactive members working in the Volunteer Unit.",
        leadership:
          "The Volunteer Unit operates under the supervision of the Office of Student Affairs (OSA), with senior volunteers placed in-charge for the remaining duration of their studentship (which is usually 1-2 years). OSA provides overall guidance and constant support to the unit for conducting the various activities of the university.",
        future_outlook:
          "The AIUB Student Volunteer Unit aspires to be a valuable resource for the university community, contributing to the smooth functioning of events and administrative processes. The unit plans to work towards building strong relationships with various university departments can ensure a continuous stream of diverse volunteer opportunities and establishing an alumni network of former volunteers can provide mentorship and potential career guidance for current members. The Volunteer Unit will be advocating for the integration of volunteer experiences into academic programs that can further enhance student development and engagement within AIUB.",

      },

      {
        id: 9,
        name: "Duke of Edinburgh Awards Program",
        description:
          "The Duke of Edinburgh Awards Program (DEA) is a club of AIUB that is dedicated to the students who are interested in non-formal education and learning. The club organizes various events, workshops, and seminars to help students learn and grow in the field of non-formal education and learning.",
        image: "/home/dea.png",
        objective:
          "The Duke of Edinburgh Awards Program (DEA) is a non-formal education and learning framework operating in more than 130 countries and territories around the world, through which young people’s achievements outside of academia are recognized and celebrated. It initiated in Bangladesh, through AIUB, in 2008. The award aims to empower young people (ages 14-24) to develop essential life skills and build confidence, foster well-rounded individuals through a holistic program encompassing volunteering, physical activity, skills development, and adventurous journeys at the bronze, silver, and gold level.",
        activities:
          "DEA provides a personalized and engaging experience allowing participants to set their own goals and choose activities aligned with their interests that enhances employability by equipping young people with valuable skills sought after in the workplace, while promoting a sense of social responsibility and encourage positive contributions to the community. Participants first choose volunteer activities that align with their interests, contributing to the well-being of their community. Then they engage in a chosen sport, fitness program, or outdoor activity to develop physical fitness and discipline. Participants also select a skill to learn and develop, such as music, technology, languages, or creative arts. And finally, they undertake an adventurous journey, which is a planned, self-supported expedition, promoting teamwork, navigation, and problem-solving skills in an outdoor environment (varies in time duration and intensity depending on the bronze, silver, or gold level).",
        membership:
          "Membership to the DEA is open to students from all 4 Faculties of the university, who are interested in participating in the program. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the program. Currently, there are 60 proactive participants working in the DEA.",
        leadership:
          "DEA operates under the Office of Sports (OS), with the supervision of the Office of Student Affairs (OSA), with senior volunteers placed in-charge for the remaining duration of their studentship (which is usually 1-2 years). OSA provides overall guidance and constant support to the unit for conducting the various activities of the university.",
        future_outlook:
          "DEA aims to continue expanding its reach, empowering more young people globally, developing partnerships with educational institutions can enhance program accessibility for students and incorporating digital tools and online platforms can facilitate program management, communication, and resource sharing. The program is continuously exploring innovative activities and challenges that can ensure the program remains relevant and engaging for future generations.",
 
      },

      {
        id: 10,
        name: "AIUB Social Welfare Club – SHOMOY",
        description:
          "AIUB Social Welfare Club – Shomoy (ASC) is a club of AIUB that is dedicated to the students who are interested in social welfare and community service. The club organizes various events, workshops, and seminars to help students learn and grow in the field of social welfare and community service.",
        image: "/home/asc.png",
        objective:
          "Established in 2009, the AIUB Social Welfare Club – Shomoy (ASC), aims to provide students with opportunities to learn about social welfare issues, volunteer their time to help others, and develop leadership skills. ASC works towards educating students on concerns like poverty, gender discrimination, food insecurity, etc., creating awareness on the sustainable development goals (SDGs). They work towards building a community of change-makers and motivating the youth to take action through volunteerism, fundraisers, and advocacy, making a difference in the world.",
        activities:
          "ASC focuses on volunteering for social causes ranging from flood relief, blood donations, winter clothing drives, self-defense, and various other charitable work. The club collaborates with numerous non-governmental organizations (NGOs) to further pursue social welfare for a larger community. From teaching and training at a local school for underprivileged children to raising funds for providing rations to them on Eid, and even running campaigns for critically diagnosed patients of the AIUB community, supporting the university’s community service initiatives, ASC shapes future leaders to help bring about a positive change to develop the society.",
        membership:
          "Membership of ASC is open to students from all 4 Faculties of the university, who are interested in photography. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 126 proactive members working at ASC.",
        leadership:
          "ASC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "With the hope of having a greater impact on future generations, ASC will expand its volunteer work to address more SDGs in the coming years, increase its fundraising efforts to support additional social welfare campaigns, develop mentorship opportunities together with local and international development organizations, and leadership initiatives to create a better place for tomorrow.",

      },

      {
        id: 11,
        name: "AIUB Performing Arts Club [APAC]",
        description:
          " AIUB Performing Arts Club (APAC) is a club of AIUB that is dedicated to the students who are interested in music and dance. The club organizes various events, workshops, and seminars to help students learn and grow in the field of music and dance.",
        image: "/home/apac.png",
        objective:
          "Established in 1998, the AIUB Performing Arts Club (APAC) aims to provide students with a platform to channel their creativity through music and dance. APAC promotes our cultural heritage through traditional Bengali songs and dance forms, while expanding their exposure through experiencing and experimenting with a diverse set of foreign genres, encouraging young talents to pursue their dreams in performing arts.",
        activities:
          "APAC organizes and participates in all the cultural events of the university, arranging musical and dance performances in programs of their own initiatives as well as those of other student organizations, academic departments, and the university as a whole. The club also conduct workshops with established artists of the industry, along with festival celebrations like the Bengali New Year and even tribute events on the occasion of the Independence Day. The club encompasses a talented pool of singers, dancers, musicians, designers, reciters, and capable organizers with a history of achievements on and off the stage. APAC participates in external musical competitions while organizing their own flagship events, collaborating with numerous organizations, in order to encourage young musicians and dancers to develop their skills and uphold the music-rich culture in the global landscape.",
        membership:
          "Membership of APAC is open to students from all 4 Faculties of the university, who are interested in music and dance. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 132 proactive members working at APAC.",
        leadership:
          "APAC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "In the coming years, the APAC plans to expand its offerings to include more hands-on and constructive workshops with upcoming artists and industry icons, as well as engage in more community outreach events and inter-club collaborations. The club also plans to enhance and expand their flagship events of the workshop series and musical competition, in addition to ensuring university-wide productions every semester.",

      },

      {
        id: 12,
        name: "AIUB Business Club",
        description:
          " AIUB Business Club is a club of AIUB that is dedicated to the students who are interested in business and entrepreneurship. The club organizes various events, workshops, and seminars to help students learn and grow in the field of business and entrepreneurship.",
        image: "/home/abc.png",
        objective:
          "AIUB Business Club is a learning organization where a group of selected undergraduate business students of AIUB is working together in different departments and teams to arrange various career development events, competitions, field trips, and help to create a bond between students of similar interest through sharing of individual knowledge, ideas, and creativity. Their vision is to become the most prestigious brand among the student organizations for career development in the country and to achieve international acclamation. That is why they strongly abide by their motto “Leadership Beyond Practice”, showcasing their caliber through various initiatives of their own, like the ABC Case Storm (national-level case competition), as well as their participation in external events like the Banglalink Ennovator and Reckit Benkiser Global Challenge. Currently the club is led by its 14th Executive Committee consisting 12 diligent members and all the activities are strictly monitored by the Office of Students Affairs (OSA), AIUB. AIUB Business Club has been able to organize different type of co-curricular activities both creative and insightful to promote students’ leadership qualities in the field of business and create a strong network between the students and professionals for a secured future of its members.",
        activities:
          " The club organizes various events, workshops, and seminars to help students learn and grow in the field of business and entrepreneurship. The club also conducts field trips to various companies and organizations to provide students with practical exposure to the business world. The club also organizes competitions and events to help students develop their skills and gain experience in the field of business. The club also provides students with opportunities to network with professionals and industry experts to help them build connections and explore career opportunities.",
        membership:
          " Membership of AIUB Business Club is open to students from the Faculty of Business Administration (FBA) and the Faculty of Arts & Social Sciences (FASS), who are interested in business and entrepreneurship. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 120 proactive members working at AIUB Business Club.",
        leadership:
          " AIUB Business Club operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          " AIUB Business Club aims to continue expanding its reach and impact in the coming years. The club plans to organize more events, workshops, and seminars to help students learn and grow in the field of business and entrepreneurship. The club also aims to provide students with more opportunities to network with professionals and industry experts to help them build connections and explore career opportunities. The club is excited about the future and is looking forward to achieving great things in the years to come.",

      },

      {
        id: 13,
        name: "AIUB FILM CLUB",
        description:
          " AIUB Film Club (AFC) is a club of AIUB that is dedicated to the students who are interested in filmmaking. The club organizes various events, workshops, and seminars to help students learn and grow in the field of filmmaking.",
        image: "/home/afc.png",
        objective:
          "Established in 2009, the purpose of the AIUB Film Club (AFC) is to provide a forum for students to discuss and learn about filmmaking. Their aim is to promote culture through the camera, sharing the creative talent of bringing stories to life through a network of people passionate about learning and engaging in the art of filmmaking.",
        activities:
          "AFC primarily works on creating short films covering various social issues, cultural aspects, and student life, while arranging film shows to as a form of recreational activity for the student community and to expose them to a broad spectrum of movies, ranging from Bengali, English, and even Korean. The club also conducts workshops for their members to better train them in the process of filmmaking, as directors, script writers, cinematographers, set designers, production managers, editors, actors, etc. AFC both organizes and participates in a number of different film festivals, competing in short films, where they have made several achievements with original stories, along with a number of different launch events and activations for the premier or screening of noteworthy releases of Bangladeshi cinema.",
        membership:
          "Membership of AFC is open to students from all 4 Faculties of the university, who are interested in the art of filmmaking. Recruitments are conducted during the semesters, through which applicants are evaluated, interviewed, and selected to join the club. Currently, there are 80 proactive members working at AFC.",
        leadership:
          "AFC operates under the supervision of the Office of Student Affairs (OSA), following the general structure for the Executive Committee (EC). OSA provides overall guidance and constant support to the EC for implementing the various events of the club.",
        future_outlook:
          "With an aim to increase students’ appreciation of filmmaking as an art form, AFC will continue to provide opportunities for students to learn, analyze, and create films, as well as collaborating with various organizations of the film industry in Bangladesh to present and promote culture, through life stories in frames.",

      },
    // Add other clubs here
  ];

  const openClubDetails = (club: any) => {
    setSelectedClub(club);
  };

  const closeClubDetails = () => {
    setSelectedClub(null);
  };

  return (
    <div>
  <Navbar />

  <div className="container mx-auto px-4 mt-20">
    <div className="pt-20 bg-gradient-to-r from-blue-100 to-blue-200 pb-8">
      <div className="text-2xl text-blue-600 text-center mb-8">
        <h1>
          Clubs
          <hr className="border-2 border-blue-600 w-28 mx-auto rounded-xl" />
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-16">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-gray-400 hover:shadow-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => openClubDetails(club)}
          >
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="h-48">
              <p className="mt-2 text-center text-sky-600 font-bold">
                {club.name}
              </p>
              <p className="mt-2 text-center">{club.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <Footer />

  {selectedClub && (
    <div className={`transition-transform duration-300 ease-in-out ${selectedClub ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}>
      <ClubDetailsModal club={selectedClub} onClose={closeClubDetails} />
    </div>
  )}
</div>

  );
};

export default Index;
