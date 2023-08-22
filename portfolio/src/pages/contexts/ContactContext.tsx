import { createContext } from 'react';

interface ContactContextProps {
	showContact: boolean;
	setShowContact: (show: boolean) => void;
}

const ContactContext = createContext<ContactContextProps>({
	showContact: false,
	setShowContact: (show: boolean) => {},
});

export default ContactContext;