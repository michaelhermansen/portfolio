export interface EducationEntry {
	title: string;
	school: string;
	from: {
		year: number;
		month: string;
	};
	to:
		| {
				year: number;
				month: string;
		  }
		| {
				now: true;
		  };
}

export interface WorkEntry {
	role: string;
	employer: string;
	info: string;
	from: {
		year: number;
		month: string;
	};
	to:
		| {
				year: number;
				month: string;
		  }
		| {
				now: true;
		  };
}

export interface VoluntaryEntry {
	title: string;
	info: string;
	from: {
		year: number;
		month: string;
	};
	to:
		| {
				year: number;
				month: string;
		  }
		| {
				now: true;
		  };
}

export default interface CV {
	skills: string[];
	education: EducationEntry[];
	work: WorkEntry[];
	voluntary: VoluntaryEntry[];
}
