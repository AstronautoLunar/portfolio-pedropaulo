const areaProjects = window.document.querySelector("#projects");

const projectsImage = [
	{
		href: "https://desafio-faq-cartao-acordeao.vercel.app",
		src: "./assets/projects/screenshot1.PNG",
		name: "Faq cartão acordeão",
		stacks: [
			{
				name: "html",
				src: "./assets/icons/icon-html.svg",
				alt: "icon html"
			},
			{
				name: "css",
				src: "./assets/icons/icon-css.svg",
				alt: "icon css"
			},
			{
				name: "javascript",
				src: "./assets/icons/icon-javascript.svg",
				alt: "icon javascript"
			},
		]
	},
	{
		href: "https://desafio-profile-card-component-main.vercel.app",
		src: "./assets/projects/screenshot2.PNG",
		name: "Card de perfil ",
		stacks: [
			{
				name: "html",
				src: "./assets/icons/icon-html.svg",
				alt: "icon html"
			},
			{
				name: "css",
				src: "./assets/icons/icon-css.svg",
				alt: "icon css"
			}
		]
	},
	{
		href: "https://desafio-social-proof-section.vercel.app",
		src: "./assets/projects/screenshot3.PNG",
		name: "Seção de prova social",
		stacks: [
			{
				name: "html",
				src: "./assets/icons/icon-html.svg",
				alt: "icon html"
			},
			{
				name: "css",
				src: "./assets/icons/icon-css.svg",
				alt: "icon css"
			}
		]
	},
	{
		href: "https://desafio-article-preview-component.vercel.app",
		src: "./assets/projects/screenshot4.PNG",
		name: "Componente de visualização do artigo",
		stacks: [
			{
				name: "html",
				src: "./assets/icons/icon-html.svg",
				alt: "icon html"
			},
			{
				name: "css",
				src: "./assets/icons/icon-css.svg",
				alt: "icon css"
			},
			{
				name: "javascript",
				src: "./assets/icons/icon-javascript.svg",
				alt: "icon javascript"
			},
		]
	}
];

projectsImage.forEach(project => {
	const { 
		href, 
		src, 
		name, 
		stacks 
	} = project;

	let groupStacks = "";

	stacks.forEach(stack => (
		groupStacks += `
			<img
				title="${stack.name}"
				src="${stack.src}"
				alt="${stack.alt}"
			/>
		` 
	))

	areaProjects.innerHTML += `
		<a 
			class="link" 
			target="_blank" 
			href="${ href }"
		>
			<div 
				class="project-image"
				style="background-image: url(${src});"
			>
				<div class="background-of-project-image">
					<div class="stacks-project-image">
					${groupStacks}
					</div>
					<h2 class="title-project-image">${name}</h2>
				</div>
			</div>
		</a>
	`
})

const projectsImages = window.document.querySelectorAll(".project-image");

projectsImages.forEach(item => {
	item.addEventListener('mouseenter', ({ target }) => {
		const background = target.children[0];

		background.style.opacity = 1;
	}, false);

	item.addEventListener('mouseleave', ({ target }) => {
		const background = target.children[0];

		background.style.opacity = 0;
	}, false);
});