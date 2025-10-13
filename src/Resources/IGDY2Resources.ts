import { ResourceType } from "../Interfaces/ResourceType"
import { Subject } from "../Interfaces/Subject"

const GADV: Subject = {
    name: "Game Development",
    tagline: "",
    abbreviation: "GADV",
    description: "This subject provides you with the knowledge and skills to develop graphical interactive games through the use of existing game libraries and to create the component parts of a game, both assets and programming code, and then bring them together to produce a complete game. The subject covers game development techniques such as sprite creation, rendering and animation; collision detection; the main game loop; event handling and control of the frame rate. The in-game usage of sound effects will also be taught, as well as key programming concepts required in game development such as memory management, programming standards and debugging.",
    color: "hsl(226, 67%, 67%)",
	bgColor: "hsla(226, 67%, 67%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "C# in 100 seconds",
            content: "Understand the language behind Unity, and how C# works!",
            thumbnail: "",
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
            thumbnail: "",
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
            thumbnail: "",
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
    software: [],
}

const GADS: Subject = {
    name: "Game Design",
    tagline: "",
    abbreviation: "GADS",
    description: "The subject emphasises the use of game design to improve ideas before and during implementation. It covers various aspects of game design, from initial target audience, player behaviour and attitude to aspects affecting implementation within the actual video game. By examining various successful video games within different genres, you will learn to include a variety of attributes in your video games such as motivation for the player and being able to generate re-playability.",
    color: "hsl(36, 100%, 50%)",
	bgColor: "hsla(36, 100%, 50%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "Basic Principles of Game Design",
            content: "Learn the fundamentals of how to make good games.",
            thumbnail: "",
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
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://www.linkedin.com/learning-login/share?account=76881922&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fgame-design-foundations-1-ideas-core-loops-and-goals%2Fgoals%3Ftrk%3Dshare_video_url%26shareId%3Dr8d4keTsQUW834c8tO8HpA%253D%253D",
            resourceLinks: [
                {
                    title: "You can watch the video here",
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
    tagline: "",
    abbreviation: "TMOD",
    description: "This subject will introduce the 3D model creation workflow for games and immersive media. It also introduces Digital Content Creation (DCC) tools that can be applied to 3D modelling techniques such as low-poly meshing and digital texturing practices such as using coordinate mapping function and photographic texture creation for crafting 3D art assets.",
    color: "hsl(314, 87%, 45%)",
	bgColor: "hsla(314, 87%, 45%, 0.3)",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "Maya 101",
            content: "Learn the basic Maya interface and functions so that you can get started on your own projects!",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/LJLo6MafPVM?si=KjlVzjbiKO4dSCcC",
            resourceLinks: [
                {
                    title: "",
                    url: "https://youtu.be/LJLo6MafPVM?si=KjlVzjbiKO4dSCcC"
                }
            ]
        },
        {
            title: "Try Modelling a Coffee Cup!",
            content: "This tutorial teaches you step-by-step how to model a coffee cup in Maya 2024",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "https://youtu.be/V59XKklgfDE?si=hQWL0Kf9vYYqPWLK",
            resourceLinks: [
                {
                    title: "",
                    url: "https://youtu.be/V59XKklgfDE?si=hQWL0Kf9vYYqPWLK"
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
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
    name: "",
    tagline: "",
    abbreviation: "",
    description: "",
    color: "",
    bgColor: "",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "",
            content: "",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "",
            resourceLinks: [
                {
                    title: "",
                    url: ""
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const ARAD: Subject = {
    name: "",
    tagline: "",
    abbreviation: "",
    description: "",
    color: "",
    bgColor: "",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "",
            content: "",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "",
            resourceLinks: [
                {
                    title: "",
                    url: ""
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const IMUX: Subject = {
    name: "",
    tagline: "",
    abbreviation: "",
    description: "",
    color: "",
    bgColor: "",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "",
            content: "",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "",
            resourceLinks: [
                {
                    title: "",
                    url: ""
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

const MPPR: Subject = {
    name: "",
    tagline: "",
    abbreviation: "",
    description: "",
    color: "",
    bgColor: "",
    imageLight: "",
    imageDark: "",
    resources: [
        {
            title: "",
            content: "",
            thumbnail: "",
            type: ResourceType.IMAGE,
            imageUrl: "",
            resourceLinks: [
                {
                    title: "",
                    url: ""
                }
            ]
        }
    ],
    advanced: [""],
    software: [],
}

export { GADV, GADS, TMOD, CPGP, PGGE, ARAD, IMUX, MPPR }