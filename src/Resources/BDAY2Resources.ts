import { ResourceType } from "../Interfaces/ResourceType"
import { Subject } from "../Interfaces/Subject"

const DMBA: Subject = {
	name: "Data Mining and Business Analytics",
	tagline: "Master machine learning algorithms and data analytics",
	abbreviation: "DMBA",
	description:
		"This subject introduces the fundamental concepts of machine learning. Topics covered include supervised and unsupervised learning and classification.",
	color: "hsl(200, 80%, 60%)",
	bgColor: "hsla(200, 80%, 60%, 0.3)",
	imageLight: "Subject-Icons/Light/DMBA-L.svg",
	imageDark: "Subject-Icons/Dark/DMBA-D.svg",
	resources: [
		{
			title: "All Machine Learning algorithms explained in 17 minutes",
			content:
				"Intuitive understanding of how the algorithms work and how they relate to each other. Pay attention to K-Means Clustering, Linear Regression, Logistic Regression, Decision Tree, Neural Network and Model Ensembling.",
			thumbnail: "https://www.youtube.com/embed/E0Hmnixke2g?",
			type: ResourceType.VIDEO,
		},
		{
			title: "Introduction to the Alteryx Predictive Palette",
			content:
				"Quick revision of CRISP-DM and using Alteryx for Data Preparation. Quick run-through of Alteryx Predictive Palette to do Linear & Logistic Regression. Preview of Alteryx Intelligence Suite to automate the Predictive Analytics process.",
			thumbnail: "https://www.youtube.com/embed/iJvkEZqCXpo?",
			type: ResourceType.VIDEO,
		},
	],
	advanced: [""],
	software: [
		{
			name: "Alteryx",
			icon: "/Software-Icons/Alteryx.svg",
			url: "https://www.alteryx.com/products/alteryx-designer",
		},
	],
}

const DAST: Subject = {
	name: "Data Storytelling",
	tagline: "Transform data into compelling visual stories",
	abbreviation: "DAST",
	description:
		"This subject covers graphing fundamentals, graphing properties and building dashboards for reporting purposes using relevant statistical modelling and analysis techniques. The subject also introduces the knowledge and skills to apply the data storytelling framework and principles of data visualisation to enable business users to communicate and narrate findings relevant to business contexts.",
	color: "hsl(280, 70%, 65%)",
	bgColor: "hsla(280, 70%, 65%, 0.3)",
	imageLight: "Subject-Icons/Light/DAST-L.svg",
	imageDark: "Subject-Icons/Dark/DAST-D.svg",
	resources: [
		{
			title: "Presenting Technical Information with Stories",
			content:
				"Teaches how to make technical content more engaging by using storytelling techniques. It helps learners connect with audiences, simplify complex ideas, and deliver memorable presentations.",
			thumbnail: "/Images/BDAY2/presenting-technical-info.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.linkedin.com/learning/presenting-technical-information-with-stories",
			resourceLinks: [
				{
					title: "Open the LinkedIn course",
					url: "https://www.linkedin.com/learning/presenting-technical-information-with-stories",
				},
			],
		},
		{
			title: "Data Visualisation: Storytelling",
			content:
				"Learn how to transform data into compelling visual stories. This course covers principles of effective visualization, narrative techniques, and tools to communicate insights clearly and persuasively.",
			thumbnail: "/Images/BDAY2/data-visualization-storytelling.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.linkedin.com/learning/data-visualization-storytelling",
			resourceLinks: [
				{
					title: "Open the LinkedIn course",
					url: "https://www.linkedin.com/learning/data-visualization-storytelling",
				},
			],
		},
		{
			title: "From Excel to Tableau",
			content:
				"Designed for Excel users transitioning to Tableau, this course introduces Tableau's interface, basic charting, and data connection features. It helps learners build interactive dashboards and visualizations.",
			thumbnail: "/Images/BDAY2/excel-to-tableau.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.linkedin.com/learning/from-excel-to-tableau?trk=learning-topics_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning",
			resourceLinks: [
				{
					title: "Open the LinkedIn course",
					url: "https://www.linkedin.com/learning/from-excel-to-tableau?trk=learning-topics_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning",
				},
			],
		},
		{
			title: "Tableau Essential Training",
			content:
				"A comprehensive guide to Tableau, covering data connections, calculations, dashboards, and storytelling. Ideal for users aiming to master Tableau for professional data visualization and analytics.",
			thumbnail: "/Images/BDAY2/tableau-essential-training.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.linkedin.com/learning/tableau-essential-training-14959992?trk=learning-topics_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning",
			resourceLinks: [
				{
					title: "Open the LinkedIn course",
					url: "https://www.linkedin.com/learning/tableau-essential-training-14959992?trk=learning-topics_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning",
				},
			],
		},
	],
	advanced: [""],
	software: [
		{
			name: "Tableau",
			icon: "/Software-Icons/Tableau.svg",
			url: "https://www.tableau.com/products/trial",
		},
	],
}

