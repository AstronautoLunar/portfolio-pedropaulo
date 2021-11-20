const areaStacks = window.document.querySelector("#stacks");

const stacks = [
	{
		name: "html",
		src: "./assets/icons/icon-html.svg",
		alt: "icon html",
		href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
	},
	{
		name: "css",
		src: "./assets/icons/icon-css.svg",
		alt: "icon css",
		href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS"
	},
	{
		name: "javascript",
		src: "./assets/icons/icon-javascript.svg",
		alt: "icon javascript",
		href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
	},
	{
		name: "typescript",
		src: "./assets/icons/icon-typescript.svg",
		alt: "icon typescript",
		href: "https://www.typescriptlang.org"
	},
	{
		name: "react.js",
		src: "./assets/icons/icon-react.svg",
		alt: "icon react js",
		href: "https://pt-br.reactjs.org"
	},
	{
		name: "vue.js",
		src: "./assets/icons/icon-vue.svg",
		alt: "icon vue js",
		href: "https://vuejs.org"
	},
	{
		name: "electron.js",
		src: "./assets/icons/icon-electron.svg",
		alt: "icon electron js",
		href: "https://www.electronjs.org"
	},
	{
		name: "webpack.js",
		src: "./assets/icons/icon-webpack.svg",
		alt: "icon webpack js",
		href: "https://webpack.js.org"
	},
	{
		name: "gulp.js",
		src: "./assets/icons/icon-gulp.svg",
		alt: "icon gulp js",
		href: "https://gulpjs.com"
	},
];

stacks.forEach(stack => {
	const { 
		src, 
		alt, 
		href, 
		name 
	} = stack;

	areaStacks.innerHTML += `
		<figure title="${ name }">
			<a href="${ href }" target="_blank">
				<img 
					class="stack-image"
					src="${ src }" 
					alt="${ alt }"
				/>
			</a
		</figure>
	`
})