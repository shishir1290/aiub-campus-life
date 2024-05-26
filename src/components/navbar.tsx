import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [scale, setScale] = useState(1);
  const router = useRouter();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newScale = Math.max(0.7, 1 - scrollPosition / 8000);
    setScale(newScale);
  };

  const handleNavigation = (section: any) => {
    if (router.pathname !== '/') {
      router.push(`/#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-white p-1 shadow-md">
        <p className="text-xl text-left font-bold text-blue-800 ml-2">
          American International University-Bangladesh
        </p>
      </div>
      <nav className="flex items-center justify-center bg-blue-800 text-white p-2 space-x-96">
        <ul className="flex justify-center text-lg ml-12 space-x-10">
          <li onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>Home</li>
          <li onClick={() => handleNavigation('activity')} style={{ cursor: 'pointer' }}>Activities</li>
        </ul>
        <ul className="flex justify-center text-lg space-x-10">
          <li onClick={() => handleNavigation('clubs')} style={{ cursor: 'pointer' }}>Clubs</li>
          <li onClick={() => handleNavigation('facilities')} style={{ cursor: 'pointer' }}>Facilities</li>
          <li onClick={() => handleNavigation('contact')} style={{ cursor: 'pointer' }}>Contact</li>
        </ul>
      </nav>
      <motion.div className={`absolute left-1/2 transform -translate-x-1/2 top-0 mt-1 drop-shadow-lg`}>
        <Link href={`/`}>
          <motion.img
            src="/home/logo.png"
            alt="logo"
            width={120}
            height={120}
            style={{ scale: scale }}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
