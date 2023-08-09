import { useContext, useEffect, useState } from "react";
import EventContext from "../contexts/EventContext";

export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [NavVisible, setNavVisible] = useState(true);
  const { setDisplayEvent, setEventIndex } = useContext(EventContext);

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
      <ul className="flex flex-row py-2 justify-center items-center gap-x-20 font-playfair text-xl">
        <li>
          <button
            onClick={(e) => {
              setNavVisible(true);
              setEventIndex(0);
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
            onClick={(e) => {
              setEventIndex(0);
              setDisplayEvent(true);
              setTimeout(() => {
                setNavVisible(false);
              }, 1000);
              window.scrollTo(
                0,
                document.getElementById("timeline0")?.offsetTop || 0
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
            onClick={(e) => {
              setDisplayEvent(false);
              setTimeout(() => {
                setNavVisible(false);
              }, 1000);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
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
            onClick={(e) => {
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
            onClick={(e) => {
              setDisplayEvent(false);
              setTimeout(() => {
                setNavVisible(false);
              }, 1000);
              document
                .getElementById("lets-talk")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Talk
          </button>
        </li>
      </ul>
    </nav>
  );
};
