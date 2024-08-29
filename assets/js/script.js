window.onload = function() {
    setTimeout(function() {
        document.getElementById('intro').classList.add('fade-out');
    }, 1000); // 1 segundo antes de comenzar la transición

    setTimeout(function() {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('menuLeft').style.display = 'block';
        document.getElementById('description').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
    }, 4000); // 3 segundos de transición más 1 segundo inicial
}
