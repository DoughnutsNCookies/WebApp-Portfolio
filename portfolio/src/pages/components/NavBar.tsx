import { useEffect, useState } from "react";

interface NavBarProps {
  setShowContact: (showContact: boolean) => void;
  resetProject: boolean;
  setResetProject: (resetProject: boolean) => void;
  setDisplayEvent: (displayEvent: boolean) => void;
  setEventIndex: (eventIndex: number) => void;
}

const NavBar = (props: NavBarProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [NavVisible, setNavVisible] = useState(true);
  const { setShowContact, resetProject, setResetProject, setDisplayEvent, setEventIndex } = props;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setNavVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => setFirstLoad(false), 3000);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarStyle = {
    transform: NavVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 300ms",
  };

  return (
    <nav
      className={`z-20 fixed top-0 w-full bg-backgroundColor ${
        firstLoad ? "animate-fade-down" : "transition-all"
      }`}
      style={navbarStyle}
    >
      <ul className="flex flex-row py-2 justify-center items-center gap-x-3 md:gap-x-10 lg:gap-x-20 font-playfair text-xs md:text-lg lg:text-2xl">
        <li>
          <button
            className=" hover:text-accentColor transition-all scale-100 hover:scale-105"
            onClick={(e) => {
              setNavVisible(true);
              setEventIndex(0);
              setDisplayEvent(false);
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              textShadow: "2px 2px 15px #5ACEBA7D",
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:text-accentColor transition-all scale-100 hover:scale-105"
            onClick={(e) => {
              setEventIndex(0);
              setDisplayEvent(true);
              setTimeout(() => {
                setNavVisible(false);
              }, 1000);
              window.scrollTo(
                0,
                window.innerHeight * 2
              );
            }}
            style={{
              textShadow: "2px 2px 15px #5ACEBA7D",
            }}
          >
            Background
          </button>
        </li>
        <li>
          <button
            className="hover:text-accentColor transition-all scale-100 hover:scale-105"
            onClick={(e) => {
              setEventIndex(14);
              setDisplayEvent(false);
              setResetProject(!resetProject);
              setTimeout(() => {
                setNavVisible(false);
              }, 1000);
              const projectsElement = document.getElementById("projects");
              if (projectsElement) {
                const scrollY = projectsElement.getBoundingClientRect().top + window.scrollY + 50;
                window.scrollTo({
                  top: scrollY,
                  behavior: "smooth"
                });
              }
            }}
            style={{
              textShadow: "2px 2px 15px #5ACEBA7D",
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="hover:text-accentColor transition-all scale-100 hover:scale-105"
            onClick={(e) => {
              setEventIndex(14);
              setDisplayEvent(false);
              setTimeout(() => {
                setNavVisible(false);
              }, 1000);
              document
                .getElementById("live-location")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              textShadow: "2px 2px 15px #5ACEBA7D",
            }}
          >
            Live Location
          </button>
        </li>
        <li className="bg-primaryColor py-2 px-4 rounded-md">
          <button
            className="hover:text-accentColor transition-all scale-100 hover:scale-105"
            onClick={(e) => {
              setEventIndex(14);
              setDisplayEvent(false);
              setShowContact(true);
              setTimeout(() => {
                setNavVisible(false);
              }, 1000);
              document
                .getElementById("lets-talk")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let&apos;s Talk
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;