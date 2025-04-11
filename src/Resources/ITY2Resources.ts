import { ResourceType } from "../Interfaces/ResourceType"
import { Subject } from "../Interfaces/Subject"

const MBAP: Subject = {
	name: "Mobile Application Development",
	tagline: "Create a multi-platform Mobile Application",
	abbreviation: "MBAP",
	description:
		"This module teaches you about how to implement a single application on multiple platform. You'll be using Flutter and Firebase to create an application that can (potentially) be run on 6 different platforms! (iOS, Android, Windows, macOS, Linux and Web!)",
	color: "hsl(226, 67%, 67%)",
	bgColor: "hsla(226, 67%, 67%, 0.3)",
	imageLight: "Subject-Icons/Light/MBAP-L.svg",
	imageDark: "Subject-Icons/Dark/MBAP-D.svg",
	resources: [
		{
			title: "Dart in 100 seconds",
			content:
				"Understand the lanaguage behind Flutter, and how Dart powers it in this short video!",
			thumbnail: "https://www.youtube.com/embed/NrO0CJCbYLA?",
			type: ResourceType.VIDEO,
		},

		{
			title: "Flutter Basic Training",
			content:
				"Learn the foundations of Flutter and Dart and how it can all be used to create a cross-platform application (not just Mobile!)",
			thumbnail: "https://www.youtube.com/embed/jZ952vChhuI?",
			type: ResourceType.VIDEO,
			resourceLinks: [
				{
					title: "Try writing Flutter in this online Flutter editor",
					url: "https://dartpad.dev/",
				},
			],
		},
		{
			title: "Flutter: Widget of the Week",
			content:
				"Find interesting and useful packages or widget made by the Flutter community in this playlist created by the Flutter Development team!",
			thumbnail:
				"https://www.youtube.com/embed?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG",
			type: ResourceType.VIDEO,
		},

		{
			title: "Use Flutter with Firestore Database",
			content:
				"Learn about Firestore, a part of Firebase's services that can power your application's database to stay persistent within the Cloud! Note: Video may be a bit outdated as Flutter continues to evolve, so do your own research on Firestore as well!",
			thumbnail: "https://www.youtube.com/embed/DqJ_KjFzL9I?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Flutter Codelabs",
			content:
				"Follow the interactive and detailed guide made by the Flutter team through this Codelabs to create & learn a variety of ways to use Flutter",
			thumbnail: "/Images/IITY2/fluttercodelabs.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://docs.flutter.dev/codelabs",
			resourceLinks: [
				{
					title: "Open the interactive course",
					url: "https://docs.flutter.dev/codelabs",
				},
			],
		},
	],
	advanced: [""],
	software: [
		{
			name: "Visual Studio Code",
			icon: "/Software-Icons/VSCode.svg",
			url: "https://code.visualstudio.com/download",
		},
		{
			name: "GitHub",
			icon: "/Software-Icons/GitHub.svg",
			url: "https://github.com/",
		},
	],
}