const MLDM: Subject = {
	name: "Machine Learning for Decision Making",
	tagline: "Data-driven decision making through hands-on machine learning",
	abbreviation: "MLDM",
	description:
		"This subject covers the techniques for data driven decision making through a hands-on approach. It includes topics such as the framing of the business problem into a machine learning problem, feature engineering, machine learning model building, model results explanation and application.",
	color: "hsl(120, 70%, 50%)",
	bgColor: "hsla(120, 70%, 50%, 0.3)",
	imageLight: "Subject-Icons/Light/MLDM-L.svg",
	imageDark: "Subject-Icons/Dark/MLDM-D.svg",
	resources: [
		{
			title: "Machine Learning with Python: Foundations",
			content:
				"This beginner-friendly course introduces the core concepts of machine learning using Python. It covers supervised and unsupervised learning, model evaluation, and practical implementation using libraries like scikit-learn. Ideal for those new to ML, it builds foundational skills for further exploration.",
			thumbnail: "/Images/BDAY2/machine-learning-python-foundations.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.linkedin.com/learning/machine-learning-with-python-foundations",
			resourceLinks: [
				{
					title: "Open the LinkedIn course",
					url: "https://www.linkedin.com/learning/machine-learning-with-python-foundations",
				},
			],
		},
		{
			title: "More Python Tips, Tricks, and Techniques for Data Science",
			content:
				"This course offers practical Python tips for data scientists, focusing on writing cleaner, faster, and more efficient code. It covers advanced techniques in data manipulation, debugging, and working with libraries like pandas and NumPy to streamline data workflows.",
			thumbnail: "/Images/BDAY2/python-tips-tricks-data-science.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python",
			resourceLinks: [
				{
					title: "Open the LinkedIn course",
					url: "https://www.linkedin.com/learning/more-python-tips-tricks-and-techniques-for-data-science/tips-and-tricks-in-python",
				},
			],
		},
		{
			title: "Machine Learning and AI Foundations: Producing Explainable AI",
			content:
				"This course explores the importance of explainability in AI and machine learning. It introduces techniques and tools for building interpretable models, including SHAP, LIME, and decision trees, helping data professionals ensure transparency and trust in AI systems.",
			thumbnail: "/Images/BDAY2/machine-learning-ai-foundations.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-producing-explainable-ai-xai-and-interpretable-machine-learning-solutions",
			resourceLinks: [
				{
					title: "Open the LinkedIn course",
					url: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-producing-explainable-ai-xai-and-interpretable-machine-learning-solutions",
				},
			],
		},
	],
	advanced: [""],
	software: [
		{
			name: "Jupyter Notebook",
			icon: "/Software-Icons/Jupyter.svg",
			url: "https://jupyter.org/install",
		},
		{
			name: "Python",
			icon: "/Software-Icons/Python.svg",
			url: "https://www.python.org/downloads/",
		},
	],
}

