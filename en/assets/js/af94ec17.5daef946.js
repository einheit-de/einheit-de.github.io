"use strict";(self.webpackChunkeinheit_website=self.webpackChunkeinheit_website||[]).push([[99],{1780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,audioList:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>p,toc:()=>f});var i=n(7462),o=n(7294),a=n(3905);const s="playButton_sFy8";var r=n(5999),l=n(1045),c=(n(450),n(1262));class d extends o.Component{constructor(e){super(e),this.play=()=>(this.setState({open:!this.state.open}),this.state.open?this.state.instance.pause():this.state.instance.play()),this.changeTheme=e=>{this.theme=e},this.changeGlobalTheme=e=>{this.theme=e.detail;let t={...this.state.options};t.theme=e.detail,this.setState({options:t})},this.state={open:!1,instance:null,options:{audioLists:this.props.playlist,defaultPlayIndex:0,theme:this.theme,autoPlay:!1,defaultPosition:{top:80,right:80},glassBg:!0,remove:!1,showPlayMode:!1,showMediaSession:!0,showDownload:this.props.downloadble,mode:"full",toggleMode:this.props.toggleMode||!1}}}get theme(){if("undefined"!=typeof window)return localStorage.getItem("audioTheme")}set theme(e){"undefined"!=typeof window&&localStorage.setItem("audioTheme",e)}componentDidUpdate(){let e=document.getElementsByClassName("group audio-lists-btn")[0],t=document.getElementsByClassName("group prev-audio")[0],n=document.getElementsByClassName("group next-audio")[0],i=document.getElementsByClassName("img-content img-rotate img-rotate-pause")[0];this.props.showPlaylist?e.style.display="":e.style.display="none",this.props.showPrev?t.style.display="":t.style.display="none",this.props.showNext?n.style.display="":n.style.display="none",this.props.showCover?i.style.display="":i.style.display="none"}render(){return o.createElement(o.Fragment,null,o.createElement("button",{onClick:this.play,className:s},this.state.open?o.createElement(r.Z,{id:"buttonListenStop"},"\u23f8\ufe0f Pausieren"):o.createElement(r.Z,{id:"buttonListen"},"\ud83c\udfa7 Vorlesen")," "),o.createElement(c.Z,null,(()=>(null==this.theme&&(this.theme="auto"),window.addEventListener("themeChange",this.changeGlobalTheme),o.createElement(l.Z,(0,i.Z)({onThemeChange:this.changeTheme,style:{display:this.state.open?"block":"none"},getAudioInstance:e=>{this.state.instance=e},mobileMediaQuery:"(max-width: 0px)"},this.state.options))))))}}const h={sidebar_position:2},u="Police and Justice Reform",p={unversionedId:"platform/justice",id:"platform/justice",title:"Police and Justice Reform",description:"Police and courts as servants of the People",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/justice.mdx",sourceDirName:"platform",slug:"/platform/justice",permalink:"/en/docs/platform/justice",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Unity through Community",permalink:"/en/docs/platform/unity"}},m={},f=[],y=[{name:"Police and Justice Reform",singer:"Mark Bauermeister (einheit-de.github.io)",musicSrc:"/mp3/en/justice.mp3"}],g={toc:f,audioList:y};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"police-and-justice-reform"},"Police and Justice Reform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Police and courts as servants of the People")),(0,a.kt)(d,{playlist:y,mdxType:"AudioPlayer"}),(0,a.kt)("p",null,"For quite some time, the German federal government and the state governments have been violating the basic democratic order by cleverly circumventing the first five articles of German Basic Law."),(0,a.kt)("p",null,"Frankly, this cannot and must not be accepted any longer! The protection of privacy is paramount, and the constant police encroachment on the lives of private citizens (tens of thousands of raids every year) is testament to the failure of the current government to keep order, just as it is reminiscent of the behavior of reactionary elements during the darkest hours of the 20th century."),(0,a.kt)("p",null,"To make matters worse, police and courts are violating the most fundamental principles of a Constitutional Republic.",(0,a.kt)("br",null),"\nNamely, proportionality and protection of the accused against arbitrary prosecution (More on this: ",(0,a.kt)("a",{parentName:"p",href:"/blog/injustice"},"Blog Post"),")"),(0,a.kt)("p",null,"Can we still consider Germany a country of law and justice when governmental entities, during the investigation of merely alleged crimes, inflict more material and psychological harm than the suspect themself stands accused of?",(0,a.kt)("br",null),"\nCan detectives be entrusted with an ongoing investigation when their behavior during the original search of persons and property was already conspicuous and demonstrably unlawful?"),(0,a.kt)("p",null,'Finally, it is also questionable to what extent our current legal system can be reconciled with a democratic constitutional state. A court without the participation of the People cannot act "In the Name of the People".\nThis is often evident even before the actual judge\'s verdict, presented by the fact that court proceedings come about in the first place, in cases that are hardly in the public interest and would not be supported by the broad mass of citizens.'),(0,a.kt)("admonition",{title:"\u200e",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'We demand the abolition of the current "People\'s Court" system, which emerged during the rise of National Socialism and has since been continued almost unchanged.\nWe demand the re-establishment of trials by jury, in which impartial members of society engage in a fact finding mission and in which the defendant is fairly represented and judged by a jury of their peers.'),(0,a.kt)("p",{parentName:"admonition"},"We also call for the implementation of a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fruit_of_the_poisonous_tree"},(0,a.kt)("strong",{parentName:"a"},"Fruit of the Poisonous Tree"))," doctrine, to combat police corruption and prevent general arbitrariness. If evidence has already been obtained under false and grossly illegal circumstances, additional evidence tampering cannot be ruled out."),(0,a.kt)("p",{parentName:"admonition"},'By the same token "Does the end justify the means?" should be a fundamental question before the inititation of any and all legal procedure.'),(0,a.kt)("p",{parentName:"admonition"},"Proportionality, incorruptibility and democratization of the legal process ought to be the cornerstone of a Constitutional Republic.\nThis is the only way to ensure justice in the interest of the People as well as equality before the law for all citizens.")))}b.isMDXComponent=!0}}]);