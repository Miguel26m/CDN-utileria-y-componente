class Carrusel {
    constructor(id, data) {
        this.contenedor = document.getElementById(id);
        this.data = data;
        this.indice = 0;
        this.render();
    }

    render() {
        this.contenedor.className = 'carrusel-wrapper';
        this.contenedor.innerHTML = `
            <div class="carrusel-container">
                <div class="carrusel-track" id="track-${this.contenedor.id}">
                    ${this.data.map(item => `<img src="${item.img}">`).join('')}
                </div>
                <button class="botones atras"><</button>
                <button class="botones adelante">></button>
            </div>
            <div class="informacion">
                <h3 id="titulo-${this.contenedor.id}">${this.data[0].titulo}</h3>
                <p id="descripcion-${this.contenedor.id}">${this.data[0].descripcion}</p>
            </div>
        `;

        this.track = this.contenedor.querySelector('.carrusel-track');
        this.contenedor.querySelector('.adelante').onclick = () => this.cambiar(1);
        this.contenedor.querySelector('.atras').onclick = () => this.cambiar(-1);
    }

    cambiar(dir) {
        this.indice = (this.indice + dir + this.data.length) % this.data.length;
        this.track.style.transform = `translateX(-${this.indice * 100}%)`;
        
        document.getElementById(`titulo-${this.contenedor.id}`).innerText = this.data[this.indice].titulo;
        document.getElementById(`descripcion-${this.contenedor.id}`).innerText = this.data[this.indice].descripcion;
    }
}