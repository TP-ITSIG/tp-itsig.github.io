import { Subject } from './Subject'
import { ResourceType } from './ResourceType'
export let subjects: Subject[] = [
	{
		name: "Computational Thinking",
		tagline: "Develop an Android Application",
		abbreviation: "COMT",
		description:
			"This module teaches the fundamentals of programming using the Java programming language. Using your new skills, you will transform your UXID prototype into a real Android app with Android Studio.",
		color: "hsl(154, 74%, 69%)",
		bgColor: "hsl(154, 74%, 69%, 0.3)",
		image: "./assets/COMT.svg",
		resources: [
			{
				title: "Learning How to Code",
				content:
					"A fun video to introduce to you how you should approach learning how to code. It also introduces different programming languages and their uses.",
				thumbnail:
					"https://www.youtube.com/watch?v=Z9kg24yad-0&list=PLkdNeERjj7-6n0ItDJZQMD6561UzxDQ_B&index=1",
				type: ResourceType.VIDEO,
			},

			{
				title: "Android Studio Starter",
				content:
					"An explanation of what an Integrated Development Environment (IDE) is and what Android Studio is about.",
				thumbnail:
					"https://www.youtube.com/watch?v=NCoekcDxbrI&list=PLkdNeERjj7-6n0ItDJZQMD6561UzxDQ_B&index=2",
				type: ResourceType.VIDEO,
			},
			{
				title: "Introduction to Java",
				content:
					"A short introduction to programming with Java. You do not need Eclipse for this. Instead, you may use this online Java compiler to follow along:  https://www.jdoodle.com/online-java-compiler/ ",
				thumbnail:
					"https://www.youtube.com/watch?v=RRubcjpTkks&list=PLkdNeERjj7-6n0ItDJZQMD6561UzxDQ_B&index=3",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [""],
	},
	{
		name: "Data Analytics and Visualisation",
		tagline: "Visualise and analyse big data",
		abbreviation: "DAVA",
		description: "",
		color: "hsl(154, 74%, 69%)",
		bgColor: "hsl(154, 74%, 69%, 0.3)",
		image: "./assets/DAVA.svg",
		resources: [
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [""],
	},
	{
		name: "Network Technology",
		tagline: "Learn about the internet and simulate computer networks",
		abbreviation: "NETY",
		description: "",
		color: "hsl(154, 74%, 69%)",
		bgColor: "hsl(154, 74%, 69%, 0.3)",
		image: "./assets/NETY.svg",
		resources: [
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [""],
	},
	{
		name: "User Experience and Interface Design",
		tagline: "Design and prototype your app",
		abbreviation: "UXID",
		description: "",
		color: "hsl(154, 74%, 69%)",
		bgColor: "hsl(154, 74%, 69%, 0.3)",
		image: "./assets/UXID.svg",
		resources: [
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [""],
	},
	{
		name: "Logic and Mathematics",
		tagline: "Learn about Discrete Mathematics",
		abbreviation: "LOMA",
		description: "",
		color: "hsl(154, 74%, 69%)",
		bgColor: "hsl(154, 74%, 69%, 0.3)",
		image: "./assets/LOMA.svg",
		resources: [
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [""],
	},
	{
		name: "Others",
		tagline: "Usefil miscellaneous resources",
		abbreviation: "Others",
		description: "",
		color: "hsl(154, 74%, 69%)",
		bgColor: "hsl(154, 74%, 69%, 0.3)",
		image: "./assets/Others.svg",
		resources: [
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
			{
				title: "",
				content: "",
				thumbnail: "",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [""],
	},
]