"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1226],{57522:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var n=t(29901);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){return function(a){var t=p(a.components);return n.createElement(e,i({},a,{components:t}))}},p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=p(t),c=r,N=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return t?n.createElement(N,o(o({ref:a},l),{},{components:t})):n.createElement(N,o({ref:a},l))}));function x(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,d=new Array(i);d[0]=N;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},73199:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=t(3920),r=t(50264),i=(t(29901),t(57522)),d=["components"],o={title:"getAudioData()",id:"get-audio-data"},m=void 0,l={unversionedId:"get-audio-data",id:"get-audio-data",isDocsHomePage:!1,title:"getAudioData()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/get-audio-data.md",sourceDirName:".",slug:"/get-audio-data",permalink:"/docs/get-audio-data",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-audio-data.md",tags:[],version:"current",frontMatter:{title:"getAudioData()",id:"get-audio-data"},sidebar:"someSidebar",previous:{title:"API - @remotion/gif",permalink:"/docs/gif"},next:{title:"getAudioDuration()",permalink:"/docs/get-audio-duration"}},s=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[],level:3}],level:2},{value:"Return value",id:"return-value",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Caching behavior",id:"caching-behavior",children:[],level:2},{value:"Alternatives",id:"alternatives",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],p={toc:s};function c(e){var a=e.components,t=(0,r.default)(e,d);return(0,i.mdx)("wrapper",(0,n.default)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Part of the ",(0,i.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,i.mdx)("p",null,"Takes an audio ",(0,i.mdx)("inlineCode",{parentName:"p"},"src"),", loads it and returns data and metadata for the specified source."),(0,i.mdx)("h2",{id:"arguments"},"Arguments"),(0,i.mdx)("h3",{id:"src"},(0,i.mdx)("inlineCode",{parentName:"h3"},"src")),(0,i.mdx)("p",null,"A string pointing to an audio asset."),(0,i.mdx)("h2",{id:"return-value"},"Return value"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Promise<AudioData>")," - object with information about the audio data:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"channelWaveforms"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"Float32Array[]")," an array with waveform information for each channel."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sampleRate"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," How many samples per second each waveform contains."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"durationInSeconds"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," The duration of the audio in seconds."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"numberOfChannels"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"number")," The number of channels contained in the audio file. This corresponds to the length of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"channelWaveforms")," array."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"resultId"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"string")," Unique identifier of this audio data fetching call. Other functions can cache expensive operations if they get called with the same resultId multiple times."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"isRemote"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"boolean")," Whether the audio was imported locally or from a different origin.")),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("div",{className:"shiki-twoslash-fragment"},(0,i.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getAudioData: (src: string) => Promise<AudioData>\nimport getAudioData"},"getAudioData")," } "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"@remotion/media-utils"'),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const music: string\nimport music"},"music")," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"./music.mp3"'),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,i.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData")),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const music: string\nimport music"},"music"),"); "),(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  channelWaveforms: [Float32Array(4410000), Float32Array(4410000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  sampleRate: 44100,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  numberOfChannels: 2,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},'  resultId: "0.432878981",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  isRemote: false")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"} */")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData")),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,i.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"https://example.com/remote-audio.aac"'),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"); "),(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  channelWaveforms: [Float32Array(4800000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  sampleRate: 48000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  numberOfChannels: 1,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},'  resultId: "0.432324444",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"  isRemote: true")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"} */"))))),(0,i.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getAudioData: (src: string) => Promise<AudioData>\nimport getAudioData"},"getAudioData")," } "),(0,i.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"@remotion/media-utils"'),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const music: string\nimport music"},"music")," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"./music.mp3"'),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,i.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData")),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"(",(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const music: string\nimport music"},"music"),"); "),(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  channelWaveforms: [Float32Array(4410000), Float32Array(4410000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  sampleRate: 44100,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  numberOfChannels: 2,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},'  resultId: "0.432878981",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  isRemote: false")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"} */")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"await"),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,i.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData")),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"("),(0,i.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"https://example.com/remote-audio.aac"'),(0,i.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"); "),(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"/* {")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  channelWaveforms: [Float32Array(4800000)],")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  sampleRate: 48000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  durationInSeconds: 100.0000,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  numberOfChannels: 1,")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},'  resultId: "0.432324444",')),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"  isRemote: true")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"} */")))))),(0,i.mdx)("h2",{id:"caching-behavior"},"Caching behavior"),(0,i.mdx)("p",null,"This function is memoizing the results it returns.\nIf you pass in the same argument to ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," multiple times, it will return a cached version from the second time on, regardless of if the file has changed. To clear the cache, you have to reload the page."),(0,i.mdx)("h2",{id:"alternatives"},"Alternatives"),(0,i.mdx)("p",null,"If you need only the duration, prefer ",(0,i.mdx)("a",{parentName:"p",href:"/docs/get-audio-duration"},(0,i.mdx)("inlineCode",{parentName:"a"},"getAudioDuration()"))," which is faster because it doesn't need to read waveform data."),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/use-audio-data"},(0,i.mdx)("inlineCode",{parentName:"a"},"useAudioData()"))," helper hook to not have to do state management yourself and to wrap the call in ",(0,i.mdx)("a",{parentName:"p",href:"/docs/delay-render"},(0,i.mdx)("inlineCode",{parentName:"a"},"delayRender()")),"."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/using-audio"},"Using audio")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Audio/>"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/visualize-audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()")))))}c.isMDXComponent=!0}}]);