const CADV: Subject = {
	name: "Cloud Application Development",
	tagline: "Leverage the cloud to power your applications!",
	abbreviation: "CADV",
	description:
		"This module demonstrates how the Cloud and Microservices is being used to allow us to use different services such as Netflix, YouTube and more in our daily life without any major disruption! Using AWS as your primary Cloud Service, you'll be",
	color: "hsl(36, 100%, 50%)",
	bgColor: "hsla(36, 100%, 50%, 0.3)",
	imageLight: "Subject-Icons/Light/CADV-L.svg",
	imageDark: "Subject-Icons/Dark/CADV-D.svg",
	resources: [
		{
			title: "Microservices Explained in 5 Minutes",
			content:
				"What is the difference between the Monolithic architecture paradigm you used in CDEV/DBAV versus Microservices? and what are the pros and cons between these two paradigms?",
			thumbnail: "https://www.youtube.com/embed/lL_j7ilk7rc?",
			type: ResourceType.VIDEO,
		},

		{
			title: "Brief intro to Cloud Computing and get an overview of the Cloud",
			content:
				"Understand some of the top level concepts behind Cloud Computing (such as Platform/Infrastructure/Software & Function as a service, Private/Public & Hybrid Cloud) before diving into more in-depth explanations of these concepts.",
			thumbnail: "https://www.youtube.com/embed/1pBuwKwaHp0?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Public vs Private vs Hybrid Cloud | What are they?",
			content:
				"Traditional infrastructure powering applications are on-premise, these are considered private clouds, understand the difference between a private, public and hybrid cloud architecture in this video by Intel.",
			thumbnail: "https://www.youtube.com/embed/3WIJ4axzFlU?",
			type: ResourceType.VIDEO,
		},

		{
			title: "Top 50+ AWS Services",
			content:
				"You'll be using AWS in CADV, understand some of the top services that AWS offers and think of how it can help you in both personal and school projects! ;)",
			thumbnail: "https://www.youtube.com/embed/JIbIYCM48to?",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [],
}

const AMDT: Subject = {
	name: "Agile Methodology and Design Thinking",
	tagline:
		"Learn about the Agile Methodology and use it in Software Development",
	abbreviation: "AMDT",
	description:
		"This module explores on two popular approaches to problem solving that are commonly used in software development. The use of Design Thinking processes to generate ideas and create prototypes, and Agile Methodology to test and refine those ideas through iterative cycles. Combination of both Agile Methodology and Design Thinking can help teams to deliver high-quality, user-centered solutions more efficiently and effectively. The topics learnt in this module will be useful in your internship or in your future employment!",
	color: "hsl(314, 87%, 45%)",
	bgColor: "hsla(314, 87%, 45%, 0.3)",
	imageLight: "Subject-Icons/Light/AMDT-L.svg",
	imageDark: "Subject-Icons/Dark/AMDT-D.svg",
	resources: [
		{
			title: "Agile vs Waterfall Methodology",
			content:
				"What is the difference between the classic Waterfall management style and Agile? How does it benefit the product team and the customer at the same time?",
			thumbnail: "https://www.youtube.com/embed/5RocT_OdQcA?",
			type: ResourceType.VIDEO,
		},

		{
			title: "Scrum vs Kanban",
			content:
				'Okay you may be used to Kanban within productivity apps such as Notion, but how does it differ between Scrum and Kanban when using in an Agile context? And what are these so called "Sprints" that builds the backbone of Agile?',
			thumbnail: "https://www.youtube.com/embed/rIaz-l1Kf8w?",
			type: ResourceType.VIDEO,
		},
		{
			title: "What are UML Use Case Diagrams?",
			content:
				"Understand how these UML Diagrams can allow development teams understand the user's intended flow within the product.",
			thumbnail: "https://www.youtube.com/embed/zid-MVo7M-E?",
			type: ResourceType.VIDEO,
		},

		{
			title: "In-depth look at Agile",
			content:
				"Watch this animation of an in-depth look at Agile created by a former Minecraft & Spotify coach/developer! (This video is definitely too in-depth for what the school covers, feel free to skip it if you'd like!)",
			thumbnail: "https://www.youtube.com/embed/502ILHjX9EE?",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [],
}

const APPSEC: Subject = {
	name: "Application Security",
	tagline: "Building Security Into Web Apps",
	abbreviation: "APPSEC",
	description:
		"This subject focuses on secure web application design and development. It discusses the inherent threats and vulnerabilities of web applications and the corresponding counter-measures.",
	color: "hsl(150, 78%, 43%)",
	bgColor: "hsla(150, 78%, 43%, 0.3)",
	imageLight: "Subject-Icons/Light/APPSEC-L.svg",
	imageDark: "Subject-Icons/Dark/APPSEC-D.svg",
	resources: [
		{
			title: "OWASP Top 10 API Security Risks",
			content:
				"The OWASP Top 10 API Security Risks is a list of the most critical vulnerabilities in APIs, helping developers secure their applications against common threats.",
			thumbnail: "/Images/IITY2/owasp-logo.png",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
			resourceLinks: [
				{
					title: "Read the article",
					url: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
				},
			],
		},
	],
	advanced: [""],
	software: [
		{
			name: "Visual Studio Code",
			icon: "/Software-Icons/VSCode.svg",
			url: "https://code.visualstudio.com/download",
		},
		{
			name: "Node.js",
			icon: "/Software-Icons/NodeJs.svg",
			url: "https://nodejs.org/en/download/prebuilt-installer",
		},
		{
			name: "MongoDB Compass",
			icon: "/Software-Icons/MongoDBCompass.svg",
			url: "https://www.mongodb.com/products/tools/compass",
		},
	],
}

export { MBAP, CADV, AMDT, APPSEC }
