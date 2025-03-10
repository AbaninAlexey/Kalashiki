class Top {
    selectors = {
        root: '[data-js-header]',
        topButton: '[data-js-top-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.topButton = this.rootElement.querySelector(this.selectors.topButton)
        this.bindEvents()
    }

    bindEvents() {
        document.addEventListener('scroll', this.showTopButton)
    }

    showTopButton = () => {
        if (window.scrollY > 300) {
            this.topButton.classList.add(this.stateClasses.isActive) 
        } else {
            this.topButton.classList.remove(this.stateClasses.isActive) 
        }
    
    }
}

export default Top