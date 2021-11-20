const areaStacks = window.document.querySelector("#stacks");

const stacks = [
	{
		src: "./assets/icons/icon-html.svg",
		alt: "icon html"
	},
	{
		src: "./assets/icons/icon-css.svg",
		alt: "icon css"
	},
	{
		src: "./assets/icons/icon-javascript.svg",
		alt: "icon javascript"
	},
	{
		src: "./assets/icons/icon-typescript.svg",
		alt: "icon typescript"
	},
	{
		src: "./assets/icons/icon-react.svg",
		alt: "icon react js"
	},
	{
		src: "./assets/icons/icon-vue.svg",
		alt: "icon vue js"
	},
	{
		src: "./assets/icons/icon-electron.svg",
		alt: "icon electron js"
	},
	{
		src: "./assets/icons/icon-webpack.svg",
		alt: "icon webpack js"
	},
	{
		src: "./assets/icons/icon-gulp.svg",
		alt: "icon gulp js"
	},
];

stacks.forEach(stack => {
	const { src, alt } = stack;

	areaStacks.innerHTML += `
		<figure>
			<img 
				class="stack-image"
				src="${ src }" 
				alt="${ alt }"
			/>
		</figure>
	`
})