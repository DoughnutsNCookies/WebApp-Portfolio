import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const randomLocationSet = useRef(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [city, setCity] = useState<string>("");
  const [prov, setProv] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getRandomLocation");
        const jsonData = await response.json();
        console.log(jsonData.nearest);
        setLatitude(jsonData.nearest.latt);
        setLongitude(jsonData.nearest.longt);
        setCity(jsonData.nearest.city);
        setProv(jsonData.nearest.prov);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (randomLocationSet.current) return;
    fetchData();
    randomLocationSet.current = true;
  }, []);

  return latitude === 0 && longitude === 0 ? (
    <></>
  ) : (
    <MapContainer
      center={[latitude, longitude]}
      zoom={8}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          {city}, {prov}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
