export interface EducationEntry {
	title: string;
	school: string;
	duration: string;
}

export interface WorkEntry {
	role: string;
	employer: string;
	info: string;
	duration: string;
}

export interface VoluntaryEntry {
	title: string;
	info: string;
	duration: string;
}

export default interface CV {
	education: EducationEntry[];
	work: WorkEntry[];
	voluntary: VoluntaryEntry[];
}
