import { ResourceType } from "../Interfaces/ResourceType"
import { Subject } from "../Interfaces/Subject"

const COMT: Subject = {
	name: "Computational Thinking",
	tagline: "Create apps with Python inside Jupyter Notebook!",
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
					title: "Try writing Python in this online Python editor",
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
			thumbnail: "/Images/IITY1/codecademy.png",
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
	tagline:
		"Learn about designing User Interfaces with a human-centered approach",
	abbreviation: "UXID",
	description:
		"This module introduces the concept of Human-Centered Design, and its practice to create useful digital products and interfaces that offer an enriching user experience (UX). The topics covered include designing sustainable interfaces, need findings, sketching and prototyping for interactive experience, and usability testing with accessibility considerations.",
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
			title: "Low vs High Fidelity Wireframes in Figma",
			content:
				"What is the difference between a Low vs a High Fidelity Wireframe? How is this useful in better understanding the requirements of our application? Part of that same playlist!",
			thumbnail:
				"https://www.youtube.com/embed/UU_eyUGWIEI?si=khJVgZSrx3vL6wfu",
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
			name: "Figma",
			icon: "/Software-Icons/Figma.svg",
			url: "https://www.figma.com/",
		},
	],
}

const DAVA: Subject = {
	name: "Data Analytics and Visualisation",
	tagline: "Explore, Analyse and Visualise Big Data",
	abbreviation: "DAVA",
	description:
		"Have you ever thought about how Spotify Wrapped works? Data Analysis and Visualisation is how Spotify can provide you every year with the fun statistics of your account! This module teaches you the foundation of data analytics and visualisation. You will learn to understand, prepare and evaluate your data using tools like KNIME and create beautiful dashboards with Power BI.",
	color: "hsl(43, 100%, 65%)",
	bgColor: "hsla(43, 100%, 65%, 0.3)",
	imageLight: "Subject-Icons/Light/DAVA-L.svg",
	imageDark: "Subject-Icons/Dark/DAVA-D.svg",
	resources: [
		{
			title: "What is Data Analytics? a quick explainer video",
			content:
				"An quick introduction to Data Analytics and its process, tools and understand how it's transforming our world, giving us a better idea on threats in Cybersecurity, User's retention on applications, or perhaps the little new AI you may have heard called ChatGPT!",
			thumbnail: "https://www.youtube.com/embed/shoT0k8ZzeM?",
			type: ResourceType.VIDEO,
			resourceLinks: [
				{
					title: "You can read a more detailed blog post here",
					url: "https://www.projectcubicle.com/what-is-data-analytics-definition-with-examples/",
				},
			],
		},
		{
			title: "Visualise the Titanic's data!",
			content:
				"Explore around in this interactive web application and see how you can identify a person from within the dataset. Challenge: Try to find the Captain and see whether or not he went down with the ship or escaped onto a lifeboat!",
			thumbnail: "/Images/IITY1/davadashboard.jpg",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://sanddance.azurewebsites.net/BeachPartyApp/BeachPartyApp.html",
			resourceLinks: [
				{
					title: "Play around in the interactive Dashboard",
					url: "https://sanddance.azurewebsites.net/BeachPartyApp/BeachPartyApp.html",
				},
			],
		},
		{
			title: "Using real world data to make an impact",
			content:
				"Data can be used to streamline the efficiency of a process, or prepare for future disasters, or perhaps give you recommendations on YouTube! This video goes over some excellent examples on how you can use data analytics in real world problems.",
			thumbnail: "https://www.youtube.com/embed/JIcXC_3Gfow?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Types of Graphs and when to use them",
			content:
				"It is important to know what different types of charts are for. This video provides a quick summary of the different types of graphs and their uses.",
			thumbnail: "https://www.youtube.com/embed/yrTB5JSQPqY?",
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
		{
			title: "Learn how to write recursive formulas",
			content:
				"Recursion is used in computing for all sorts of things, this video introduces it in an easy to understand way!",
			thumbnail: "https://www.youtube.com/embed/bguje4yGTK0?",
			type: ResourceType.VIDEO,
		},
		{
			title: "A quick review of sequences and series",
			content:
				"Summation and sequences is a concept that can be akinned to the for loops that we use in programming, You can learn more about sequences and series in this video which may come in handy in the future!",
			thumbnail: "https://www.youtube.com/embed/Tj89FA-d0f8?",
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
			thumbnail: "/Images/IITY1/defendthecrownposter.png",
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
			thumbnail: "/Images/IITY1/pdpa.png",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://www.pdpc.gov.sg/Help-and-Resources/2018/01/E-Learning-Programme",
		},
		{
			title: "Cisco NetAcad: Introduction to Cybersecurity",
			content:
				"This introductory course takes you inside the world of cybersecurity. You will learn cybersecurity basics to protect your personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face today. Cybersecurity professionals who can protect and defend an organization's network are in high demand.",
			thumbnail: "/Images/IITY1/cisco.jpg",
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
			thumbnail: "/Images/IITY1/github-student.png",
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
				"As a student, you are entitled to 5 TB of cloud storage in OneDrive. You'll never know when your laptop or PC might crash so always put your assignments in the cloud! Just login with your student email and install the OneDrive app.",
			thumbnail: "/Images/IITY1/onedrive.png",
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
			thumbnail: "/Images/IITY1/wordcounter.png",
			imageUrl: "https://wordcounter.tnitish.com/",
			type: ResourceType.IMAGE,
		},
		{
			title: "GPA Buy Wat? - A GPA Calculator",
			content:
				"Do you overthink all the possible combinations of your grade for a module that makes up your future GPA? Use this calculator and see the exact combination to get your desired GPA!",
			thumbnail: "/Images/IITY1/gpacalculator.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://gpa-buy-wat.vercel.app/",
		},
		{
			title: "Transito - SG Bus Timings",
			content:
				"Want to decide when to start sprinting for your bus so you aren't late for class? Use this bus timing app made by one of our students to quickly see when your bus is arriving with the app's modern and clean ✨aesthetic✨",
			thumbnail: "/Images/IITY1/transito.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://transito.tnitish.com",
			resourceLinks: [
				{
					title: "Google Play (Android)",
					url: "https://transito.tnitish.com/android",
				},
				{
					title: "App Store (iPhones)",
					url: "https://transito.tnitish.com/ios",
				},
			],
		},
	],
	advanced: [""],
	software: [],
}

const DSAG: Subject = {
	name: "Data Structures and Algorithms",
	tagline: "Learn about Data structures and algoritms",
	abbreviation: "DSAG",
	description:
		"This subject introduces students to the fundamentals of recursion and data structures in solving problems using a programming language. For this module, we will use Python, covering topics covered include tuples, dictionaries, stacks, queues, linked lists and trees. Searching techniques and sorting algorithms will also be covered.",
	color: "hsl(43, 100%, 65%)",
	bgColor: "hsla(43, 100%, 65%, 0.3)",
	imageLight: "Subject-Icons/Light/DSAG-L.svg",
	imageDark: "Subject-Icons/Dark/DSAG-D.svg",
	resources: [
		{
			title: "Intro to Data Structures",
			content: "This short 3-minute summary will give you an overview of what to expect for your next semester.",
			thumbnail: "/Images/IITY1/dsagintro.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://youtu.be/8e_PwxYGZrA?feature=shared",
			resourceLinks: [
				{
					title: "You can look watch the video here",
					url: "https://youtu.be/8e_PwxYGZrA?feature=shared"
				}
			]
		},
		{
			title: "Turtle module",
			content:
				"In the initial lessons of DSAG, we'll be exploring the Python Turtle module. It would be beneficial if you could take some time to familiarize yourself with the Turtle module.",
			thumbnail: "/Images/IITY1/pythonturtle.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://realpython.com/beginners-guide-python-turtle/",
			resourceLinks: [
				{
					title: "You can read a more detailed post here",
					url: "https://realpython.com/beginners-guide-python-turtle/",
				},
			],
		},
		{
			title: "Sorting",
			content:
				"One of the first sorting algorithms we'll cover in DSAG is Bubble Sort. It would be helpful to experiment with it by stepping through the process to visualize how Bubble Sort organizes elements in an array. We will also learn about Selection Sort and Insertion Sort. Feel free to visualize these algorithms as well to gain a better understanding.",
			thumbnail: "/Images/IITY1/bubblesort.jpg",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/",
			resourceLinks: [
				{
					title: "Play around in the interactive dashboard",
					url: "https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/",
				},
			],
		},
		{
			title: "Binary Search",
			content:
				"One of the search algorithms you'll learn is Binary Search. It's an efficient method, but it requires the elements to be sorted beforehand. We will also learn about Sequential Search.",
			thumbnail: "/Images/IITY1/binarysearch.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.programiz.com/dsa/binary-search",
			resourceLinks: [
				{
					title: "You can read a more detailed post here",
					url: "https://www.programiz.com/dsa/binary-search",
				},
			],
		},
		{
			title: "Intro to Big O notation",
			content:
				"One of the most challenging topics in DSAG is Big O notation. This video offers a solid introduction to the concept.",
			thumbnail:
				"https://www.youtube.com/embed/aWKEBEg55ps?si=hn8spvaTggk1ylSU",
			type: ResourceType.VIDEO,
		},
		{
			title: "Recursion",
			content: "Recursion will be an important concept that you will definitely be tested on. This video will allow you to master and understand that topic in order to prepare you for your next test.",
			thumbnail : "/Images/IITY1/recursion.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=m1Fjdnj_Mds",
			resourceLinks : [
				{
					title: "You can watch the video here",
					url: "https://www.youtube.com/watch?v=m1Fjdnj_Mds",
				}
			]
		}
	],
	advanced: [""],
	software: [
		{
			name: "Anaconda",
			icon: "/Software-Icons/Anaconda.svg",
			url: "https://docs.anaconda.com/anaconda/install/index.html",
		},
	],
}

const ADEV: Subject = {
	name: "Application Development Project",
	tagline: "Design and Develop Web Applications",
	abbreviation: "ADEV",
	description:
		"This subject will introduce the skills required to develop a web application using the latest technologies. Project design, development and deployment will also be covered. The coding languages you need for this module are HTML, CSS, JavaScript, and SQL.",
	color: "hsl(154, 74%, 69%)",
	bgColor: "hsla(154, 74%, 69%, 0.3)",
	imageLight: "Subject-Icons/Light/ADEV-L.svg",
	imageDark: "Subject-Icons/Dark/ADEV-D.svg",
	resources: [
		{
			title: "JavaScript in 100 Seconds",
			content:
				"JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, servers with Node.js, mobile apps, desktop software, and more.",
			thumbnail:
				"https://www.youtube.com/embed/DHjqpvDnNGE?si=F7oTH93sVS2CB-Pw",
			type: ResourceType.VIDEO,
		},
		{
			title: "HTML in 100 Seconds",
			content:
				"Ready to build your first website? HTML or Hypertext Markup Language is one of the core building blocks of the web. Learn the history of HTML and how it's used to give structure to a webpage.",
			thumbnail:
				"https://www.youtube.com/embed/ok-plXXHlWw?si=6Wvh3s1_iwnhJB8i",
			type: ResourceType.VIDEO,
		},
		{
			title: "CSS in 100 Seconds",
			content:
				"Cascading Style Sheets or CSS is the language that makes HTML websites look pretty. Learn how concepts like cascade, specificity, inheritance, and the box model influence the appearance of a webpage.",
			thumbnail:
				"https://www.youtube.com/embed/OEV8gMkCHXQ?si=E8XBTvqvT4id3qUe",
			type: ResourceType.VIDEO,
		},
		{
			title: "Jumpstart in HTML",
			content:
				"Learn to create a simple web page using HTML in this step-by-step tutorial. You'll learn the basics of HTML structure, common elements like headers, paragraphs, and forms, and best practices for writing clean, semantic code. By the end of the video, you'll be able to build your own HTML web page.",
			thumbnail:
				"https://www.youtube.com/embed/FQdaUv95mR8?si=AZDFkReA1u5EXCvJ",
			type: ResourceType.VIDEO,
		},
		{
			title: "Jumpstart into CSS",
			content:
				"This video covers CSS syntax, how to add CSS to your HTML, CSS colors, CSS units, the box model, and best practices for CSS walking through a full example of CSS being used to style an HTML page. By the end of this video you will know enough about CSS to style any basic web pages in your own projects!",
			thumbnail:
				"https://www.youtube.com/embed/1PnVor36_40?si=BzSHSL7H16DJFgKA",
			type: ResourceType.VIDEO,
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
	],
}
const DBAV: Subject = {
	name: "Database Application Development",
	tagline: "Design and Implement Effective Databases",
	abbreviation: "DBAV",
	description:
		"This subject covers the basics of relational databases, including design, query languages, implementation techniques, and building simple applications to access databases.",
	color: "hsl(289, 100%, 82%)",
	bgColor: "hsl(289, 100%, 82%, 0.3)",
	imageLight: "Subject-Icons/Light/DBAV-L.svg",
	imageDark: "Subject-Icons/Dark/DBAV-D.svg",
	resources: [
		{
			title: "Database Concepts",
			content:
				"This database tutorial will help beginners understand the basics of database management systems. We use helpful analogies to explain a high-level overview of spreadsheets, tables, and database management systems. The logic and concepts in this tutorial will make it easier to understand the more technical aspects of database architecture and Entity Relationship Diagrams (ERD).",
			thumbnail:
				"https://www.youtube.com/embed/wR0jg0eQsZA?si=mJiL80mFR5Urk96P",
			type: ResourceType.VIDEO,
		},
		{
			title: "SQL in 100 Seconds",
			content:
				"Learn the fundamentals of Structured Query Language SQL! Even though it's over 40 years old, the world's most popular databases still run on SQL.",
			thumbnail:
				"https://www.youtube.com/embed/zsjvFFKOm3c?si=7DYRq5ubU0TW1J4V",
			type: ResourceType.VIDEO,
		},
		{
			title: "How to create a database",
			content:
				"In this tutorial, you'll learn how to manage MySQL databases with essential commands like CREATE, USE, ALTER, and DROP. Through practical examples, we'll explain how to create a new database, select it for use, modify its structure, and delete it when no longer needed. By the end of this video, you'll have a solid understanding of how to manage MySQL databases effectively.",
			thumbnail:
				"https://www.youtube.com/embed/9LQ9rGoGfYQ?si=ZYU2T5DR6CRd03ZD",
			type: ResourceType.VIDEO,
		},
		{
			title: "How to create a table",
			content:
				"n this tutorial, you'll learn how to create tables in MySQL step by step. We'll cover everything from defining table structures, setting data types, and adding primary keys to creating relationships between tables. Through practical examples, you'll see how to design and implement tables that effectively store and organise data. By the end of this video, you'll be able to create your own MySQL tables with confidence.",
			thumbnail:
				"https://www.youtube.com/embed/XfrgCK6BX5w?si=ohhXSOQqGcjySoJK",
			type: ResourceType.VIDEO,
		},
		{
			title: "MySql Tutorials",
			content:
				"MySQL is a widely used relational database management system (RDBMS). MySQL is free and open-source. MySQL is ideal for both small and large applications. Start learning MySQL with this comprehsenvie guide.",
			thumbnail: "/Images/IITY1/mysqlw3school.jpg",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.w3schools.com/MySQL/default.asp	",
			resourceLinks: [
				{
					title: "You can look at the tutorials here",
					url: "https://www.w3schools.com/MySQL/default.asp	",
				},
			],
		},
	],
	advanced: [""],
	software: [
		{
			name: "Node.js",
			icon: "/Software-Icons/NodeJs.svg",
			url: "https://nodejs.org/en/download/prebuilt-installer",
		},
		{
			name: "MySQL",
			icon: "/Software-Icons/MySQL.svg",
			url: "https://dev.mysql.com/downloads/",
		},
	],
}

const NECT: Subject = {
	name: "Network and Cloud Technology",
	tagline: "Understanding Networks and Cloud Computing",
	abbreviation: "NECT",
	description:
		"This subject covers the theoretical and practical aspects of network and cloud technology. Topics covered include how data is transmitted within an organisation and via the internet, as well as cloud computing technologies, its benefits, organisation, cloud usage, and risks.",
	color: "hsl(24, 100%, 64%)",
	bgColor: "hsl(24, 100%, 64%, 0.3)",
	imageLight: "Subject-Icons/Light/NECT-L.svg",
	imageDark: "Subject-Icons/Dark/NECT-D.svg",
	resources: [
		{
			title: "Networking Basics",
			content:
				"The Networking Basics course from Cisco Networking Academy introduces foundational networking concepts, including how networks operate, devices involved, IP addressing, and protocols that enable communication over the internet. It provides an essential understanding of how data is transmitted and helps prepare learners for more advanced networking topics.",
			thumbnail: "/Images/IITY1/networking.png",
			type: ResourceType.IMAGE,
			imageUrl:
				"https://www.netacad.com/courses/networking-basics?courseLang=en-US",
			resourceLinks: [
				{
					title: "You can look at the course here",
					url: "https://www.netacad.com/courses/networking-basics?courseLang=en-US",
				},
			],
		},
		{
			title: "Cloud Tehnologies",
			content:
				'The "What is AWS?" page from Amazon Web Services (AWS) introduces key concepts of cloud computing and the core services offered by AWS, including computing power, storage, databases, and networking. It provides an essential understanding of how AWS helps organizations scale and manage IT infrastructure in the cloud, offering flexibility, cost-efficiency, and global reach. The page also highlights various use cases, such as hosting applications, machine learning, and data processing, helping learners prepare for deeper exploration of AWS solutions and services.',
			thumbnail: "/Images/IITY1/awscloudcomputing.jpg",
			type: ResourceType.IMAGE,
			imageUrl: "https://aws.amazon.com/what-is-aws/?nc2=h_ql_le_int",
			resourceLinks: [
				{
					title: "You can look at the resources here",
					url: "https://skillbuilder.aws/learn/WCQH9KVXSQ/introduction-to-aws-management-console/14VSESKDEA",
				},
			],
		},
	],
	advanced: [""],
	software: [
		{
			name: "Cisco Packet Tracker",
			icon: "/Software-Icons/PacketTracer.svg",
			url: "https://www.netacad.com/resources/lab-downloads?courseLang=en-US",
		},
		{
			name: "AWS Management Console",
			icon: "/Software-Icons/AWS.svg",
			url: "https://aws.amazon.com/free/?trk=6a99e239-96fc-4f80-bbee-4085b99c31c4&sc_channel=ps&ef_id=Cj0KCQjw0Y3HBhCxARIsAN7931UVYTVxy9UFGoXjRvMEH7zlqoautaoUTokm_AYEOM4ofl434y9q3UEaAg2bEALw_wcB:G:s&s_kwcid=AL!4422!3!770401419010!p!!g!!aws%20dashboard!22922886856!182921149126&gad_campaignid=22922886856&gbraid=0AAAAADjHtp_wBHeSe-tLRu2iaHmPITVES&gclid=Cj0KCQjw0Y3HBhCxARIsAN7931UVYTVxy9UFGoXjRvMEH7zlqoautaoUTokm_AYEOM4ofl434y9q3UEaAg2bEALw_wcB",
		},
	],
}

export { COMT, UXID, DAVA, LOMA, CYFUN, DSAG, ADEV, DBAV, NECT, Others }