const TSAL: Subject = {
	name: "Text and Social Media Analytics",
	tagline: "Process textual data and social media for analytical insight",
	abbreviation: "TSAL",
	description:
		"This subject equips you with the knowledge and skills to process textual data and social media for analytical insight. It covers topics such as social media analytics concepts and techniques, text analytics process and techniques such as information extraction, text categorisation, cluster analysis and sentiment analysis.",
	color: "hsl(30, 80%, 55%)",
	bgColor: "hsla(30, 80%, 55%, 0.3)",
	imageLight: "Subject-Icons/Light/TSAL-L.svg",
	imageDark: "Subject-Icons/Dark/TSAL-D.svg",
	resources: [
		{
			title: "Text Mining Toolkit Review",
			content:
				"Learn the pros and cons of Text Mining and understand how to effectively utilize text mining tools for data analysis.",
			thumbnail: "/Images/BDAY2/text-mining-toolkit.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://community.alteryx.com/t5/Data-Science/First-48-Hours-Text-Mining-Toolkit-Review/ba-p/619311",
			resourceLinks: [
				{
					title: "Open the article",
					url: "https://community.alteryx.com/t5/Data-Science/First-48-Hours-Text-Mining-Toolkit-Review/ba-p/619311",
				},
			],
		},
		{
			title: "Text Mining Tools Actions",
			content:
				"Learn what each Text Mining tool does and how to properly configure them for your text analytics workflows.",
			thumbnail: "/Images/BDAY2/text-mining-actions.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://help.alteryx.com/current/en/designer/tools/alteryx-intelligence-suite/text-mining.html#text-mining",
			resourceLinks: [
				{
					title: "Open the article",
					url: "https://help.alteryx.com/current/en/designer/tools/alteryx-intelligence-suite/text-mining.html#text-mining",
				},
			],
		},
		{
			title: "Tokenisation & Filtering Stopwords",
			content:
				"Learn about the Text Pre-processing tool in the Intelligence Suite to clean and prepare text data for analysis.",
			thumbnail: "/Images/BDAY2/tokenization-stopwords.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://community.alteryx.com/t5/Data-Science/Tokenization-and-Filtering-Stopwords-with-the-Text-Pre/ba-p/607660",
			resourceLinks: [
				{
					title: "Open the article",
					url: "https://community.alteryx.com/t5/Data-Science/Tokenization-and-Filtering-Stopwords-with-the-Text-Pre/ba-p/607660",
				},
			],
		},
		{
			title: "Text Normalisation",
			content:
				"A continuation of Text Pre-processing, which focuses on Text Normalisation techniques for improving text data quality.",
			thumbnail: "/Images/BDAY2/text-normalization.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://community.alteryx.com/t5/Data-Science/Text-Normalization-in-Alteryx/ba-p/611283",
			resourceLinks: [
				{
					title: "Open the article",
					url: "https://community.alteryx.com/t5/Data-Science/Text-Normalization-in-Alteryx/ba-p/611283",
				},
			],
		},
		{
			title: "Sentiment Analysis",
			content:
				"Learn about a tool that allows you to analyse feelings in texts and understand the emotional context of textual data.",
			thumbnail: "/Images/BDAY2/sentiment-analysis.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://community.alteryx.com/t5/Data-Science/Try-Sentiment-Analysis-with-Designer-You-Must/ba-p/589153",
			resourceLinks: [
				{
					title: "Open the article",
					url: "https://community.alteryx.com/t5/Data-Science/Try-Sentiment-Analysis-with-Designer-You-Must/ba-p/589153",
				},
			],
		},
		{
			title: "Latent Dirichlet Allocation (LDA)",
			content:
				"Learn how to interpret an LDA topic model in Python and understand topic modeling techniques for text analysis.",
			thumbnail: "/Images/BDAY2/lda-topic-modeling.png",
			type: ResourceType.IMAGE,
			imageUrl: "https://community.alteryx.com/t5/Data-Science/Using-Latent-Dirichlet-Allocation-LDA-for-Community-Topic/ba-p/332048",
			resourceLinks: [
				{
					title: "Open the article",
					url: "https://community.alteryx.com/t5/Data-Science/Using-Latent-Dirichlet-Allocation-LDA-for-Community-Topic/ba-p/332048",
				},
			],
		},
	],
	advanced: [""],
	software: [
		{
			name: "Jupyter Notebook",
			icon: "/Software-Icons/Jupyter.svg",
			url: "https://jupyter.org/install",
		},
		{
			name: "Alteryx",
			icon: "/Software-Icons/Alteryx.svg",
			url: "https://www.alteryx.com/products/alteryx-designer",
		},
		{
			name: "Python",
			icon: "/Software-Icons/Python.svg",
			url: "https://www.python.org/downloads/",
		},
	],
}

export { DMBA, DAST, MLDM, TSAL }
