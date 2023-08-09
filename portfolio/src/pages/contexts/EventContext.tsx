import { createContext } from "react";

interface EventContextProps {
	displayEvent: boolean;
	setDisplayEvent: (display: boolean) => void;
	eventIndex: number;
	setEventIndex: (index: any) => void; 
}

const EventContext = createContext<EventContextProps>({
	displayEvent: true,
	setDisplayEvent: (display: boolean) => {},
	eventIndex: 0,
	setEventIndex: (index: any) => {},
});

export default EventContext;