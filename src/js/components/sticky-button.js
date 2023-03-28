export const stickyButton = () => ({
  showStickyButton: false,

  setIsShowButton() {
    this.showStickyButton = window.pageYOffset < 50 || (window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight;
  }
});