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
			icon: "/Software-Icons/Github.svg",
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

const FWEB: Subject = {
	name: "Full Stack Web Development",
	tagline: "Design full-stack web-based applications",
	abbreviation: "FWEB",
	description:
		"This subject introduces the concepts of full-stack web-based applications. Topics covered include designing web pages and implementing the front-end and back-end technologies of a web application. Technological and design issues of web-based application development will also be discussed.",
	color: "hsl(226, 67%, 67%)",
	bgColor: "hsla(226, 67%, 67%, 0.3)",
	imageLight: "Subject-Icons/Light/FWEB-L.svg", 
	imageDark: "Subject-Icons/Light/FWEB-L.svg",
	resources: [
		{
			title: "JavaScript in 100 seconds",
			content:
				"JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, servers with Node.js, mobile apps, desktop software, and more.",
			thumbnail: "/Images/IITY2/js-100.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
		},

		{
			title: "ES6+ Features in JavaScript",
			content:
				"Now that you've built your foundation for JavaScript, let's deep dive into ES6+ Features in JavaScript such as Arrow Functions, Template Literals, and more!",
			thumbnail: "/Images/IITY2/es6+.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=eW6otoH290g"
		},
		{
			title: "React in 100 Seconds",
			content:"React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds.",
			thumbnail: "/Images/IITY2/react.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=Tn6-PIqc4UM&pp=ygUTZXM3KyBpbiAxMDAgc2Vjb25kcw%3D%3D",
			resourceLinks: [
				{
					title: "You can learn React here",
					url: "https://react.dev/learn",
				},
			]
		},

		{
			title: "10 React Hooks Explained",
			content: "React hooks provide a highly-efficient way to tap into framework features and organise reactive logic.",
			thumbnail: "/Images/IITY2/react-hooks.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=TNhaISOUy6Q"
		},
		{
			title: "MongoDB in 100 Seconds",
			content: "MongoDB is the world’s most popular document database with powerful capabilities like full-text search, geospatial queries, data aggregation, and more. Watch this 100 seconds to have a better idea of this application for your FWEB class!",
			thumbnail: "/Images/IITY2/mongo.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=-bt_y4Loofg",
			resourceLinks: [
				{
					title: "Getting Started with MongoDB & Mongoose",
					url: "https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/ ",
				},
			]
		},
		{
			title: "MERN Stack",
			content: "MERN is a pre-built technology stack to build websites and it's what you'll be using for this module. If you're more interested, some related topics you could explore that are not covered include TypeScript, Next.js, Redis, Redux, GraphQL, Docker + CI/CD pipelines. However, it is crucial you cultivate your basic understanding of HTML, CSS, JavaScript, Node.js, and Express.js.",
			thumbnail: "/Images/IITY2/mern.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.mongodb.com/resources/languages/mern-stack",
			resourceLinks: [
				{
					title: "MERN Stack Roadmap – How to Learn MERN and Become a Full-Stack Developer",
					url: "https://www.freecodecamp.org/news/mern-stack-roadmap-what-you-need-to-know-to-build-full-stack-apps/",
				},
				{
					title: "MERN Stack Tutorial for Beginners with Deployment – 2025 - freeCodeCamp",
					url: "https://www.youtube.com/watch?v=F9gB5b4jgOI"
				}
			]
		},
	],
	advanced: [""],
	software: [
		{
			name: "MongoDB Compass",
			icon: "/Software-Icons/MongoDBCompass.svg",
			url: "https://www.mongodb.com/products/tools/compass"
		},
		{
			name: "Node.js",
			icon: "/Software-Icons/NodeJs.svg",
			url: "https://nodejs.org/en/download/prebuilt-installer",
		},
	],
}

const DEVOPS: Subject = {
	name: "DevOps Essentials",
	tagline: "Explore Application Deployment with CI/CD",
	abbreviation: "DEVOPS",
	description:
		"This subject covers the development and deployment of applications using DevOps tools and Agile methodology. It introduces the concepts of Continuous Integration, Continuous Delivery and Continuous Deployment.",
	color: "hsl(36, 100%, 50%)",
	bgColor: "hsla(36, 100%, 50%, 0.3)",
	imageLight: "Subject-Icons/Light/DEVOPS-L.svg",
	imageDark: "Subject-Icons/Dark/DEVOPS-D.svg",
	resources: [
		{
			title: "Basic Git Commands",
			content:
				"GitHub is a platform that you'll be using regularly as a developer for hosting and collaborating on Git Repositories. Learn how to use Git and GitHub for source control management (SCM) through this in-depth tutorial.",
			thumbnail: "/Images/IITY2/github.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=tRZGeaHPoaw",
			resourceLinks : [
				{
					title: "You can watch the video here",
					url: "https://www.youtube.com/watch?v=tRZGeaHPoaw",
				}
			]
		},
	],
	advanced: [""],
	software: [
		{
			name: "GitHub",
			icon: "/Software-Icons/GitHub.svg",
			url: "https://github.com/",
		},
		{
			name: "Microsoft Teams",
			icon: "/Software-Icons/MicrosoftTeams.svg",
			url: "https://teams.live.com/free"
		},
		{
			name: "Jenkins",
			icon: "/Software-Icons/Jenkins.svg",
			url: "https://www.jenkins.io/"
		},
		{
			name: "Jira",
			icon: "/Software-Icons/Jira.svg",
			url: "https://www.atlassian.com/software/jira?campaign=18458074949&adgroup=140509303646&targetid=kwd-20723783302&matchtype=e&network=g&device=c&device_model=&creative=687972977753&keyword=jira%20download&placement=&target=&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gad_campaignid=18458074949&gbraid=0AAAAAD_uzhB9F_djh7f8IhbSmG43s2lyy&gclid=Cj0KCQjwl5jHBhDHARIsAB0YqjzJO-GPeWJdNOclqCBEjr6Jqj37jamN3zdSwcGN9PftDYpxRI1AHaUaAkI-EALw_wcB"
		},
		{
			name: "Docker",
			icon: "/Software-Icons/Docker.svg",
			url: "https://www.docker.com/get-started/"
		},
	],
}

