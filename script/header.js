const listNavBar = window.document.querySelector("#list-navBar");

const itemsNavBar = [
	{
		name: "Home",
		href: "#info-developer"
	},
	{
		name: "Projetos",
		href: "#projects-developer"
	},
	{
		name: "Tecnologias",
		href: "#stacks-developer"
	},
	{
		name: "Contato",
		href: "#footer"
	}
];

itemsNavBar.forEach(item => {
	listNavBar.innerHTML += `
		<li class="item">
			<a 
				class="link"
				href="${ item.href }"
			>
				${ item.name }
			</a>
			<div data-name="${ item.name }" class="line"></div>
		</li>
	`
})

const itemsTags = window.document.querySelectorAll("#list-navBar > .item")
const lines = window.document.querySelectorAll(".line");

const stylesLines = [
	{
		property: "width",
		value: "0"
	},
	{
		property: "height",
		value: "5px"
	},
	{
		property: "backgroundColor",
		value: "var(--onyx)"
	},
	{
		property: "opacity",
		value: "0"
	}
]

lines.forEach((line, index) => {
	stylesLines.forEach(styleLine => {
		const { property, value } = styleLine;

		line.style[ property ] = value;
	});
});

itemsTags.forEach((itemTag, index) => {
	itemTag.addEventListener('mouseenter', () => {
		lines[index].style.width = "100%";
		lines[index].style.opacity = 1;
	}, false);

	itemTag.addEventListener('mouseleave', () => {
		lines[index].style.width = "0";
		lines[index].style.opacity = 0;
	}, false);
});

