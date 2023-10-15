document.addEventListener("DOMContentLoaded", () => {
    const readMoreLinks = document.querySelectorAll(".read-more");
    const posts = document.querySelector(".posts");

    readMoreLinks.forEach((readMoreLink) => {
        readMoreLink.addEventListener("click", (event) => {
            event.preventDefault();
            const post = event.target.parentElement;
            const content = post.querySelector("p");

            if (content.classList.contains("expanded")) {
                content.classList.remove("expanded");
                readMoreLink.textContent = "Read More";
            } else {
                content.classList.add("expanded");
                readMoreLink.textContent = "Read Less";
            }
        });
    });
});