const MLDP: Subject = {
	name: "Machine Learning for Developers",
	tagline:
		"Fundamentals of Algorithmic Machine Learning Methods",
	abbreviation: "MLDP",
	description:
		"This subject introduces the fundamentals of machine learning principles and practices. It covers a range of machine learning models and algorithmic machine learning methods, such as supervised learning.",
	color: "hsl(314, 87%, 45%)",
	bgColor: "hsla(314, 87%, 45%, 0.3)",
	imageLight: "Subject-Icons/Light/MLDP-L.svg",
	imageDark: "Subject-Icons/Dark/MLDP-D.svg",
	resources: [
		{
			title: "Machine Learning Basics",
			content: "AI and machine learning can help transform a massive pile of data into useful insights. Understanding which branch of machine learning to use, supervised or unsupervised, is important before coming into class.",
			thumbnail: "/Images/IITY2/ai.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=3fsy2oheRdg",
			resourceLinks : [
				{
					title: "You can watch the video here",
					url: "https://www.youtube.com/watch?v=3fsy2oheRdg",
				}
			]
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
			name: "Anaconda",
			icon: "/Software-Icons/Anaconda.svg",
			url: "https://docs.anaconda.com/anaconda/install/index.html",
		},
	],
}

const ITAD: Subject = {
	name: "IoT Application Development",
	tagline: "Design Principles for Connected Devices and Prototyping Techniques",
	abbreviation: "ITAD",
	description:
		"This subject covers the concepts of Distributed System Architecture like Service-Oriented Architecture, Representational State Transfer (REST) and Web Services, identification of technology and design principles for connected devices as well as prototyping techniques for developing web services.",
	color: "hsl(150, 78%, 43%)",
	bgColor: "hsla(150, 78%, 43%, 0.3)",
	imageLight: "Subject-Icons/Light/ITAD-L.svg",
	imageDark: "Subject-Icons/Light/ITAD-L.svg",
	resources: [
		{
			title: "What is the Internet of Things?",
			content: "This video on What is IoT gives you a brief introduction to iot internet of things in just 6 minutes.",
			thumbnail: "/Images/IITY2/iot.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=6mBO2vqLv38&t=81s",
			resourceLinks : [
				{
					title: "You can watch the video here",
					url: "https://www.youtube.com/watch?v=6mBO2vqLv38&t=81s",
				}
			]
		},
		{
			title: "Service-Oriented Architecture (SOA) Explained in 3 Minutes",
			content: "SOA is a software design approach that builds applications around a collection of independent, reusable services, each performing a specific business function.",
			thumbnail: "/Images/IITY2/soa.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.youtube.com/watch?v=5P1cWeSyR94",
			resourceLinks : [
				{
					title: "You can watch the video here",
					url: "https://www.youtube.com/watch?v=5P1cWeSyR94",
				}
			]
		},
	],
	advanced: [""],
	software: [
		{
			name: "Amazon Web Services",
			icon: "/Software-Icons/AWS.svg",
			url: "https://aws.amazon.com/free/?trk=6a99e239-96fc-4f80-bbee-4085b99c31c4&sc_channel=ps&ef_id=Cj0KCQjw0Y3HBhCxARIsAN7931UVYTVxy9UFGoXjRvMEH7zlqoautaoUTokm_AYEOM4ofl434y9q3UEaAg2bEALw_wcB:G:s&s_kwcid=AL!4422!3!770401419010!p!!g!!aws%20dashboard!22922886856!182921149126&gad_campaignid=22922886856&gbraid=0AAAAADjHtp_wBHeSe-tLRu2iaHmPITVES&gclid=Cj0KCQjw0Y3HBhCxARIsAN7931UVYTVxy9UFGoXjRvMEH7zlqoautaoUTokm_AYEOM4ofl434y9q3UEaAg2bEALw_wcB",
		},
	],
}

export { MBAP, CADV, AMDT, APPSEC, FWEB, DEVOPS, MLDP, ITAD }
