export const copyLink = () => ({
    copy() {
        const elem = document.createElement("textarea");
        elem.value = this.$el.href;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        console.log('asdsad')
    }
});
