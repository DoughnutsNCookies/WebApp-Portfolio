import React from "react";
import Map from "./Map";
import LocationContext from "../contexts/LocationContext";

export const LiveLocation = () => {
  const [city, setCity] = React.useState<string>("");
  const [prov, setProv] = React.useState<string>("");

  return (
    <section id="live-location" className="flex flex-col items-center h-screen">
      <LocationContext.Provider value={{ city, setCity, prov, setProv }}>
        <h1 className="text-5xl tracking-tighter pt-20">
          Live Location: Where am I now?
        </h1>
        <div className="flex flex-row items-center gap-24 pt-10">
          <div className="flex flex-col items-center">
            <div className="w-[50vw] h-[60vh] pt-10 pl-10 pr-10 pb-5">
              <Map />
            </div>
            <div className="pl-10 pr-10">
              <h1 className="text-4xl tracking-tight text-textColor text-center font-semibold">
                {city}, {prov}
              </h1>
              <p className="font-lato mt-4 text-xl text-center">
                Do note that the location generated above is NOT my exact
                location!
                <br />
                Or maybe it is...?
              </p>
            </div>
          </div>
          <div className="text-2xl font-lato pr-24 flex flex-col gap-y-12 text-center">
            <p>
              Haha, on a serious note, I am currently still improving myself in the IT
              industry. Leveling up my skills in Fullstack Web Application
              Development.
            </p>
            <p>
              I am also interested and is currently exploring trending tech such as Web3 and AI. Actively taking
              courses online to learn the basics of these.
            </p>
          </div>
        </div>
      </LocationContext.Provider>
    </section>
  );
};
