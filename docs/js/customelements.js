class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", Year);

if (window.location.href === "https://fictional-space-doodle-pjpjggprgw5w36gvx-5500.app.github.dev/docs/index.html") 
alert("Welcome to my portfolio!");
