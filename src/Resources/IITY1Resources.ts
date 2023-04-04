import { ResourceType } from "../Interfaces/ResourceType"
import { Subject } from "../Interfaces/Subject"

const COMT: Subject = {
	name: "Computational Thinking",
	tagline: "Create apps with Python and JupyterNotebook!	",
	abbreviation: "COMT",
	description:
		"This module teaches the fundamentals of programming using the Python programming language. Using your new skills, you will create an application with Tkinter to better visualise your changes in code.",
	color: "hsl(154, 74%, 69%)",
	bgColor: "hsla(154, 74%, 69%, 0.3)",
	imageLight: "Subject-Icons/Light/COMT-L.svg",
	imageDark: "Subject-Icons/Dark/COMT-D.svg",
	resources: [
		{
			title: "Learning How to Code",
			content:
				"A fun video to introduce you on how to approach learning coding",
			thumbnail: "https://www.youtube.com/embed/NtfbWkxJTHw?",
			type: ResourceType.VIDEO,
		},

		{
			title: "Quickstart guide to JupyterNotebook",
			content:
				"Get a quick rundown of JupyterNotebook and the fundamentals to the tool that you'll be using to write Python code. Prettify it with Markdown inside your notebooks as well!",
			thumbnail: "https://www.youtube.com/embed/jZ952vChhuI?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Python in 100 seconds",
			content:
				"Understand why Python is so commonly used and the basics of Python in one video!",
			thumbnail: "https://www.youtube.com/embed/x7X9w_GIm1s?",
			type: ResourceType.VIDEO,
			resourceLinks: [
				{
					title: "Online Python Editor",
					url: "https://www.online-python.com/",
				},
			],
		},

		{
			title: "Tkinter Tutorial",
			content:
				"Create a quick app with Tkinter and get understand Tkinter's component system",
			thumbnail: "https://www.youtube.com/embed/ibf5cx221hk?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Codeacademy: Python 3 Tutorial",
			content:
				"Learn Python in more depth through this free interactive course by Codeacademy. Attempting the free topics within each module will do",
			thumbnail:
				"https://cdn.discordapp.com/attachments/952818890906419230/953200075088228362/codecademy.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.codecademy.com/learn/learn-python-3",
		},
	],
	advanced: [""],
	software: [
		{
			name: "Anaconda",
			icon: "/Software-Icons/Anaconda.svg",
			url: "https://docs.anaconda.com/anaconda/install/index.html",
		},
		{
			name: "GitHub",
			icon: "/Software-Icons/GitHub.svg",
			url: "https://github.com/",
		},
	],
}

