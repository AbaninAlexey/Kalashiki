class Header {
    selectors = {
        root: '[data-js-header]',
        info: '[data-js-info]',
        button: '[data-js-burger-button]',
        overlay: '[data-js-overlay]'
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.infoElement = this.rootElement.querySelector(this.selectors.info)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.bindEvents()
    }

    showMenu = () => {
        this.infoElement.classList.toggle(this.stateClasses.isActive)
        this.buttonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    // clickOnBg = () => {
    //     document.addEventListener( 'click',  (e) => {
    //         if (!this.infoElement) return
    //         this.infoElement.classList.remove(this.stateClasses.isActive)
    //         this.buttonElement.classList.remove(this.stateClasses.isActive)
    //     })
    // }

    bindEvents() {
        // this.buttonElement.addEventListener('click',  this.showMenu)
        document.addEventListener('click', (e) => {
            if (e.target !== this.buttonElement && e.target !== this.overlayElement) return
            this.showMenu()
        })
    }
}

export default Header


