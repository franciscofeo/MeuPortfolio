const smooth = ( element ) => {
    window.scroll({
        top: document.querySelector(element).offsetTop - 50,
        left: 0,
        behavior: "smooth"
    }
    )
}