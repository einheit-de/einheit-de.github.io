"use strict";(self.webpackChunkeinheit_website=self.webpackChunkeinheit_website||[]).push([[582],{4485:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(7462),s=n(7294);const r="playButton_sFy8";var a=n(5999),l=n(1045),o=(n(450),n(1262));class d extends s.Component{constructor(e){super(e),this.play=()=>(this.setState({open:!this.state.open}),this.state.open?this.state.instance.pause():this.state.instance.play()),this.changeTheme=e=>{this.theme=e},this.changeGlobalTheme=e=>{this.theme=e.detail;let t={...this.state.options};t.theme=e.detail,this.setState({options:t})},this.state={open:!1,instance:null,options:{audioLists:this.props.playlist,defaultPlayIndex:0,theme:this.theme,autoPlay:!1,defaultPosition:{top:80,right:80},glassBg:!0,remove:!1,showPlayMode:!1,showMediaSession:!0,showDownload:this.props.downloadble,mode:"full",toggleMode:this.props.toggleMode||!1}}}get theme(){if("undefined"!=typeof window)return localStorage.getItem("audioTheme")}set theme(e){"undefined"!=typeof window&&localStorage.setItem("audioTheme",e)}componentDidUpdate(){let e=document.getElementsByClassName("group audio-lists-btn")[0],t=document.getElementsByClassName("group prev-audio")[0],n=document.getElementsByClassName("group next-audio")[0],i=document.getElementsByClassName("img-content img-rotate img-rotate-pause")[0];this.props.showPlaylist?e.style.display="":e.style.display="none",this.props.showPrev?t.style.display="":t.style.display="none",this.props.showNext?n.style.display="":n.style.display="none",this.props.showCover?i.style.display="":i.style.display="none"}render(){return s.createElement(s.Fragment,null,s.createElement("button",{onClick:this.play,className:r},this.state.open?s.createElement(a.Z,{id:"buttonListenStop"},"\u23f8\ufe0f Pausieren"):s.createElement(a.Z,{id:"buttonListen"},"\ud83c\udfa7 Vorlesen")," "),s.createElement(o.Z,null,(()=>(null==this.theme&&(this.theme="auto"),window.addEventListener("themeChange",this.changeGlobalTheme),s.createElement(l.Z,(0,i.Z)({onThemeChange:this.changeTheme,style:{display:this.state.open?"block":"none"},getAudioInstance:e=>{this.state.instance=e},mobileMediaQuery:"(max-width: 0px)"},this.state.options))))))}}},830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,audioList:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(7462),s=(n(7294),n(3905)),r=n(4485);const a={sidebar_position:2},l="Polizei- und Gesetzesreform",o={unversionedId:"platform/justice",id:"platform/justice",title:"Polizei- und Gesetzesreform",description:"Die Polizei und die Gerichte als Diener des Volkes",source:"@site/docs/platform/justice.mdx",sourceDirName:"platform",slug:"/platform/justice",permalink:"/docs/platform/justice",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Einheit durch Gemeinsamkeit",permalink:"/docs/platform/unity"},next:{title:"Rechenschaftspflicht",permalink:"/docs/platform/accountability"}},d={},h=[],u=[{name:"Polizei- und Gesetzesreform",singer:"Mark Bauermeister (einheit-de.github.io)",musicSrc:"/mp3/justice.mp3"}],c={toc:h,audioList:u};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"polizei--und-gesetzesreform"},"Polizei- und Gesetzesreform"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Die Polizei und die Gerichte als Diener des Volkes")),(0,s.kt)(r.Z,{playlist:u,mdxType:"AudioPlayer"}),(0,s.kt)("p",null,"Seit geraumer Zeit versto\xdfen Bund und L\xe4nder gegen die demokratische Grundordnung und umschiffen geschickt die ersten f\xfcnf Artikel des deutschen Grundgesetzes."),(0,s.kt)("p",null,"Dies kann und darf nicht weiter hingenommen werden! Der Schutz des Privaten ist h\xf6chstes Gut und der stetige polizeiliche Eingriff in die Privatsph\xe4re (zehntausende von Razzien j\xe4hrlich) zeugt von einem Versagen der staatlichen Ordnung und erinnert verst\xe4rkt an das Verhalten reaktion\xe4rer Elemente w\xe4hrend der dunkelsten Stunden des 20. Jahrhunderts."),(0,s.kt)("p",null,"Zu allem \xdcbel versto\xdfen Polizei und Gerichte dabei gegen die grundlegendsten Prinzipien eines Rechtsstaats.",(0,s.kt)("br",null),"\nNamentlich, Verh\xe4ltnism\xe4\xdfigkeit und Schutz des Beschuldigten gegen WIllk\xfcr (mehr hierzu: ",(0,s.kt)("a",{parentName:"p",href:"/blog/injustice"},"Blog Post"),")"),(0,s.kt)("p",null,"Kann man tats\xe4chlich von einem Rechtsstaat sprechen, wenn staatliche Organe bei der Verfolgung angeblicher, noch nicht einmal best\xe4tigter, Straftaten mehr materiellen und psychologischen Schaden anrichten, als dem Verd\xe4chtigen selbst vorgeworfen werden? Kann einem Kriminalbeamten die kontinuierliche Untersuchung von Sachf\xe4llen zugetraut werden, wenn dieser sich bereits bei der urspr\xfcnglichen Durchsuchung von Personen und R\xe4umlichkeiten auff\xe4llig und nachweislich rechtswidrig verhalten hat?"),(0,s.kt)("p",null,'Abschlie\xdfend ist auch fraglich, inwiefern sich unser derzeitiges Rechtssystem tats\xe4chlich mit einem demokratischen Rechtsstaat vereinbaren l\xe4sst. Ein Gericht ohne Beteiligung des Volkes kann nicht sinngem\xe4\xdf "Im Namen des Volkes" handeln. Vielmals zeigt sich dies bereits vor dem eigentlichen Richterspruch, bereits daran dass es \xfcberhaupt erst zu einem Verfahren kommt, in F\xe4llen dessen Verfolgung von der breiten Masse des Volkes wohl keineswegs unterst\xfctzt werden w\xfcrde.'),(0,s.kt)("admonition",{title:"\u200e",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},'Wir fordern die Abschaffung des derzeitigen, w\xe4hrend der Zeit des National Sozialismus entstandenen, "Volksgericht" Systems und die Re-etablierung traditioneller Schwurgerichte in dem unbefangene Geschworene aus allen Teilen der Bev\xf6lkerung Anteil an der Rechtsfindung haben!'),(0,s.kt)("p",{parentName:"admonition"},"Ebenfalls fordern wir die Einf\xfchrung des Grundsatzes der ",(0,s.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Fr%C3%BCchte_des_vergifteten_Baumes"},(0,s.kt)("strong",{parentName:"a"},"Fr\xfcchte des vergifteten Baumes")),", um Polizeikorruption zu bek\xe4mpfen und allgemeine rechtliche Willk\xfcr zu verhindern. Wenn bereits Sach- und Beweismittel unter falschen und rechtswidrigen Umst\xe4nden beschafft wurden, muss den zust\xe4ndigen Beamten leider unterstellt werden, dass diese auch Beweise f\xe4lschen k\xf6nnten."),(0,s.kt)("p",{parentName:"admonition"},'Im Allgemeinen sollte, bei der Rechtsfindung, auch an erster Stelle die Grundsatzfrage "Heiligt das Ergebnis die Mittel?" gesetzt werden.'),(0,s.kt)("p",{parentName:"admonition"},"Verh\xe4ltnism\xe4\xdfigkeit, Unkorrumpierbarkeit und Demokratisierung sollten der Grundstein eines Rechtsstaats sein.",(0,s.kt)("br",null),"\nNur so ist eine faire Rechtssprechung im Sinne des Volkes und eine rechtliche Gleichheit aller B\xfcrger gesichert.")))}m.isMDXComponent=!0}}]);