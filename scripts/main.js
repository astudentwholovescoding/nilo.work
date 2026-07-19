if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.location.href = "/mobile"
}

let scrollX = 0;
function nezukoRunning(e) {
    atBottom = window.innerHeight + window.scrollY >= window.innerHeight * 2;

    if (atBottom) {
        if (e.deltaY < 0) {
            if (scrollX > 0) {
                scrollX = Math.max(0, scrollX + e.deltaY);
                window.scrollTo(scrollX, window.innerHeight);
                e.preventDefault();
            }
        } else {
            if (scrollX < window.innerWidth * 2) {
                scrollX += e.deltaY;
                window.scrollTo(scrollX, window.innerHeight);
                e.preventDefault();
            }
        }
    }
}
window.addEventListener("wheel", nezukoRunning, {passive: false});