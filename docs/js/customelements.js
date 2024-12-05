class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", Year);


if (window.location.href === "https://tahahayat962.github.io/Assignment3/") 
    alert("Welcome to my portfolio!");
    
