import { ResourceType } from "../Interfaces/ResourceType"
import { Subject } from "../Interfaces/Subject"
import { MLDP } from "./ITY2Resources"

const DLOR: Subject = {
	name: "Deep Learning and Object Recognition",
	tagline: "Master deep learning for computer vision and object recognition",
	abbreviation: "DLOR",
	description:
		"This subject introduces students to the fundamental principles of deep learning and how it is applied to a collection of computer vision tasks to implement object recognition. It covers the concepts and architecture of convolutional neural networks such as the various layers within, and the hyperparameters involved, using available tools and libraries.",
	color: "hsl(45, 85%, 60%)",
	bgColor: "hsla(45, 85%, 60%, 0.3)",
	imageLight: "Subject-Icons/Light/DLOR-L.svg",
	imageDark: "Subject-Icons/Light/DLOR-L.svg",
	resources: [
		{
			title: "Deep Learning and Object Recognition Playlist",
			content:
				"Self-directed video course covering deep learning fundamentals, computer vision, and object recognition techniques using modern frameworks.",
			thumbnail: "https://www.youtube.com/embed?list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [
		{
			name: "Python",
			icon: "/Software-Icons/Python.svg",
			url: "https://www.python.org/downloads/",
		},
		{
			name: "Jupyter Notebook",
			icon: "/Software-Icons/Jupyter.svg",
			url: "https://jupyter.org/install",
		},
		{
			name: "Visual Studio Code",
			icon: "/Software-Icons/VSCode.svg",
			url: "https://code.visualstudio.com/download",
		},
		{
			name: "Android Studio",
			icon: "/Software-Icons/AndroidStudio.svg",
			url: "https://developer.android.com/studio",
		},
		{
			name: "Google Colab",
			icon: "/Software-Icons/GoogleColab.svg",
			url: "https://colab.research.google.com/",
		},
	],
}

const NLPR: Subject = {
	name: "Natural Language Processing",
	tagline: "Process and understand human language with AI",
	abbreviation: "NLPR",
	description:
		"This subject introduces students to the concepts and application of natural language processing (NLP). It covers the standard NLP workflow through various aspects such as text scraping, text wrangling and pre-processing, etc. using available libraries. It also explores the application of NLP to chatbot development using available tools and libraries.",
	color: "hsl(300, 70%, 65%)",
	bgColor: "hsla(300, 70%, 65%, 0.3)",
	imageLight: "Subject-Icons/Light/NLPR-L.svg",
	imageDark: "Subject-Icons/Light/NLPR-L.svg",
	resources: [
		{
			title: "Natural Language Processing In 5 Minutes",
			content:
				"Get a quick overview of Natural Language Processing—how machines understand, process, and generate human language in just 5 minutes!",
			thumbnail: "https://www.youtube.com/embed/CMrHM8a3hqw?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Large Language Models",
			content:
				"Learn the core ideas behind Large Language Models, how they're trained on massive datasets, and why they power today's AI breakthroughs.",
			thumbnail: "https://www.youtube.com/embed/5sLYAQS9sWQ?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Retrieval-Augmented Generation (RAG)",
			content:
				"Discover how Retrieval-Augmented Generation (RAG) combines external knowledge with AI models to deliver more accurate and up-to-date answers.",
			thumbnail: "https://www.youtube.com/embed/T-D1OfcDW1M?",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [],
}

const AIET: Subject = {
	name: "AI & Ethics",
	tagline: "Understanding the ethical implications of AI",
	abbreviation: "AIET",
	description:
		"This subject provides students with insights on the usage and implications of AI in daily life. It touches on the risks of applying AI without a certain set of moral and ethical principles, and discusses issues brought about by machine learning, such as the four types of bias: sample bias, prejudice bias, measurement bias, and algorithm bias.",
	color: "hsl(15, 80%, 55%)",
	bgColor: "hsla(15, 80%, 55%, 0.3)",
	imageLight: "Subject-Icons/Light/AIET-L.svg",
	imageDark: "Subject-Icons/Light/AIET-L.svg",
	resources: [
		{
			title: "Machine Learning & Bias",
			content:
				"This video explores the idea of bias in machine learning, especially how our own human biases leads to biases in technology. It covers types of bias like interaction bias, latent bias, selection bias, and how we attempt to prevent technology from perpetuating our negative biases.",
			thumbnail: "https://www.youtube.com/embed/59bMh59JQDo?",
			type: ResourceType.VIDEO,
		},
		{
			title: "AI Ethics",
			content:
				"This short video introduces the concept of Ethical AI/Responsible AI, and covers how codes of ethics for AI are drafted through five key principles – beneficence, nonmaleficence, autonomy, justice and explicability.",
			thumbnail: "https://www.youtube.com/embed/6yDr7CWLJ8c?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Types of Bias in Machine Learning",
			content:
				"This video covers the negative impacts of bias in machine learning, as well as more types of biases in machine learning - automation bias, sample bias, prejudice bias, group attribution bias, measurement bias and reporting bias.",
			thumbnail: "https://www.youtube.com/embed/4qSZEP5lJi4?",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [],
}


export { DLOR, NLPR, AIET, MLDP }
