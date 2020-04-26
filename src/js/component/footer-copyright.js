class FooterCopy extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <div class="copyright">
            &copy; 2020 Pirmansyah
        </div>
        `;
    }
}

customElements.define('footer-copyright', FooterCopy);