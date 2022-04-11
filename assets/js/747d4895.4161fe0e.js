"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1815],{1434:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){return a.createElement("div",{className:"col col--"+e.colsize},a.createElement("h1",{className:"section-title"+(e.promptsign?" with-before":"")},e.title))}},1260:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),i=n(9750);function l(e){return a.createElement("div",{className:"section-image-box__row row "},a.createElement("div",{className:"section-image-box__row-text col col--1 left-margin-stub"}),a.createElement("div",{className:"section-image-box__row-text col col--5 "},a.createElement("div",{className:"section-image-box__row-text-wrapper"},a.createElement("h3",null,e.title),a.createElement("div",{className:"content"},e.children))),a.createElement("div",{className:"section-image-box__row-image col col--6 "},a.createElement("div",{className:"section-image-box__row-image-wrapper"},e.image?a.createElement("div",{className:"green_border"},a.createElement(i.Z,{alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})):"")),a.createElement("div",{className:"section-image-box__row-text col col--1 right-margin-stub"}))}},9882:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){return a.createElement("section",{className:"section "+e.className},e.children)}},2758:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),i=n(9882),l=n(3352),r=n(604),o=n(2582),s=n(1434);function c(e){return a.createElement(o.Z,{title:e.title,description:e.description,key:e.title},a.createElement("div",{className:"container content"},a.createElement(l.Z,{image:e.image,title:e.headline},e.children),a.createElement(s.Z,{title:e.title,colsize:"12",promptsign:!0}),a.createElement(i.Z,{className:"section-image-box"},(0,r.Z)().filter((function(t){return t.props[e.id]})))))}},3352:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(9882),l=n(9750);function r(e){return a.createElement(i.Z,{className:"section-yellow-banner"},a.createElement("div",{className:"row row--align-center"},a.createElement("div",{className:"col col--6"},a.createElement("h1",null,e.title),a.createElement("div",{className:"description"},e.children)),a.createElement("div",{className:"col col--6"},a.createElement("div",{className:"image-wrapper"},a.createElement(l.Z,{className:"image",alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})))))}},604:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(1260),l=[a.createElement(i.Z,{image:"gifs/versions.gif",title:"Scala versions, dependencies and JVMs",key:"versions",projects:"true"},a.createElement("p",null,"Scala CLI is built on top of coursier",a.createElement("br",null),"This allow us to manage Scala versions, dependencies and JVMs so you can test your code in different environments by changing single option."),a.createElement("p",null,"Scala CLI ships with all its dependencies",a.createElement("br",null),"No need to fluff with installing JVM or setting up PATH."),a.createElement("p",null,a.createElement("i",null,"Some additional setup may be required for ",a.createElement("a",{href:"/install#scala-js"},"JS")," and ",a.createElement("a",{href:"/install#scala-native"},"Native")))),a.createElement(i.Z,{image:"gifs/universal_tool.gif",title:"Universal tool",key:"universal",projects:"true"},a.createElement("p",null,"If you want to use older ",a.createElement("b",null,"version of Scala")," or run your code in ",a.createElement("b",null,"JS")," or ",a.createElement("b",null,"Native")," environments we've got you covered.",a.createElement("br",null)),a.createElement("p",null,"Switching between platforms or Scala versions is as easy as changing a parameter."),a.createElement("p",null," ",a.createElement("i",null,"Some additional setup may be required for ",a.createElement("a",{href:"/install#scala-js"},"JS")," and ",a.createElement("a",{href:"/install#scala-native"},"Native")))),a.createElement(i.Z,{image:"buildtools.png",title:"We do not call Scala CLI a build tool",key:"buildtool",projects:"true"},a.createElement("p",null,"Scala CLI shares some similarities with build tools, but doesn't aim at supporting multi-module projects, nor to be extended via a task system known from sbt, mill or bazel."),a.createElement("p",null,"Scala ecosystem has multiple amazing build tools, there is no need to create another multipurpose build tool.")),a.createElement(i.Z,{image:"gifs/complete-install.gif",title:"Complete installation",key:"complete-install",education:"true"},a.createElement("p",null,"Scala CLI comes with batteries included. No additional installation is required, no more fluffing with setting up the correct Java version or ",a.createElement("code",null,"PATH")),a.createElement("p",null,"Scala CLI manages JVMs, Scala and other used tools under the hood.")),a.createElement(i.Z,{image:"gifs/defaults.gif",title:"Solid defaults",key:"defaults",education:"true"},a.createElement("p",null,"No additional configuration is needed to most Scala CLI commands."),a.createElement("p",null,"Scala CLI is configured out of the box to use the latest stable versions and other commands such as formatter or compiler contain reasonable defaults.")),a.createElement(i.Z,{image:"gifs/learning_curve.gif",title:"No learning curve",key:"curve",education:"true"},a.createElement("p",null,"Scala CLI does not use complex configuration language, its options are simple and self-explanatory"),a.createElement("p",null,"There are no big differences in running repl or .scala files so expanding the results of repl session into a small project does not require learning new concepts from Scala CLI perspective")),a.createElement(i.Z,{image:"gifs/powerful_scripts.gif",title:"Scripts are as powerful as other programs",key:"scripts-as-apps",scripting:"true"},a.createElement("p",null,"Scripts in Scala CLI can use dependencies and other features as standard Scala programs. Scala CLI is command-line first giving access to all its features without need for any configuration file or specific project structure.")),a.createElement(i.Z,{image:"gifs/embeddable_scripts.gif",title:"Embeddable Scripts",key:"embed-scripts",scripting:"true"},a.createElement("p",null,"Scala CLI can be set up in shebang lines, making your *.scala or *.sc files runnable"),a.createElement("p",null,"Scala CLI supports piping inputs and is designed to be embeddable in other scripts, turning Scala into proper scripting language")),a.createElement(i.Z,{image:"gifs/self-contained-examples.gif",title:"Self-contained examples",key:"self-contained-examples",prototyping:"true"},a.createElement("p",null,"With Scala CLI, configuration can be included in source code so complex examples can be self-contained and shipped as e.g. gist. Moreover, Scala CLI can compile, run and test gists without any manual work!"),a.createElement("p",null,"Scala CLI is a perfect tool to submit and reproduce bugs"))];function r(){return l}},6133:function(e,t,n){n.r(t);var a=n(7294),i=n(2758);t.default=function(e){return a.createElement(i.Z,{title:"Prototyping, experimenting, reproducing bugs with Scala CLI",description:"Page describing why Scala CLI is good for prototyping / experimenting / reproducing bugs.",headline:"Move fast and break things but be in control of your build",image:"gifs/prototyping.gif",id:"prototyping"},a.createElement("p",null,"If you ever waste time prototyping, experimenting or reproducing a nasty bug by testing different environment then you intendted?"),a.createElement("p",null,"With Scala CLI defining Scala or JVM versions, platform, compiler options and dependencies is setting an argument."))}}}]);