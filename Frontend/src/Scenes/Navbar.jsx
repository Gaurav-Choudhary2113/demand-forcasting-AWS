import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 600 && scrollDirection !== "down") {
        setScrollDirection("down");
        controls.start({ opacity: 1, y: "-55%" });
      } else if (currentScrollY === 0 && scrollDirection !== "up") {
        setScrollDirection("up");
        controls.start({ opacity: 1, y: "0%" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, scrollDirection]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 1, y: "0%" }}
      animate={controls}
      className="w-full z-50 flex justify-center fixed top-0 my-6"
    >
      <div
        onClick={toggleMobileMenu}
        className="items-center mx-5 justify-end w-full flex sm:hidden"
      >
        <div onClick={toggleMobileMenu}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            initial={false}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMobileMenu}
          >
            <motion.path
              fill="#ffffff"
              initial={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              onClick={toggleMobileMenu}
            />
            <motion.path
              fill="#ffffff"
              initial={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              onClick={toggleMobileMenu}
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </motion.svg>
        </div>
      </div>

      <div className="sm:flex hidden justify-between w-2/3 items-center backdrop-blur-md bg-[#00000074] px-7 py-4 rounded-3xl">
        <div className="font-playfair hidden md:block px-5 w-96 text-2xl font-bold">
        SoleTrendsAI
        </div>
        <div className="flex codesemi text-[#cfcfcf] md:justify-end items-center w-full justify-evenly text-sm font-semibold px-5">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            Home
          </Link>
          {/* <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-5}
            className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            Skills
          </Link> */}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            className="hover:text-[#82ddfd] transition mx-16 duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            Predict
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-140}
            className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            Contact Us
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed right-0 z-50 flex h-full w-full flex-col items-end bg-[#1b1b1d63] text-xl font-bold shadow-xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-4 my-1 mt-10 flex cursor-pointer active:text-zinc-400"
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                className="hover:text-[#82ddfd] transition duration-400 text-sm navbar-link cursor-pointer no-underline"
                style={{ transitionDelay: "1ms" }}
                onClick={toggleMobileMenu}
              >
                {" "}
                About Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-4 my-1 flex cursor-pointer active:text-zinc-400"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                className="hover:text-[#82ddfd] transition duration-400 text-sm navbar-link cursor-pointer no-underline"
                style={{ transitionDelay: "1ms" }}
                onClick={toggleMobileMenu}
              >
                {" "}
                Projects
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-4 my-1 flex cursor-pointer active:text-zinc-400"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-140}
                className="hover:text-[#82ddfd] transition duration-400 text-sm navbar-link cursor-pointer no-underline"
                style={{ transitionDelay: "1ms" }}
                onClick={toggleMobileMenu}
              >
                {" "}
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
