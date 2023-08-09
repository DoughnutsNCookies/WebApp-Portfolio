import { createContext } from 'react';

interface ProjectContextProps {
	resetProject: boolean;
	setResetProject: (reset: boolean) => void;
	showProject: boolean;
	setShowProject: (show: boolean) => void;
}

const ProjectContext = createContext<ProjectContextProps>({
	resetProject: true,
	setResetProject: (reset: boolean) => {},
	showProject: true,
	setShowProject: (show: boolean) => {},
});

export default ProjectContext;