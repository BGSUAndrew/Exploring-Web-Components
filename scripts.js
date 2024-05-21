class MyComponent extends HTMLElement {
    connectedCallback() {
        var now = new Date();
    
       this.textContent = now;
    }
}

customElements.define('my-component', MyComponent);
