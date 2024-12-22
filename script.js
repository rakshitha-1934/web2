// Example of a simple interactivity: Scroll to the top of the page
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "Back to Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px 15px";
    backToTopButton.style.fontSize = "16px";
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});