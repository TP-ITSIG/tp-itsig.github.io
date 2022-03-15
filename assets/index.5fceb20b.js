import{j as e,B as l,C as b,a as o,V as I,H as w,T as a,b as v,I as f,F as E,S as M,u as k,c as C,r as m,M as T,d as z,e as O,f as L,g as W,h as p,i as G,k as A,l as h,L as D,m as U,G as j,n as y,A as P,o as R,p as B,R as N,q as x,s as V,t as _,v as H,w as F,x as J}from"./vendor.59da9a81.js";const q=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function u(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(n){if(n.ep)return;n.ep=!0;const r=u(n);fetch(n.href,r)}};q();const Q=()=>e(l,{bg:"rgba(0, 0, 0, 0.06)",p:{base:1.5,md:2},sx:{w:"100%"},children:e(b,{children:o(I,{spacing:{base:.5,md:1},children:[o(w,{spacing:1,children:[e(a,{fontSize:{base:"sm",md:"md"},children:"Made with love, by"}),e(a,{fontSize:{base:"sm",md:"md"},color:"hsl(207, 100%, 66%)",children:"ITSIG"})]}),o(w,{children:[e(v,{label:"ITSIG Instagram","aria-label":"ITSIG Instagram",placement:"left",children:e(f,{isRound:!0,bg:"transparent","aria-label":"ITSIG Instagram",icon:e(E,{}),fontSize:"3xl",onClick:()=>{window.open("https://www.instagram.com/itsigtp/")}})}),e(v,{label:"ITSIG GitHub","aria-label":"ITSIG GitHub",placement:"right",children:e(f,{isRound:!0,bg:"transparent","aria-label":"ITSIG GitHub",icon:e(M,{}),fontSize:"3xl",onClick:()=>{window.open("https://www.github.com/tp-itsig/")}})})]})]})})});var i=(t=>(t[t.VIDEO=0]="VIDEO",t[t.IMAGE=1]="IMAGE",t))(i||{});const g=[{name:"Computational Thinking",tagline:"Develop an Android Application",abbreviation:"COMT",description:"This module teaches the fundamentals of programming using the Java programming language. Using your new skills, you will transform your UXID prototype into a real Android app with Android Studio.",color:"hsl(154, 74%, 69%)",bgColor:"hsla(154, 74%, 69%, 0.3)",image:"/COMT.svg",resources:[{title:"Learning How to Code",content:"A fun video to introduce to you how you should approach learning how to code.",thumbnail:"https://www.youtube.com/embed?v=NtfbWkxJTHw&list=PLkdNeERjj7-6n0ItDJZQMD6561UzxDQ_B&index=1",type:i.VIDEO},{title:"Android Studio Starter",content:"An explanation of what an Integrated Development Environment (IDE) is and what Android Studio is about.",thumbnail:"https://www.youtube.com/embed?v=NCoekcDxbrI&list=PLkdNeERjj7-6n0ItDJZQMD6561UzxDQ_B&index=2",type:i.VIDEO},{title:"Introduction to Java",content:"A short introduction to java programming - if you\u2019d like to follow along, you can use Jdoodle as an online java compiler in place of Eclipse",thumbnail:"https://www.youtube.com/embed?v=RRubcjpTkks&list=PLkdNeERjj7-6n0ItDJZQMD6561UzxDQ_B&index=3",type:i.VIDEO,resourceLinks:[{title:"Online Java Compiler",url:"https://www.jdoodle.com/online-java-compiler/"}]},{title:"Codecademy",content:"An interactive online course with exercises to help you learn Java. Attempting the free topics within each module will do",thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/953200075088228362/codecademy.png",type:i.IMAGE,imageUrl:"https://www.codecademy.com/learn/learn-java"}],advanced:[""],software:[{name:"Android Studio",icon:"/SoftwareIcons/AndroidStudio.svg",url:"https://developer.android.com/studio/index.html"},{name:"Github",icon:"/SoftwareIcons/Github.svg",url:"https://github.com/"}]},{name:"Data Analytics and Visualisation",tagline:"Visualise and analyse big data",abbreviation:"DAVA",description:"This module teaches you the basics of data analytics following the CRISP-DM Methodology. You will learn to understand, prepare and evaluate your data using tools like KNIME and Power BI.",color:"hsl(43, 100%, 65%)",bgColor:"hsla(43, 100%, 65%, 0.3)",image:"/DAVA.svg",resources:[{title:"Introduction to CRISP-DM Methodology",content:"CRISP-DM models the lifecycle of a data analytics project.",thumbnail:"https://www.youtube.com/embed/q_okDS2RtzY",type:i.VIDEO},{title:"Types of Graphs and when to use them",content:"It is important to know what different types of charts are for. This video provides a quick summary of the different types of graphs and their uses.",thumbnail:"https://www.youtube.com/embed/yrTB5JSQPqY",type:i.VIDEO},{title:"What is KNIME?",content:"Introduction to the data tool you\u2019ll be using",thumbnail:"https://www.youtube.com/embed/Pom9AuI9yg4",type:i.VIDEO}],advanced:[""],software:[{name:"KNIME",icon:"/SoftwareIcons/KNIME.svg",url:"https://www.knime.com/"},{name:"Power BI",icon:"/SoftwareIcons/PowerBI.svg",url:"https://powerbi.microsoft.com/en-us/"}]},{name:"Network Technology",tagline:"Learn about the internet and simulate computer networks",abbreviation:"NETY",description:"This module teaches you the basics of computer networking which will help you throughout your time in IIT. You will learn to describe networking systems with the OSI Model and understand how the internet works. You will also simulate networks with Packet Tracer.",color:"hsl(189, 100%, 40%)",bgColor:"hsla(189, 100%, 40%, 0.3)",image:"/NETY.svg",resources:[{title:"Evolution of the Internet",content:"A little history of the internet as we know it today",thumbnail:"https://www.youtube.com/embed/km9-XQZkOSE",type:i.VIDEO},{title:"How the internet works",content:"Now that you know a bit about history of the internet, you may be wondering how it actually works. Watch this video to find out!",thumbnail:"https://www.youtube.com/embed/7_LPdttKXPc",type:i.VIDEO},{title:"Computer Networks: Crash Course Computer Science",content:"An introduction to computer networks. As it is part of a three part series, we have added them to a playlist :)",thumbnail:"https://www.youtube.com/embed?v=3QhU9jd03a0&list=PLkdNeERjj7-4jU7H0sGN02q9uyZO_JoDb&index=1",type:i.VIDEO},{title:"Cisco NetAcad: Introduction to Cybersecurity",content:"A intro to cybersecurity course by Cisco which will enable you to discover the world of cybersecurity and its impact as you learn about the most common threats, attacks and vulnerabilities.",thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/953207201080692736/file.jpg",type:i.IMAGE,imageUrl:"https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity"},{title:"Cisco NetAcad: Networking Essentials",content:"A networking course by Cisco which will enable you to learn the basic networking concepts and skills.",thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/953209971963723787/Cisco.png",type:i.IMAGE,imageUrl:"https://www.netacad.com/courses/networking/networking-essentials"},{title:"Singtel Cyber Security Experience",content:"A nationwide initiative sponsored by Singtel designed to raise Cyber literacy among students and teachers. It introduces and inspires students to explore Cyber careers and build the skills needed.",thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/953213617677926400/singtel-experience-logo_1.png",type:i.IMAGE,imageUrl:"https://singtelcyberexperience.com/"}],advanced:[""],software:[{name:"Packet Tracer",icon:"/SoftwareIcons/PacketTracer.svg",url:"https://www.netacad.com/courses/packet-tracer"}]},{name:"User Experience and Interface Design",tagline:"Design and prototype your app",abbreviation:"UXID",description:"This module teaches you about the UX design process. You will then carry out a design project to come up with wireframes that will be later translated to a fully functional app in COMT.",color:"hsl(289, 100%, 82%)",bgColor:"hsl(289, 100%, 82%, 0.3)",image:"/UXID.svg",resources:[{title:"UX Crash Course",content:"A crash course on what User Experience Design is about, basic design principles and the design process",thumbnail:"https://www.youtube.com/embed/_lyzy-vChh4",type:i.VIDEO},{title:"DesignBytes: Intro to Material Design",content:"Design systems make our experience of using apps and websites more consistent.  When designing Android apps, we want to make the apps on an Android device more coherent \u2014 Material Design is a design system by Google that lays out design principles for you to follow when developing for their platforms. ",thumbnail:"https://www.youtube.com/embed/p4gmvHyuZzw",type:i.VIDEO},{title:"material.io",content:"A resource website containing guidelines for Google's material design principles. Following these guidelines will enable you to make a more professional looking UI and provide a better UX for you application.",thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/953179627784917022/eec66db1fc167b50a8e21692fcd38286.png",imageUrl:"https://material.io/design",type:i.IMAGE}],advanced:[""],software:[{name:"Adobe XD",icon:"/SoftwareIcons/AdobeXD.svg",url:"https://www.adobe.com/products/xd.html"}]},{name:"Logic and Mathematics",tagline:"Learn about Discrete Mathematics",abbreviation:"LOMA",description:"This module covers fundamental Mathematical concepts needed for computing. In particular, Discrete Mathematics concepts such as graphs, logic and functions are taught.",color:"hsl(24, 100%, 64%)",bgColor:"hsl(24, 100%, 64%, 0.3)",image:"/LOMA.svg",resources:[{title:"Discrete Mathematics for Computer Science",content:"As the topics covered in LOMA are all related to Discrete Mathematics, here's a short introduction to this branch of Mathematics.",thumbnail:"https://www.youtube.com/embed/q4L-wUF3yig",type:i.VIDEO},{title:"Intro to Graph Theory | Definitions & Ex: 7 Bridges of Konigsberg",content:"An introduction to graph theory \u2014 the first chapter in LOMA. This also links to playlist that nicely explains many of the LOMA chapters. If you are interested, the next 3 videos continue on graph theory as well.",thumbnail:"https://www.youtube.com/embed?v=C7YrMRdLkqo&list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS&index=81",type:i.VIDEO},{title:"How to Predict the Spread of Epidemics | Computational Social Networks",content:"A high level practical application of graph theory \u2014 modelling a social network.",thumbnail:"https://www.youtube.com/embed/uKVQERi83lM",type:i.VIDEO}],advanced:[""],software:[]},{name:"Others",tagline:"Useful miscellaneous resources",abbreviation:"Others",description:"This section contains a list of nice-to-haves for your journey with us!",color:"hsl(0, 100%, 77%)",bgColor:"hsl(0, 100%, 77%, 0.3)",image:"/Others.svg",resources:[{title:"GitHub Student Developer Pack",content:"As a student, you are eligible to register for this programme. Enjoy many deals such as free domain names, free web hosting, free Microsoft Azure credits, free IntelliJ subscription and many more! What are you waiting for? Sign up for a GitHub account and apply for the student developer pack.",thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/952825328462610432/main-background_1.png",resourceLinks:[{title:"Benefits of the GitHub Student Developer Pack",url:"https://education.github.com/pack"},{title:"Sign up here!",url:"https://education.github.com/discount_requests/student_application"}],imageUrl:"https://education.github.com/pack",type:i.IMAGE},{title:"OneDrive",content:"As a student, you are entitled to 5 TB of cloud storage in OneDrive. You\u2019ll never know when your laptop or PC might crash so always put your assignments in the cloud! Just login with your student email and install the OneDrive app.",thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/952819838831722527/034863f0-3f42-11ec-ae75-30d439f4a7f4.png",resourceLinks:[{title:"Sign into OneDrive here!",url:"https://www.microsoft.com/en-sg/microsoft-365/onedrive/online-cloud-storage"}],imageUrl:"https://www.microsoft.com/en-sg/microsoft-365/onedrive/online-cloud-storage",type:i.IMAGE},{title:"Word Counter",content:'A simple word counter that counts the number of words in a text. However, unlike other word counters, it includes a "ignore in-text citation" checkbox which filters out words in brackets (like these) from the word count. Might come in handy when you are writing essays for TPFun subjects ;D',thumbnail:"https://cdn.discordapp.com/attachments/952818890906419230/953289905486852136/unknown.png",imageUrl:"https://wordcounter.tnitish.com/",type:i.IMAGE}],advanced:[""],software:[]}],S=[{pageTitle:"Home",pageUrl:""},{pageTitle:"Resources",pageUrl:"resource"},{pageTitle:"About",pageUrl:"about"}],X=()=>{const t=k(),c=C(),[u,d]=m.exports.useState(c.pathname.split("/")[c.pathname.split("/").length-1]),[n,r]=m.exports.useState("hsl(0, 0%, 0%, 0.05)");return m.exports.useEffect(()=>{d(c.pathname.split("/")[c.pathname.split("/").length-1])},[c]),m.exports.useLayoutEffect(()=>{for(let s=0;s<g.length;s++)if(u===g[s].abbreviation){r(g[s].color);break}else r("hsl(0, 0%, 0%, 0.05)")},[u]),e(l,{bg:n,w:"100%",py:{base:4,lg:5},px:{base:1,lg:4},children:o(w,{justifyContent:{base:"space-between",lg:"flex-start"},children:[e(l,{display:{base:"block",lg:"none"},children:o(T,{preventOverflow:!0,matchWidth:!0,flip:!0,autoSelect:!1,children:[e(z,{as:f,isRound:!0,icon:e(O,{}),"aria-label":"menu-icon",variant:"solid",colorScheme:"transparent",color:"black",fontSize:"2xl"}),e(L,{children:S.map(s=>e(W,{onClick:()=>{t(s.pageUrl)},children:s.pageTitle},s.pageUrl))})]})}),e(p,{src:"/itsig.svg",w:{base:"4.5em",md:"5.5em"},h:"auto"}),e(w,{display:{base:"none",lg:"block"},spacing:5,style:{marginLeft:"3em"},children:S.map(s=>e(G,{fontWeight:u===s.pageUrl?"semibold":"normal",fontSize:"xl",colorScheme:"black",variant:"link",sx:{transition:"all 0.15s ease-out"},onClick:()=>{t(s.pageUrl)},children:s.pageTitle},s.pageUrl))}),e(l,{display:{base:"block",lg:"none"},w:"40px",h:"40px"})]})})},Y=()=>o(A,{children:[e(l,{display:"flex",justifyContent:"center",alignItems:"center",bgColor:"hsl(0, 0%, 0%, 0.05)",borderBottomRadius:"20px",p:5,_before:{content:"''",bgImage:{base:"/itsig-icon.svg",lg:"none"},opacity:"0.2",bgSize:"contain",bgRepeat:"no-repeat",bgPosition:"center",position:{base:"absolute",lg:"relative"},m:2,top:0,left:0,bottom:0,right:0,zIndex:-1},position:"relative",children:o(h,{direction:{base:"column",lg:"row"},justify:{lg:"space-around"},mb:3.5,align:"center",spacing:-20,children:[e(h,{direction:"column",textAlign:{base:"center",lg:"left"},my:{base:"10%",lg:"0"},children:o(l,{children:[e(a,{fontSize:{base:"2xl",md:"4xl",lg:"5xl",xl:"6xl"},fontWeight:"bold",textAlign:{base:"center",lg:"left"},children:"Hello! We\u2019re from the"}),e(a,{fontSize:{base:"2xl",md:"3xl",lg:"4xl",xl:"5xl"},maxW:"25ch",w:"fit-content",fontWeight:"bold",color:"itsig_blue",children:"Information Technology Student Interest Group"})]})}),e(p,{display:{base:"none",lg:"block"},src:"/itsig-icon.svg",w:"25%"})]})}),e(b,{children:o(I,{spacing:6,justify:["center","center"],mt:{base:"5",lg:"10"},px:10,maxW:{base:"75ch",lg:"90ch"},children:[o(l,{children:[e(a,{fontSize:{base:"2xl",lg:"4xl"},mb:2,fontWeight:"bold",children:"What is this website about?"}),o(a,{fontSize:{base:"md",lg:"xl"},children:["We know the transition from secondary school or ITE to Poly can come as a big shock to you in terms of what we learn, so we made this website for",o("span",{style:{color:"hsl(207, 100%, 54%)"},children:[" ","IIT freshmen"," "]})," ","to provide resources for you to view in your free time before school starts so that you have a clearer idea of what to expect in your first semester with us."]})]}),o(l,{children:[e(a,{fontSize:{base:"2xl",lg:"4xl"},mb:2,fontWeight:"bold",children:"Who are we?"}),o(a,{fontSize:{base:"md",lg:"xl"},pt:-4,children:["We are a CCA consisting of students from the"," ",o("span",{style:{color:"hsl(207, 87%, 30%)"},children:[" ","Diploma in Information Technology"]}),". We plan events that improve the student life in our diploma. Such events include technical workshops to introduce new technology, coming up with diploma windbreakers, starting software projects like this website, and many more. Follow us on"," ",e(D,{href:"https://www.instagram.com/itsigtp/",isExternal:!0,style:{background:"linear-gradient(to bottom right, #833ab4, #fd1d1d, #fcb045)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Instagram"})," ","for more updates and we hope you learn a thing or two from our events! :D"]})]})]})})]}),K=t=>{const c=k();return o(l,{borderColor:t.color,borderWidth:3.5,borderRadius:15,boxShadow:`0px 2px 3px ${t.bgColor}`,_hover:{boxShadow:`0px 8px 12px ${t.bgColor}`,cursor:"pointer"},transition:"box-shadow 0.3s ease-out",overflow:"hidden",onClick:()=>{c(`/resource/${t.title}`)},children:[e(b,{bg:t.bgColor,w:"auto",minH:"60%",maxH:"60%",children:e(p,{py:2,src:t.image,boxSize:"125px"})}),o(l,{my:2,px:{base:2,lg:3},children:[e(a,{fontSize:{base:"lg",md:"xl",lg:"2xl"},fontWeight:"bold",children:t.title}),e(a,{fontSize:{base:"xs",md:"sm"},mb:1,children:t.description})]})]})},Z=()=>o(A,{children:[e(l,{display:"flex",justifyContent:"center",alignItems:"center",bgColor:"hsl(0, 0%, 0%, 0.05)",borderBottomRadius:"20px",p:5,_before:{content:"''",bgImage:{base:"/home-icon.svg",lg:"none"},opacity:"0.2",bgSize:"contain",bgRepeat:"no-repeat",bgPosition:"center",position:{base:"absolute",lg:"relative"},m:2,top:0,left:0,bottom:0,right:0,zIndex:-1},position:"relative",children:o(h,{direction:{base:"column",lg:"row"},justify:{lg:"space-around"},mb:3.5,align:"center",spacing:0,children:[o(h,{direction:"column",textAlign:{base:"center",lg:"left"},children:[o(l,{children:[e(a,{fontSize:{base:"3xl",md:"4xl",lg:"4xl",xl:"5xl"},fontWeight:"bold",textAlign:{base:"center",lg:"left"},children:"Welcome to the"}),e(a,{fontSize:{base:"2xl",md:"3xl",lg:"4xl",xl:"5xl"},fontWeight:"bold",color:"iit_blue",children:"School of Informatics & IT"})]}),o(a,{fontSize:{base:"sm",md:"md",lg:"lg"},fontWeight:"semibold",maxW:{lg:"55ch"},children:["This website provides resources to give you a general overview of what to expect for each module so that you might feel better prepared for your first semester with us.",e("br",{}),e("br",{}),"We hope you will find the information that we curated useful!"]})]}),e(p,{display:{base:"none",lg:"block"},src:"/home-icon.svg",w:"35%"})]})}),o(h,{direction:{base:"column",lg:"row"},p:4,mt:{base:2,lg:10},children:[o(h,{direction:"column",spacing:0,mb:2.5,children:[e(a,{fontWeight:"bold",fontSize:{base:"2xl",md:"3xl",lg:"4xl",xl:"5xl"},children:"Year 1"}),e(a,{fontWeight:"semibold",fontSize:{base:"xl",md:"2xl",lg:"3xl",xl:"4xl"},children:"Semester 1 Resources"})]}),e(U,{columns:{base:2,md:3},gap:5,rowGap:7,children:g.map(t=>e(K,{title:t.abbreviation,description:t.tagline,image:t.image,color:t.color,bgColor:t.bgColor},t.abbreviation.toLowerCase()))})]})]}),$=({resource:t,reverse:c})=>{const[u,d]=m.exports.useState(!0);return o(j,{w:"100%",templateColumns:{base:"1",md:"repeat(2, 1fr)"},templateRows:"repeat(auto, 1fr)",autoFlow:"dense",columnGap:10,children:[e(y,{rowSpan:5,mb:{base:3,md:0},order:{base:2,md:1,lg:c?2:1},children:t.type===i.VIDEO?e(P,{ratio:16/9,borderRadius:"xl",overflow:"hidden",boxShadow:"0px 2px 12px hsl(0, 0%, 0%, 25%)",children:e(R,{isLoaded:!u,children:e("iframe",{width:"100%",height:"100%",src:t.thumbnail,allowFullScreen:!0,onLoad:()=>d(!1)})})}):o(l,{position:"relative",children:[e(p,{width:"100%",height:"100%",borderRadius:"xl",objectFit:"cover",boxShadow:"0px 2px 12px hsl(0, 0%, 0%, 25%)",src:t.thumbnail}),e(f,{"aria-label":"image-url-btn",icon:e(B,{}),position:"absolute",bottom:2.5,left:2.5,size:"md",colorScheme:"black",color:"white",bgColor:"hsla(0, 0%, 0%, 0.65)",_hover:{bgColor:"hsla(0, 0%, 0%, 0.75)"},_active:{filter:"brightness(0.65)"},transition:"all 0.35s ease",onClick:()=>window.open(t.imageUrl)})]})}),e(y,{colSpan:1,order:1,children:e(a,{fontWeight:800,fontSize:{base:"2xl",md:"3xl",lg:"4xl"},mb:3,children:t.title})}),e(y,{order:2,children:o(h,{children:[e(a,{fontSize:{base:"md",md:"lg",lg:"xl"},mb:2.5,children:t.content}),t.resourceLinks&&e(a,{fontWeight:"medium",fontSize:{base:"sm",md:"md",lg:"lg"},children:"Relevant Links:"}),t.resourceLinks&&t.resourceLinks.map((n,r)=>e(D,{fontSize:{base:"sm",md:"md",lg:"lg"},href:n.url,color:"blue",isExternal:!0,children:n.title},r))]})})]})},ee=t=>e(v,{label:t.name,placement:"bottom",children:e(f,{"aria-label":`${t.name}-button`,isRound:!0,w:"fit-content",h:"auto",colorScheme:"white",transition:"box-shadow 0.3s ease-out",boxShadow:"0px 2px 3px hsl(0, 0%, 0%, 16%)",_hover:{boxShadow:"0px 4px 8px hsl(0, 0%, 0%, 16%)"},_focus:{boxShadow:"0px 4px 8px hsl(0, 0%, 0%, 16%)"},onClick:()=>{window.open(t.url)},children:e(p,{p:3,src:t.iconPath,boxSize:{base:16,lg:20}})})}),te=()=>{const c=C().pathname.split("/"),u=c[c.length-1],d=g.filter(n=>n.abbreviation.toUpperCase()==u.toUpperCase())[0];return m.exports.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),o(h,{direction:"column",width:"100%",children:[e(l,{bgColor:d.color,py:8,borderBottomRadius:"20px",mb:5,children:e(b,{fontWeight:"bold",fontSize:{base:24,md:36,lg:42},children:e(a,{align:"center",pb:3.5,children:d.name})})}),o(l,{px:3,children:[e(b,{children:o(h,{width:{base:"100%",md:"75%"},textAlign:"center",maxW:"75ch",paddingBottom:5,justify:"center",children:[o(a,{fontWeight:"bold",fontSize:{base:"2xl",lg:"3xl"},children:["What is"," ",o("span",{style:{color:d.color},children:[d.name," "]}),"about?"]}),e(a,{fontSize:{base:"sm",md:"md",lg:"lg"},children:d.description})]})}),e(a,{paddingBottom:3,fontWeight:"bold",textAlign:{base:"center",md:"left"},fontSize:{base:"3xl",md:"3xl",lg:"4xl"},px:{base:2,lg:3},mb:5,children:"Some resources before you start..."}),e(h,{direction:"column",gap:{base:"1.5em",md:"3em"},px:{base:2,lg:3},children:d.resources.map((n,r)=>e($,{resource:n,reverse:r%2!==0},r))})]}),e("br",{}),o(I,{justifyContent:"center",children:[e(a,{fontSize:{base:"md",lg:"xl"},borderBottom:{base:"1.25px solid black",md:"2.25px solid black"},px:"3.5%",fontWeight:"medium",mb:1.5,children:"Software"}),e(w,{spacing:5,children:d.software.length!==0?d.software.map((n,r)=>e(ee,{name:n.name,url:n.url,iconPath:n.icon},r)):e(a,{fontSize:{base:"md",lg:"xl"},children:"Nothing special needed for this :D"})})]})]})},oe=()=>o(l,{minH:"100vh",children:[o(l,{maxW:"1500px",margin:"auto",mb:10,children:[e(X,{}),o(N,{children:[e(x,{path:"/",element:e(Z,{})}),e(x,{path:"/resource/:subject",element:e(te,{})}),e(x,{path:"/about",element:e(Y,{})})]})]}),e(Q,{})]}),ne=V({colors:{iit_blue:"hsl(207, 100%, 54%)",itsig_blue:"hsl(207, 87%, 30%)"},fonts:{heading:'"Poppins", sans-serif',body:'"Poppins", sans-serif'},components:{Button:{baseStyle:{_focus:{boxShadow:"none"}}}}});_.render(e(H.StrictMode,{children:e(F,{children:e(J,{theme:ne,children:e(oe,{})})})}),document.getElementById("root"));
