import { useEffect, useState } from "react";

export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => setFirstLoad(false), 3000);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarStyle = {
    transform: visible ? "translateY(0)" : "translateY(-100%)",
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
              setVisible(true);
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={(e) => {
              document
                .getElementById("background")
                ?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => setVisible(false), 1000);
            }}
          >
            Background
          </button>
        </li>
        <li>
          <button
            onClick={(e) => {
              setVisible(true);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => setVisible(false), 1000);
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={(e) => {
              document
                .getElementById("live-location")
                ?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => setVisible(false), 1000);
            }}
          >
            Live Location
          </button>
        </li>
        <li className="bg-primaryColor py-2 px-4 rounded-md">
          <button
            onClick={(e) => {
              document
                .getElementById("lets-talk")
                ?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => setVisible(false), 1000);
            }}
          >
            Let's Talk
          </button>
        </li>
      </ul>
    </nav>
  );
};
