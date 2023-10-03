import React from "react";
import Map from "./Map";

const LiveLocation = () => {
  const [city, setCity] = React.useState<string>("");
  const [prov, setProv] = React.useState<string>("");

  return (
    <section id="live-location" className="flex flex-col items-center h-screen">
      <h1
        className="text-2xl lg:text-6xl tracking-tighter pt-8 lg:pt-20"
        style={{
          textShadow: "10px 10px 25px #5ACEBA7D",
        }}
      >
        Live Location: Where am I now?
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-24 pt-6 lg:pt-10">
        <div className="flex flex-col items-center">
          <div className="w-[100vw] lg:w-[50vw] h-[30vh] lg:h-[60vh] lg:pt-10 pl-5 lg:pl-10 pr-5 lg:pr-10 pb-5 z-0">
            <Map setCity={setCity} setProv={setProv} />
          </div>
          <div className="pl-10 pr-10">
            <h1
              className="text-3xl lg:text-4xl tracking-tight text-textColor text-center font-semibold"
              style={{
                textShadow: "2px 2px 10px #5ACEBA7D",
              }}
            >
              {city}, {prov}
            </h1>
            <p
              className="font-lato mt-1 lg:mt-4 text-xs lg:text-xl text-center tracking-wide"
              style={{
                textShadow: "2px 2px 10px #5ACEBA7D",
              }}
            >
              Do note that the location generated above is NOT my exact
              location!
              <br />
              Or maybe it is...?
            </p>
          </div>
        </div>
        <div className="text-md lg:text-2xl font-lato lg:pr-24 flex flex-col gap-y-6 lg:gap-y-12 text-center tracking-wide mx-6">
          <p
            style={{
              textShadow: "2px 2px 10px #5ACEBA7D",
            }}
          >
            Haha, on a serious note, I am currently still improving myself in
            the IT industry. Leveling up my skills in Fullstack Web
            Application Development.
          </p>
          <p
            style={{
              textShadow: "2px 2px 10px #5ACEBA7D",
            }}
          >
            I am also interested and is currently exploring trending tech such
            as Web3 and AI. Actively taking courses online to learn the basics
            of these.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveLocation;