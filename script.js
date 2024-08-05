$(document).ready(function() {
    window.addEventListener('wheel', function(event) {
        if (event.cancelable) {
            event.preventDefault();
        }
        var scrollAmount = 5; // khurdu
        if (event.deltaY) {
            window.scrollBy({
                left: event.deltaY * scrollAmount,
                behavior: 'smooth'
            });
        } else if (event.detail) {
            window.scrollBy({
                left: event.detail * 40 * scrollAmount,
                behavior: 'smooth'
            });
        }
    }, { passive: false });
});
