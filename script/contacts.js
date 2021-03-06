const areaContacts = window.document.querySelector("#contacts");

const contacts = [
    {
        name: "linkedin",
        src: "./assets/icons/icon-linkedin.svg",
        alt: "icon linkedin",
        href: "https://www.linkedin.com/in/pedro-paulo-082b82201/"
    },
    {
        name: "github",
        src: "./assets/icons/icon-github.svg",
        alt: "icon github",
        href: "https://github.com/Pyedrown"
    },
]

contacts.forEach(contact => {
    const { 
        name, 
        src, 
        alt,
        href
    } = contact;

    areaContacts.innerHTML += `
        <a href="${ href }" target="_blank">
            <img
                class="social-media"
                title="${ name }"
                src="${ src }"
                alt="${ alt }"
            />
        </a>
    `
})