const UXID: Subject = {
	name: "User Experience and Interface Design",
	tagline: "Designing User Interfaces with User Experience in Mind.",
	abbreviation: "UXID",
	description:
		"This subject introduces the concept of Human-Centered Design, and its practice to create useful digital products and interfaces that offer an enriching user experience (UX). The topics covered include designing sustainable interfaces, need findings, sketching and prototyping for interactive experience, and usability testing with accessibility considerations.",
	color: "hsl(289, 100%, 82%)",
	bgColor: "hsl(289, 100%, 82%, 0.3)",
	imageLight: "Subject-Icons/Light/UXID-L.svg",
	imageDark: "Subject-Icons/Dark/UXID-D.svg",
	resources: [
		{
			title: "UI vs UX, Whats the difference?",
			content:
				"A quick video explaining the difference between UI vs UX, the design flow process ",
			thumbnail: "https://www.youtube.com/embed/5CxXhyhT6Fc?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Persona & Task Flow in Adobe XD",
			content:
				"What is a Persona? Why do we need a task flow? These are all things UX researchers uses to better understand the target audience of the service or application. Part of a playlist series that goes in depth into UI/UX inside Adobe XD, feel free to continue watching the playlist if you'd like.",
			thumbnail:
				"https://www.youtube.com/embed?v=Em2vKwE_bsg&list=PLttcEXjN1UcHbhOF4J99QKUiOqt9ETgnb&index=4",
			type: ResourceType.VIDEO,
		},
		{
			title: "Low vs High Fidelity Wireframes in Adobe XD",
			content:
				"What is the difference between a Low vs a High Fidelity Wireframe? How is this useful in better understanding the requirements of our application? Part of that same playlist!",
			thumbnail:
				"https://www.youtube.com/embed?v=NIOOH5oyjxw&list=PLttcEXjN1UcHbhOF4J99QKUiOqt9ETgnb&index=5",
			type: ResourceType.VIDEO,
		},
		{
			title: "Helpful tips on how to effectively use Colours in your UX Design",
			content:
				"The colours used in your design can improve the quality of the design by a lot, as it can distinguish to the user that certain elements have higher importance than the other! Consistency in colours can help your design too as well.",
			thumbnail: "https://www.youtube.com/embed/r8r_tstxJzc?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Amateur vs Pro UI Design Examples (a Before & After)",
			content:
				"View the difference between an Amateur and a Pro design and figure out if you can pick up some subtle improvements that you can use within your own design as well!",
			thumbnail: "https://www.youtube.com/embed/XhdLvVmUjTQ?",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [
		{
			name: "Adobe XD",
			icon: "/Software-Icons/AdobeXD.svg",
			url: "https://www.adobe.com/products/xd.html",
		},
	],
}

const DAVA: Subject = {
	name: "Data Analytics and Visualisation",
	tagline: "Visualise and analyse big data",
	abbreviation: "DAVA",
	description:
		"This module teaches you the basics of data analytics following the CRISP-DM Methodology. You will learn to understand, prepare and evaluate your data using tools like KNIME and Power BI.",
	color: "hsl(43, 100%, 65%)",
	bgColor: "hsla(43, 100%, 65%, 0.3)",
	imageLight: "Subject-Icons/Light/DAVA-L.svg",
	imageDark: "Subject-Icons/Dark/DAVA-D.svg",
	resources: [
		{
			title: "Big Data in 5 minutes",
			content:
				'Understand what is "Big Data" and learn how it is used in our everyday life.',
			thumbnail: "https://www.youtube.com/embed/bAyrObl7TYE?",
			type: ResourceType.VIDEO,
		},
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
			icon: "/Software-Icons/Knime.svg",
			url: "https://www.knime.com/",
		},
		{
			name: "Power BI",
			icon: "/Software-Icons/PowerBi.svg",
			url: "https://powerbi.microsoft.com/en-us/",
		},
	],
}

const LOMA: Subject = {
	name: "Logic and Mathematics",
	tagline: "Learn about Discrete Mathematics",
	abbreviation: "LOMA",
	description:
		"This module covers fundamental Mathematical concepts needed for computing. In particular, Discrete Mathematics concepts such as graphs, logic and functions are taught.",
	color: "hsl(24, 100%, 64%)",
	bgColor: "hsl(24, 100%, 64%, 0.3)",
	imageLight: "Subject-Icons/Light/LOMA-L.svg",
	imageDark: "Subject-Icons/Dark/LOMA-D.svg",
	resources: [
		{
			title: "Discrete Mathematics for Computer Science",
			content:
				"As the topics covered in LOMA are all related to Discrete Mathematics, here's a short introduction to this branch of Mathematics.",
			thumbnail: "https://www.youtube.com/embed/q4L-wUF3yig?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Intro to Graph Theory",
			content:
				"An introduction to graph theory — the first chapter in LOMA. This also links to playlist that nicely explains many of the LOMA chapters (Logic, Recursion and Functions). If you are interested, the next 3 videos continue on graph theory as well.",
			thumbnail:
				"https://www.youtube.com/embed?v=C7YrMRdLkqo&list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS&index=81",
			type: ResourceType.VIDEO,
		},
		{
			title: "Understanding Logic Gates",
			content:
				"Logic gates are the backbone of our digital devices, learn how they work together to create everything you see digitally.",
			thumbnail: "https://www.youtube.com/embed/INEtYZqtjTo?",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [],
}

const CYFUN: Subject = {
	name: "Cybersecurity Fundamentals",
	tagline: "The first steps to Cybersecurity Knowledge",
	abbreviation: "CYFUN",
	description:
		"This subject aims to equip students with the knowledge of IT security and its application, as well as practical skills to secure data. It also aims to equip students with the knowledge and skills to implement digital security to minimise operational risks in an organisation and raise individual cybersecurity awareness.",
	color: "hsl(189, 100%, 40%)",
	bgColor: "hsla(189, 100%, 40%, 0.3)",
	imageLight: "Subject-Icons/Light/CYFUN-L.svg",
	imageDark: "Subject-Icons/Dark/CYFUN-D.svg",
	resources: [
		{
			title: "Defend The Crown (iOS/Android)",
			content:
				"Play the mobile game Defend the Crown to learn about Cybersecurity principles.",
			thumbnail:
				"https://cdn.discordapp.com/attachments/952818890906419230/1092537052412792872/defendthecrownposter.png",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://apps.apple.com/au/app/defend-the-crown/id1550656752",
			resourceLinks: [
				{
					title: "Download it on Apple App Store",
					url: "https://apps.apple.com/au/app/defend-the-crown/id1550656752",
				},
				{
					title: "Download it on Google Play Store",
					url: "https://play.google.com/store/apps/details?id=com.PNNL.DefendtheCrown",
				},
			],
		},
		{
			title: "Personal Data Protection Act (PDPA)",
			content:
				"Get to know the essentials of the Personal Data Protection Act (PDPA) through these interactive learning tools developed by the PDPC. The course covers the basics you will need to know about the key terms and organisations' obligations under the PDPA and offer ways in which data protection officers can develop good data protection policies and practices.",
			thumbnail:
				"https://cdn.discordapp.com/attachments/952818890906419230/1092538185994735656/pdpa.PNG",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://www.pdpc.gov.sg/Help-and-Resources/2018/01/E-Learning-Programme",
		},
		{
			title: "Cisco NetAcad: Introduction to Cybersecurity",
			content:
				"This introductory course takes you inside the world of cybersecurity. You will learn cybersecurity basics to protect your personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face today. Cybersecurity professionals who can protect and defend an organization's network are in high demand.",
			thumbnail:
				"https://cdn.discordapp.com/attachments/952818890906419230/953207201080692736/file.jpg",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://skillsforall.com/course/introduction-to-cybersecurity",
		},
	],
	advanced: [""],
	software: [
		{
			name: "VirtualBox",
			icon: "/Software-Icons/VirtualBox.svg",
			url: "https://www.virtualbox.org/wiki/Downloads",
		},
	],
}

const Others: Subject = {
	name: "Others",
	tagline: "Useful miscellaneous resources",
	abbreviation: "Others",
	description:
		"This section contains a list of nice-to-haves for your journey with us!",
	color: "hsl(0, 100%, 77%)",
	bgColor: "hsl(0, 100%, 77%, 0.3)",
	imageLight: "Subject-Icons/Light/Others-L.svg",
	imageDark: "Subject-Icons/Dark/Others-D.svg",
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
		{
			title: "GPA Calculator",
			content:
				"Calculate your future or current GPA and see what you can buy with your GPA!",
			thumbnail:
				"https://cdn.discordapp.com/attachments/952818890906419230/1092539786469834804/gpacalculator.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://gpa-buy-wat.vercel.app/",
		},
	],
	advanced: [""],
	software: [],
}

export { COMT, UXID, DAVA, LOMA, CYFUN, Others }
