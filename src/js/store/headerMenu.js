export const headerMenu = {
    visible: false,
    loaded: false,
    init() {
        window.onload = () => {
            setTimeout(() => {
                this.loaded = true
            }, 1000)
        }
    },
    toggle(){
        this.visible = !this.visible;
    },
    show(){
        this.visible = true;
        document.body.classList.add('overflow-hidden');
    },
    hide(){
        this.visible = false;
        document.body.classList.remove('overflow-hidden');
    },
    checkClickToMenu({target}) {
        if( target.classList.contains('header-popup-menu')) {
            this.visible = false;
            document.body.classList.remove('overflow-hidden');
        }
    }
}
