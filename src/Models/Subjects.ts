import { Subject } from "./Subject"
import { ResourceType } from "./ResourceType"
export const subjects: Subject[] = [
	{
		name: "Computational Thinking",
		tagline: "Develop an Android Application",
		abbreviation: "COMT",
		description:
			"This module teaches the fundamentals of programming using the Java programming language. Using your new skills, you will transform your UXID prototype into a real Android app with Android Studio.",
		color: "hsl(154, 74%, 69%)",
		bgColor: "hsla(154, 74%, 69%, 0.3)",
		image: "/COMT.svg",
		resources: [
			{
				title: "Learning How to Code",
				content:
					"A fun video to introduce to you how you should approach learning how to code.",
				thumbnail: "https://www.youtube.com/embed/NtfbWkxJTHw?",
				type: ResourceType.VIDEO,
			},

			{
				title: "Android Studio Starter",
				content:
					"An explanation of what an Integrated Development Environment (IDE) is and what Android Studio is about.",
				thumbnail: "https://www.youtube.com/embed/NCoekcDxbrI?",
				type: ResourceType.VIDEO,
			},
			{
				title: "Introduction to Java",
				content:
					"A short introduction to java programming - if you’d like to follow along, you can use Jdoodle as an online java compiler in place of Eclipse",
				thumbnail: "https://www.youtube.com/embed/RRubcjpTkks?",
				type: ResourceType.VIDEO,
				resourceLinks: [
					{
						title: "Online Java Compiler",
						url: "https://www.jdoodle.com/online-java-compiler/",
					},
				],
			},
			{
				title: "Codecademy",
				content:
					"An interactive online course with exercises to help you learn Java. Attempting the free topics within each module will do",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/953200075088228362/codecademy.png",
				type: ResourceType.IMAGE,
				imageUrl: "https://www.codecademy.com/learn/learn-java",
			},
			{
				title: "Udemy: Java Tutorial for Complete Beginners",
				content:
					"A more in-depth course for you to learn how to code in Java. Don't worry if you have never done programming before as this course doesn't require any prior programming knowledge",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/953850404544872468/image_5.png",
				type: ResourceType.IMAGE,
				imageUrl: "https://www.udemy.com/course/java-tutorial/",
			},
		],
		advanced: [""],
		software: [
			{
				name: "Android Studio",
				icon: "/SoftwareIcons/AndroidStudio.svg",
				url: "https://developer.android.com/studio/index.html",
			},
			{
				name: "Github",
				icon: "/SoftwareIcons/Github.svg",
				url: "https://github.com/",
			},
		],
	},
	{
		name: "Data Analytics and Visualisation",
		tagline: "Visualise and analyse big data",
		abbreviation: "DAVA",
		description:
			"This module teaches you the basics of data analytics following the CRISP-DM Methodology. You will learn to understand, prepare and evaluate your data using tools like KNIME and Power BI.",
		color: "hsl(43, 100%, 65%)",
		bgColor: "hsla(43, 100%, 65%, 0.3)",
		image: "/DAVA.svg",
		resources: [
			{
				title: "Introduction to CRISP-DM Methodology",
				content:
					"CRISP-DM models the lifecycle of a data analytics project.",
				thumbnail: "https://www.youtube.com/embed/q_okDS2RtzY?",
				type: ResourceType.VIDEO,
			},
			{
				title: "Types of Graphs and when to use them",
				content:
					"It is important to know what different types of charts are for. This video provides a quick summary of the different types of graphs and their uses.",
				thumbnail: "https://www.youtube.com/embed/yrTB5JSQPqY?",
				type: ResourceType.VIDEO,
			},
			{
				title: "What is KNIME?",
				content: "Introduction to the data tool you’ll be using",
				thumbnail: "https://www.youtube.com/embed/Pom9AuI9yg4?",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [
			{
				name: "KNIME",
				icon: "/SoftwareIcons/Knime.svg",
				url: "https://www.knime.com/",
			},
			{
				name: "Power BI",
				icon: "/SoftwareIcons/PowerBi.svg",
				url: "https://powerbi.microsoft.com/en-us/",
			},
		],
	},
	{
		name: "Network Technology",
		tagline: "Learn about the internet and simulate computer networks",
		abbreviation: "NETY",
		description:
			"This module teaches you the basics of computer networking which will help you throughout your time in IIT. You will learn to describe networking systems with the OSI Model and understand how the internet works. You will also simulate networks with Packet Tracer.",
		color: "hsl(189, 100%, 40%)",
		bgColor: "hsla(189, 100%, 40%, 0.3)",
		image: "/NETY.svg",
		resources: [
			{
				title: "Evolution of the Internet",
				content: "A little history of the internet as we know it today",
				thumbnail: "https://www.youtube.com/embed/km9-XQZkOSE?",
				type: ResourceType.VIDEO,
			},
			{
				title: "How the internet works",
				content:
					"Now that you know a bit about history of the internet, you may be wondering how it actually works. Watch this video to find out!",
				thumbnail: "https://www.youtube.com/embed/7_LPdttKXPc?",
				type: ResourceType.VIDEO,
			},
			{
				title: "Computer Networks: Crash Course Computer Science",
				content:
					"An introduction to computer networks. As it is part of a three part series, we have added them to a playlist :)",
				thumbnail:
					"https://www.youtube.com/embed?v=3QhU9jd03a0&list=PLkdNeERjj7-4jU7H0sGN02q9uyZO_JoDb&index=1",
				type: ResourceType.VIDEO,
			},
			{
				title: "Cisco NetAcad: Introduction to Cybersecurity",
				content:
					"A intro to cybersecurity course by Cisco which will enable you to discover the world of cybersecurity and its impact as you learn about the most common threats, attacks and vulnerabilities.",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/953207201080692736/file.jpg",
				type: ResourceType.IMAGE,
				imageUrl:
					"https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
			},
			{
				title: "Cisco NetAcad: Networking Essentials",
				content:
					"A networking course by Cisco which will enable you to learn the basic networking concepts and skills.",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/953209971963723787/Cisco.png",
				type: ResourceType.IMAGE,
				imageUrl:
					"https://www.netacad.com/courses/networking/networking-essentials",
			},
			{
				title: "Singtel Cyber Security Experience",
				content:
					"A nationwide initiative sponsored by Singtel designed to raise Cyber literacy among students and teachers. It introduces and inspires students to explore Cyber careers and build the skills needed.",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/953213617677926400/singtel-experience-logo_1.png",
				type: ResourceType.IMAGE,
				imageUrl: "https://singtelcyberexperience.com/",
			},
		],
		advanced: [""],
		software: [
			{
				name: "Packet Tracer",
				icon: "/SoftwareIcons/PacketTracer.svg",
				url: "https://www.netacad.com/courses/packet-tracer",
			},
		],
	},
	{
		name: "User Experience and Interface Design",
		tagline: "Design and prototype your app",
		abbreviation: "UXID",
		description:
			"This module teaches you about the UX design process. You will then carry out a design project to come up with wireframes that will be later translated to a fully functional app in COMT.",
		color: "hsl(289, 100%, 82%)",
		bgColor: "hsl(289, 100%, 82%, 0.3)",
		image: "/UXID.svg",
		resources: [
			{
				title: "UX Crash Course",
				content:
					"A crash course on what User Experience Design is about, basic design principles and the design process",
				thumbnail: "https://www.youtube.com/embed/_lyzy-vChh4?",
				type: ResourceType.VIDEO,
			},
			{
				title: "DesignBytes: Intro to Material Design",
				content:
					"Design systems make our experience of using apps and websites more consistent.  When designing Android apps, we want to make the apps on an Android device more coherent — Material Design is a design system by Google that lays out design principles for you to follow when developing for their platforms. ",
				thumbnail: "https://www.youtube.com/embed/p4gmvHyuZzw?",
				type: ResourceType.VIDEO,
			},
			{
				title: "material.io",
				content:
					"A resource website containing guidelines for Google's material design principles. Following these guidelines will enable you to make a more professional looking UI and provide a better UX for you application.",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/953179627784917022/eec66db1fc167b50a8e21692fcd38286.png",
				imageUrl: "https://material.io/design",
				type: ResourceType.IMAGE,
			},
		],
		advanced: [""],
		software: [
			{
				name: "Adobe XD",
				icon: "/SoftwareIcons/AdobeXD.svg",
				url: "https://www.adobe.com/products/xd.html",
			},
		],
	},
	{
		name: "Logic and Mathematics",
		tagline: "Learn about Discrete Mathematics",
		abbreviation: "LOMA",
		description:
			"This module covers fundamental Mathematical concepts needed for computing. In particular, Discrete Mathematics concepts such as graphs, logic and functions are taught.",
		color: "hsl(24, 100%, 64%)",
		bgColor: "hsl(24, 100%, 64%, 0.3)",
		image: "/LOMA.svg",
		resources: [
			{
				title: "Discrete Mathematics for Computer Science",
				content:
					"As the topics covered in LOMA are all related to Discrete Mathematics, here's a short introduction to this branch of Mathematics.",
				thumbnail: "https://www.youtube.com/embed/q4L-wUF3yig?",
				type: ResourceType.VIDEO,
			},
			{
				title: "Intro to Graph Theory | Definitions & Ex: 7 Bridges of Konigsberg",
				content:
					"An introduction to graph theory — the first chapter in LOMA. This also links to playlist that nicely explains many of the LOMA chapters. If you are interested, the next 3 videos continue on graph theory as well.",
				thumbnail:
					"https://www.youtube.com/embed?v=C7YrMRdLkqo&list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS&index=81",
				type: ResourceType.VIDEO,
			},
			{
				title: "How to Predict the Spread of Epidemics | Computational Social Networks",
				content:
					"A high level practical application of graph theory — modelling a social network.",
				thumbnail: "https://www.youtube.com/embed/uKVQERi83lM?",
				type: ResourceType.VIDEO,
			},
		],
		advanced: [""],
		software: [],
	},
	{
		name: "Others",
		tagline: "Useful miscellaneous resources",
		abbreviation: "Others",
		description:
			"This section contains a list of nice-to-haves for your journey with us!",
		color: "hsl(0, 100%, 77%)",
		bgColor: "hsl(0, 100%, 77%, 0.3)",
		image: "/Others.svg",
		resources: [
			{
				title: "GitHub Student Developer Pack",
				content:
					"As a student, you are eligible to register for this programme. Enjoy many deals such as free domain names, free web hosting, free Microsoft Azure credits, free IntelliJ subscription and many more! What are you waiting for? Sign up for a GitHub account and apply for the student developer pack.",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/952825328462610432/main-background_1.png",
				resourceLinks: [
					{
						title: "Benefits of the GitHub Student Developer Pack",
						url: "https://education.github.com/pack",
					},
					{
						title: "Sign up here!",
						url: "https://education.github.com/discount_requests/student_application",
					},
				],
				imageUrl: "https://education.github.com/pack",
				type: ResourceType.IMAGE,
			},
			{
				title: "OneDrive",
				content:
					"As a student, you are entitled to 5 TB of cloud storage in OneDrive. You’ll never know when your laptop or PC might crash so always put your assignments in the cloud! Just login with your student email and install the OneDrive app.",
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/952819838831722527/034863f0-3f42-11ec-ae75-30d439f4a7f4.png",
				resourceLinks: [
					{
						title: "Sign into OneDrive here!",
						url: "https://www.microsoft.com/en-sg/microsoft-365/onedrive/online-cloud-storage",
					},
				],
				imageUrl:
					"https://www.microsoft.com/en-sg/microsoft-365/onedrive/online-cloud-storage",
				type: ResourceType.IMAGE,
			},
			{
				title: "Word Counter",
				content:
					'A simple word counter that counts the number of words in a text. However, unlike other word counters, it includes a "ignore in-text citation" checkbox which filters out words in brackets (like these) from the word count. Might come in handy when you are writing essays for TPFun subjects ;D',
				thumbnail:
					"https://cdn.discordapp.com/attachments/952818890906419230/953289905486852136/unknown.png",
				imageUrl: "https://wordcounter.tnitish.com/",
				type: ResourceType.IMAGE,
			},
		],
		advanced: [""],
		software: [],
	},
]
