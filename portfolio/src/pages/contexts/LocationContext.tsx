import { createContext } from "react";

interface LocationContextProps {
	city: string;
	setCity: (city: string) => void;
	prov: string;
	setProv: (prov: string) => void;
}

const LocationContext = createContext<LocationContextProps>({
	city: "",
	setCity: (city: string) => {},
	prov: "",
	setProv: (prov: string) => {},
});

export default LocationContext;