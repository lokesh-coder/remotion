(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(134)),i={id:"parametrized-rendering",title:"Parametrized rendering"},p={unversionedId:"parametrized-rendering",id:"parametrized-rendering",isDocsHomePage:!1,title:"Parametrized rendering",description:"Parametrized rendering is the idea of creating a video template once and then render as many videos as you want with different parameters. Just like in regular React, we use props to reuse and customize components!",source:"@site/docs/parametrized-rendering.md",slug:"/parametrized-rendering",permalink:"/docs/parametrized-rendering",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/parametrized-rendering.md",version:"current",sidebar:"someSidebar",previous:{title:"Data fetching",permalink:"/docs/data-fetching"},next:{title:"Server-Side Rendering",permalink:"/docs/ssr"}},s=[{value:"Defining accepted props and default values",id:"defining-accepted-props-and-default-values",children:[]},{value:"Passing props in the CLI",id:"passing-props-in-the-cli",children:[]},{value:"Passing props when server rendering",id:"passing-props-when-server-rendering",children:[]},{value:"Passing props in GitHub Actions",id:"passing-props-in-github-actions",children:[]},{value:"You can still use components as normal",id:"you-can-still-use-components-as-normal",children:[]}],c={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Parametrized rendering is the idea of creating a video template once and then render as many videos as you want with different parameters. Just like in regular React, we use props to reuse and customize components!"),Object(o.b)("h2",{id:"defining-accepted-props-and-default-values"},"Defining accepted props and default values"),Object(o.b)("p",null,"To define which props your video accepts, simply give your component the ",Object(o.b)("inlineCode",{parentName:"p"},"React.FC")," type and pass in a generic argument describing the shape of the props you want to accept."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{2-3}","{2-3}":!0}),"export const MyComponent: React.FC<{\n  propOne: string;\n  propTwo: number;\n}> = ({propOne, propTwo}) => {\n  return (\n    <div>props: {propOne}, {propTwo}</div>\n  );\n}\n")),Object(o.b)("p",null,"When registering the component as a sequence, you can define the default props:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{13-16}","{13-16}":!0}),"import {Sequence} from 'remotion';\nimport {MyComponent} from './MyComponent';\n\nexport const Root = () => {\n  return (\n    <>\n      <Sequence\n        id=\"my-video\"\n        width={1080}\n        height={1080}\n        fps={30}\n        component={MyComponent}\n        defaultProps={{\n          propOne: 'Hi',\n          propTwo: 10\n        }}\n      />\n    </>\n  )\n}\n")),Object(o.b)("p",null,"By using ",Object(o.b)("inlineCode",{parentName:"p"},"React.FC"),", you can ensure type safety and avoid errors caused by typos."),Object(o.b)("h2",{id:"passing-props-in-the-cli"},"Passing props in the CLI"),Object(o.b)("p",null,"When rendering (for example using the ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," script defined in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"), you can override some or all default props by passing a CLI flag. It must be valid JSON, pay attention to quote escaping. Using this technique, no type safety can be guaranteed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'npx remotion render src/index.tsx HelloWorld helloworld.mp4 --props=\'{"propOne": "Hi", "propTwo": 10}\'\n')),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/cli"}),"See also: CLI flags")),Object(o.b)("h2",{id:"passing-props-when-server-rendering"},"Passing props when server rendering"),Object(o.b)("p",null,"When server-rendering using ",Object(o.b)("inlineCode",{parentName:"p"},"renderFrames"),", you can pass props using the ",Object(o.b)("inlineCode",{parentName:"p"},"userProps")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{8-10}","{8-10}":!0}),"await renderFrames({\n  config: video,\n  webpackBundle: bundled,\n  onStart: () => void 0,\n  onFrameUpdate: (f) => void 0,\n  parallelism: null,\n  outputDir: framesDir,\n  userProps: {\n    titleText: 'Hello World'\n  },\n  compositionId: 'HelloWorld',\n  imageFormat: 'jpeg'\n});\n")),Object(o.b)("h2",{id:"passing-props-in-github-actions"},"Passing props in GitHub Actions"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/ssr#render-using-github-actions"}),"See: Render using GitHub Actions")),Object(o.b)("p",null,"When using GitHub Actions, you need to adjust the file at ",Object(o.b)("inlineCode",{parentName:"p"},".github/workflows/render-video.yml")," to make the inputs in the ",Object(o.b)("inlineCode",{parentName:"p"},"workflow_dispatch")," section manually match the shape of the props your root component accepts."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml",metastring:"{3,7}","{3,7}":!0}),'workflow_dispatch:\n  inputs:\n    titleText:\n      description: "Which text should it say?"\n      required: true\n      default: "Welcome to Remotion"\n    titleColor:\n      description: "Which color should it be in?"\n      required: true\n      default: "black"\n')),Object(o.b)("h2",{id:"you-can-still-use-components-as-normal"},"You can still use components as normal"),Object(o.b)("p",null,"Even if you have registered a component as a sequence,\nyou can still use it as normal in your videos and pass it's props directly. Default props don't apply in this case."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'<MyComponent propOne="hi" propTwo={10} />\n')))}l.isMDXComponent=!0},134:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.a.createElement(b,p(p({ref:n},c),{},{components:t})):a.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);