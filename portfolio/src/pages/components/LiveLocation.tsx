import React, { useEffect } from "react";
import Map from "./Map";

export const LiveLocation = () => {
  return (
    <section id="live-location">
      <div className="h-screen">
        Live Location
        <Map />
      </div>
    </section>
  );
};
