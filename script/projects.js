const areaProjects = window.document.querySelector("#projects");

const projectsImage = [
	{
		href: "https://desafio-faq-cartao-acordeao.vercel.app",
		src: "./assets/projects/screenshot1.PNG",
		name: "Faq cartão acordeão",
		description: "Basicamente um site que exibe um cartão de perguntas e respostas",
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
		description: "Esse mostra na tela uma card que mostra o perfil do cliente",
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
		description: "Esse faz uma demonstração da qualidade do produto mostrando uma seção de comentários",
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
		description: "Esse é um card de visualização do produto",
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
		href: "https://insure-landing-page-vue.vercel.app",
		src: "./assets/projects/screenshot5.PNG",
		name: "Insure Landing Page",
		description: "Esse é uma landing page simples da marca insure",
		stacks: [
			{
				name: "vue.js",
				src: "./assets/icons/icon-vue.svg",
				alt: "icon vue.js"
			}
		]
	},
];

projectsImage.forEach(project => {
	const { 
		href, 
		src, 
		name,
		description,
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
		<div 
			class="project-image"
			style="background-image: url(${src});"
		>
			<div class="background-of-project-image">
				<h2 class="title-project-image">${name}</h2>
				<span class="description">
					${description}
				</span>
				<div class="stacks-and-buttons">
					<div class="stacks-project-image">
					${groupStacks}
					</div>
					<a class="button-link-project" href="${href}" target="_blank">
						Conhecer
					</a>
				</div>
			</div>
		</div>
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

areaProjects.addEventListener("wheel", (event) => {
	event.preventDefault();

	areaProjects.scrollLeft += event.deltaY * 3;
});