class Gallery {
    selectors = {
        root: '[data-js-section-gallery]',
        imageGallery: '[data-js-image-gallery]',
        image: '[data-js-image]',
        
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
        isHide: 'is-hide',
    }

    imageIndex = 0

    constructor(node) {
        if (!node) return
        this.rootElement = document.querySelector(this.selectors.root)
        this.imageGalleryElement = this.rootElement.querySelector(this.selectors.imageGallery)
        this.imagesCollection = this.rootElement.querySelectorAll(this.selectors.image)
        this.bindEvents()
    }

    bindEvents() {
        this.clickOnImage()
        this.clickOncloseButtoneAndBg()
        this.clickOnPrevButton()
        this.clickOnNextButton()
    }


    clickOnImage = () => {
        document.addEventListener('click', (e) => {
            if(!e.target.closest(this.selectors.image)) return
            this.showModal(e)
            this.lockBg()
        })
    }


    clickOncloseButtoneAndBg = () => {
        document.addEventListener('click', (e) => {
            let modal
            let image
            let closeButton
            modal = document.querySelector('[data-js-modal]')
            image = document.querySelector('[data-js-modal-image]')
            closeButton = document.querySelector('[data-js-close-button]')
            if ((e.target !== modal) && (e.target != closeButton)) return
            this.closeModal(e)
            this.lockBg()
        })
    }

    clickOnPrevButton = (e) => {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('[data-js-prev]')) return

            this.imageIndex--
            if (this.imageIndex <= 0) {
                this.imageIndex = this.imagesCollection.length;
            }
            this.changeImage()

        })
    }

    clickOnNextButton = (e) => {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('[data-js-next]')) return

            this.imageIndex++
            if (this.imageIndex > this.imagesCollection.length - 1) {
                this.imageIndex = 1
            }
            this.changeImage()
        })
    }

    changeImage = () => {
        this.imagesCollection.forEach( (image, index) => {
            if (this.imageIndex === index ) {
                document.querySelector('[data-js-modal-image]').src = `./images/gallery/${index}.jpg`
            } 
            if (this.imageIndex === this.imagesCollection.length ) {
                document.querySelector('[data-js-modal-image]').src = `./images/gallery/${this.imagesCollection.length}.jpg`
            }
        })
    }

    showModal = (e) => {
        this.imagesCollection.forEach((img, index) => {
            if (e.target === img) {
                this.imageIndex = index + 1

            }
            
        })
        let imageSrc = e.target.getAttribute('src')
        let modalLayout = `
            <div class="gallery__modal" data-js-modal>
                    <button class="gallery__step gallery__step--left" type="button" title="Previous image" data-js-prev >
                        <svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg>
                    </button>

                    <img src=${imageSrc} alt="" class="gallery__modal-image" data-js-modal-image>

                    <button class="gallery__step gallery__step--right" type="button" title="Next image" data-js-next>
                        <svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon"  version="1.1" 
                        xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568
                        448L256 903.232 659.072 512z" fill="#000000" />
                        </svg>
                    </button>

                    <button class="gallery__cross" type="button" title="close image" data-js-close-button></button>
                </div>
        `
        this.imageGalleryElement.insertAdjacentHTML('beforeend', modalLayout)
    }

    
    closeModal = (e) => {
        document.querySelector('[data-js-modal]').remove()
    }

    lockBg = () => {
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

}

export default Gallery





