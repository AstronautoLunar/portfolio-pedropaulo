const areaProjects = window.document.querySelector("#projects");

const projectsImage = [
	{
		href: "https://desafio-faq-cartao-acordeao.vercel.app",
		src: "./assets/projects/screenshot1.PNG",
		alt: "projeto faq-cartao-acordeao"
	},
	{
		href: "https://desafio-profile-card-component-main.vercel.app",
		src: "./assets/projects/screenshot2.PNG",
		alt: "projeto card de perfil "
	},
	{
		href: "https://desafio-social-proof-section.vercel.app",
		src: "./assets/projects/screenshot3.PNG",
		alt: "projeto seção de prova social"
	},
	{
		href: "https://desafio-article-preview-component.vercel.app",
		src: "./assets/projects/screenshot4.PNG",
		alt: "projeto componente de visualização do artigo"
	}
];

projectsImage.forEach(project => {
	const { href, src, alt } = project;

	areaProjects.innerHTML += `
		<a 
			class="link" 
			target="_blank" 
			href="${ href }"
		>
			<figure>
				<img 
					class="project-image" 
					src="${ src }" 
					alt="${ alt }"
				/>
			</figure>
		</a>
	`
})