document.getElementById('form-reserva').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('mensaje-exito').style.display = 'block';
    this.reset();

    setTimeout(() => {
        document.getElementById('mensaje-exito').style.display = 'none';
    }, 5000);
});
