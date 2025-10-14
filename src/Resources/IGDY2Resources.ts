import { ResourceType } from "../Interfaces/ResourceType"
import { Subject } from "../Interfaces/Subject"

const GADV: Subject = {
    name: "Game Development",
    tagline: "Develop Graphical Interactive Games in Unity",
    abbreviation: "GADV",
    description: "This subject provides you with the knowledge and skills to develop graphical interactive games through the use of existing game libraries and to create the component parts of a game, both assets and programming code, and then bring them together to produce a complete game. The subject covers game development techniques such as sprite creation, rendering and animation; collision detection; the main game loop; event handling and control of the frame rate. The in-game usage of sound effects will also be taught, as well as key programming concepts required in game development such as memory management, programming standards and debugging.",
    color: "hsl(226, 67%, 67%)",
	bgColor: "hsla(226, 67%, 67%, 0.3)",
    imageLight: "Subject-Icons/Light/COMT-L.svg",
	imageDark: "Subject-Icons/Dark/COMT-D.svg",
    resources: [
        {
            title: "C# in 100 seconds",
            content: "Understand the language behind Unity, and how C# works!",
            thumbnail: "/Images/IITY2/cs.jpg",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/ravLFzIguCM?si=HJOW2HyHRw3kGhil",
            resourceLinks: [
                {
                    title: "You can watch the video here",
                    url: "https://youtu.be/ravLFzIguCM?si=HJOW2HyHRw3kGhil"
                }
            ]
        },
        {
            title: "Unity in 100 seconds",
            content: "Understand how the Unity game engine works and learn how to get started on your game development project!",
            thumbnail: "/Images/IITY2/unity.png",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/iqlH4okiQqg?si=FgjXvLmayzN0WM22",
            resourceLinks: [
                {
                    title: "You can watch the video here",
                    url: "https://youtu.be/iqlH4okiQqg?si=FgjXvLmayzN0WM22"
                }
            ]
        },
        {
            title: "Make a simple game!",
            content: "If you are interested to learn how to use C# to develop a game, you can follow these videos and try it out!",
            thumbnail: "/Images/IITY2/game.png",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtube.com/playlist?list=PLcRSafycjWFeHojgzbkNUXt9S6-Q7BGQE&si=D12asg7dHCWYNE_I",
            resourceLinks: [
                {
                    title: "Follow this playlist!",
                    url: "https://youtube.com/playlist?list=PLcRSafycjWFeHojgzbkNUXt9S6-Q7BGQE&si=D12asg7dHCWYNE_I"
                }
            ]
        }
    ],
    advanced: [""],
    software: [
        {
            name: "",
            icon: "/Software-Icons/Unity.svg",
            url: "https://unity.com/download"
        }
    ],
}

const GADS: Subject = {
    name: "Game Design",
    tagline: "Analyse Gaming Psychology",
    abbreviation: "GADS",
    description: "The subject emphasises the use of game design to improve ideas before and during implementation. It covers various aspects of game design, from initial target audience, player behaviour and attitude to aspects affecting implementation within the actual video game. By examining various successful video games within different genres, you will learn to include a variety of attributes in your video games such as motivation for the player and being able to generate re-playability.",
    color: "hsl(36, 100%, 50%)",
	bgColor: "hsla(36, 100%, 50%, 0.3)",
    imageLight: "Subject-Icons/Light/CADV-L.svg",
	imageDark: "Subject-Icons/Dark/CADV-D.svg",
    resources: [
        {
            title: "Basic Principles of Game Design",
            content: "Learn the fundamentals of how to make good games.",
            thumbnail: "/Images/IITY2/game-design-principles.png",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/G8AT01tuyrk?si=qHjGJ0rKPDmCFATN",
            resourceLinks: [
                {
                    title: "You can watch the video here",
                    url: "https://youtu.be/G8AT01tuyrk?si=qHjGJ0rKPDmCFATN"
                }
            ]
        },
        {
            title: "Learn about mechanics, dynamics, and systems in games!",
            content: "This lesson teaches you how to break down your game into three key parts: mechanics, dynamics and the overall system! *Do note you will need a Linkedin account to watch this video.",
            thumbnail: "/Images/IITY2/game-design-foundations.png",
            type: ResourceType.IMAGE,
            imageUrl: "https://www.linkedin.com/learning-login/share?account=76881922&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fgame-design-foundations-1-ideas-core-loops-and-goals%2Fgoals%3Ftrk%3Dshare_video_url%26shareId%3Dr8d4keTsQUW834c8tO8HpA%253D%253D",
            resourceLinks: [
                {
                    title: "You can access the course here",
                    url: "https://www.linkedin.com/learning-login/share?account=76881922&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fgame-design-foundations-1-ideas-core-loops-and-goals%2Fgoals%3Ftrk%3Dshare_video_url%26shareId%3Dr8d4keTsQUW834c8tO8HpA%253D%253D"
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const TMOD: Subject = {
    name: "3d Modelling",
    tagline: "3D Model Creation Workflow for Immersive Media",
    abbreviation: "TMOD",
    description: "This subject will introduce the 3D model creation workflow for games and immersive media. It also introduces Digital Content Creation (DCC) tools that can be applied to 3D modelling techniques such as low-poly meshing and digital texturing practices such as using coordinate mapping function and photographic texture creation for crafting 3D art assets.",
    color: "hsl(314, 87%, 45%)",
	bgColor: "hsla(314, 87%, 45%, 0.3)",
    imageLight: "Subject-Icons/Light/AMDT-L.svg",
	imageDark: "Subject-Icons/Dark/AMDT-D.svg",
    resources: [
        {
            title: "Maya 101",
            content: "Learn the basic Maya interface and functions so that you can get started on your own projects!",
            thumbnail: "/Images/IITY2/maya.png",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/LJLo6MafPVM?si=KjlVzjbiKO4dSCcC",
            resourceLinks: [
                {
                    title: "You can watch the video here",
                    url: "https://youtu.be/LJLo6MafPVM?si=KjlVzjbiKO4dSCcC"
                }
            ]
        },
        {
            title: "Try Modelling a Coffee Cup!",
            content: "This tutorial teaches you step-by-step how to model a coffee cup in Maya 2024",
            thumbnail: "/Images/IITY2/maya-coffee.png",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/V59XKklgfDE?si=hQWL0Kf9vYYqPWLK",
            resourceLinks: [
                {
                    title: "You can watch the video here",
                    url: "https://youtu.be/V59XKklgfDE?si=hQWL0Kf9vYYqPWLK"
                }
            ]
        }
    ],
    advanced: [""],
    software: [
        {
            name: "Autodesk Maya",
            icon: "/Software-Icons/Maya.svg",
            url: "https://www.autodesk.com/education/edu-software/overview"
        }
    ],
}

const CPGP: Subject = {
    name: "Computer Graphics and Programming",
    tagline: "",
    abbreviation: "CPGP",
    description: "The subject covers the essentials of geometry and its mathematical representations used in computer graphics. It examines concepts and algorithms for geometric modelling and then studies rendering algorithms, such as rasterization and raytracing. Additional topics include digital imaging concepts, shaders, and scene graphs, and camera representations.",
    color: "hsl(150, 78%, 43%)",
	bgColor: "hsla(150, 78%, 43%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "How video game graphics work",
            content: "Understand the rendering pipeline behind game graphics.",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/C8YtdC8mxTU?si=FPyxxHVxOImzEh3Y",
            resourceLinks: [
                {
                    title: "You can watch the video here",
                    url: "https://youtu.be/C8YtdC8mxTU?si=FPyxxHVxOImzEh3Y"
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const PGGE: Subject = {
    name: "Programming with Game Engines",
    tagline: "",
    abbreviation: "PGGE",
    description: "This subject introduces programming of games using Game Engine. The subject will cover different game programming techniques and design pattern. Students will be able to employ the techniques and used in conjuction with game engines.",
    color: "hsl(226, 67%, 67%)",
	bgColor: "hsla(226, 67%, 67%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "Create a multiplayer game!",
            content: "This video shows you how to make a multiplayer game in Unity using Photon.",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/93SkbMpWCGo?si=RVsu3ppNQhn1xl6p",
            resourceLinks: [
                {
                    title: "With this video, let’s see if we can make a multiplayer game",
                    url: "https://youtu.be/93SkbMpWCGo?si=RVsu3ppNQhn1xl6p"
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const ARAD: Subject = {
    name: "Augmented Reality Application Development",
    tagline: "",
    abbreviation: "ARAD",
    description: "This subject introduces the principles and components underlying augmented reality applications. It covers core building blocks, user experience (UI/UX) design principles, and software tools for developing an augmented reality application.",
    color: "hsl(36, 100%, 50%)",
	bgColor: "hsla(36, 100%, 50%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "How Augmented Reality works",
            content: "This video teaches you about how AR works in Unity",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/FWyTf3USDCQ?si=AepfAbNVOUVourTg",
            resourceLinks: [
                {
                    title: "Watch this video to learn about Unity’s AR environment",
                    url: "https://youtu.be/FWyTf3USDCQ?si=AepfAbNVOUVourTg"
                }
            ]
        },
        {
            title: "Let’s Create AR!",
            content: "This video teaches you how to make AR Apps in Unity",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/VMis54yektk?si=UQ_FQZTL3LF1EdCa",
            resourceLinks: [
                {
                    title: "Watch this video to learn to make AR Apps",
                    url: "https://youtu.be/VMis54yektk?si=UQ_FQZTL3LF1EdCa"
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const IMUX: Subject = {
    name: "Immersive UIUX",
    tagline: "",
    abbreviation: "IMUX",
    description: "This subject focuses on user interfaces and the user experiences of interaction within immersive media environments. It will also cover the basics of how to create effective interfaces using the appropriate tools and techniques as well as being able to understand the user perspectives and experiences of users interacting within games and immersive environments.",
    color: "hsl(314, 87%, 45%)",
	bgColor: "hsla(314, 87%, 45%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "UI Evaluation",
            content: "This video teaches you about heuristic evaluations of User Interfaces.",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/6Bw0n6Jvwxk?si=ODQ28JhWACa5mNnE",
            resourceLinks: [
                {
                    title: "Let’s learn how to evaluate User Interfaces here",
                    url: "https://youtu.be/6Bw0n6Jvwxk?si=ODQ28JhWACa5mNnE"
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const MPPR: Subject = {
    name: "Math and Physics Programming",
    tagline: "",
    abbreviation: "MPPR",
    description: "This subject will introduce the mathematics and physics concepts, principles and formulas that are crucial to developing interactive environments that look realistic, and how to apply these concepts into immersive media. The subject includes geometry, trigonometry, vectors and matrices, and physics concepts for games and immersive media.",
    color: "hsl(150, 78%, 43%)",
	bgColor: "hsla(150, 78%, 43%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "Dot and Cross Products",
            content: "This video gives you a visual representation of Dot and Cross Products.",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/h0NJK4mEIJUsi=41WIrBIH0T3Z48A8 ",
            resourceLinks: [
                {
                    title: "Let’s visualise Dot and Cross Products here",
                    url: "https://youtu.be/h0NJK4mEIJUsi=41WIrBIH0T3Z48A8 "
                }
            ]
        },
        {
            title: "Bezier Curves",
            content: "This video introduces you to bezier curves.",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/RF04Fi9OCPc?si=Xa19ZpozU3OYd1gM ",
            resourceLinks: [
                {
                    title: "Let’s look at bezier curves together!",
                    url: "https://youtu.be/RF04Fi9OCPc?si=Xa19ZpozU3OYd1gM "
                }
            ]
        },
        {
            title: "Student Game",
            content: "This game was made by previous students in MPPR.",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://egbert-jefferson.itch.io/peace-lightning",
            resourceLinks: [
                {
                    title: "Try out the game!",
                    url: "https://egbert-jefferson.itch.io/peace-lightning"
                }
            ]
        },
        {
            title: "Game Physics Channel",
            content: "This channel talks about game physics and math in a simple way.",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://www.youtube.com/@sora_sakurai_en",
            resourceLinks: [
                {
                    title: "Check out this channel",
                    url: "https://www.youtube.com/@sora_sakurai_en"
                }
            ]
        },
    ],
    advanced: [""],
    software: [],
}

export { GADV, GADS, TMOD, CPGP, PGGE, ARAD, IMUX, MPPR }