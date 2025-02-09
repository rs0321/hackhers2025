document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-button");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("href");
            loadPage(page);
        });
    });
});

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => console.error("Error loading page:", error));
}
