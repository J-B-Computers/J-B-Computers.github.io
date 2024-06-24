// load-content.js

document.addEventListener('DOMContentLoaded', function () {
    fetch('data/content.json')
        .then(response => response.json())
        .then(data => {
            loadHeader(data.header);
            loadSidebar(data.sidebar);
            loadFooter(data.footer);
        });
});

function loadHeader(headerData) {
    const header = document.getElementById('header');
    header.innerHTML = `
        <h1 class="header-title">${headerData.title}</h1>
        <nav class="header-nav">
            <ul>
                ${headerData.nav.map(item => `<li><a href="${item.link}" class="${window.location.pathname.includes(item.link) ? 'active' : ''}">${item.text}</a></li>`).join('')}
            </ul>
        </nav>
    `;
}


function loadSidebar(sidebarData) {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = `
        <h2>${sidebarData.title}</h2>
        <p>${sidebarData.content}</p>
    `;
}

function loadFooter(footerData) {
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p>${footerData.text}</p>`;
}