class Header {
    selectors = {
        root: '[data-js-header]',
        info: '[data-js-info]',
        button: '[data-js-burger-button]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.infoElement = this.rootElement.querySelector(this.selectors.info)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    showMenu = () => {
        this.infoElement.classList.toggle(this.stateClasses.isActive)
        this.buttonElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    bindEvents() {
        this.buttonElement.addEventListener('click',  this.showMenu)
    }
}

export default Header


