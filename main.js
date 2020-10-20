class Dado{
    tirar(){
        return Math.ceil(Math.random()*6)
    }
}

class Jugador{
    /**
     * 
     * @param {String} nombre nombre del jugardor
     * @param {String} color color de ficha
     */
    constructor(nombre, color){
        this.nombre = nombre
        this.color = color
        this.tiros = 0
        this.recorrido = 0
    }

    tirarDado(){
        let dado = new Dado()
        return this.recorrido += dado.tirar()
    }
}

class Tablero{
    constructor(){
        this.casillas = []
        this.meta = 100
    }

    rellenar(){
        for(let i = 1; i<=100; i++){
            if(i == 5){
                this.casillas[i] = 35
            }else if(i == 17){
                this.casillas[i] = 3
            }else if(i == 28){
                this.casillas[i] = 14
            }else if(i == 39){
                this.casillas[i] = 21
            }else if(i == 43){
                this.casillas[i] = 80
            }else if(i == 50){
                this.casillas[i] = 69
            }else if(i == 55){
                this.casillas[i] = 47
            }else if(i == 65){
                this.casillas[i] = 95
            }else if(i == 70){
                this.casillas[i] = 92
            }else if(i == 78){
                this.casillas[i] = 64
            }else if(i == 85){
                this.casillas[i] = 97
            }else if(i == 88){
                this.casillas[i] = 74
            }else if(i == 99){
                this.casillas[i] = 81
            }else{
                this.casillas[i] = i
            }
        }
    }

    revisarCasilla(casilla){
        return this.casillas[casilla]
    }

    verTablero(){
        console.log(this.casillas)
    }
}

class Juego{
    constructor(){
        this.jugadores = []
        this.tablero = new Tablero()
        this.tablero.rellenar()
    }

    anadirJugador(jugador){
        this.jugadores.push(jugador)
    }

    iniciar(){
        let terminar = false
        let nJugadores = this.jugadores.length
        while(terminar == false){
            let i = 0
            while(i<nJugadores && terminar == false){
                let turno = this.jugadores[i].tirarDado()
                this.jugadores[i].tiros += 1
                if (turno<100){
                    this.jugadores[i].recorrido = this.tablero.revisarCasilla(turno)
                }else{
                    terminar = true
                    console.log("Ganador: ", this.jugadores[i].nombre, ". Color: ", this.jugadores[i].color)
                }
                i++
            }
        }
    }

    mostrarJugadores(){
        console.log(this.jugadores)
    }

    mostrarJugador(jugador){
        console.log(this.jugadores[jugador])
    }
}

let juego = new Juego()
let j1 = new Jugador("Juan", "verde")
let j2 = new Jugador("Pepe", "azul")
let j3 = new Jugador("Ana", "amarillo")
let j4 = new Jugador("Martin", "naranja")
juego.anadirJugador(j1)
juego.anadirJugador(j2)
juego.anadirJugador(j3)
juego.anadirJugador(j4)
juego.iniciar()
juego.mostrarJugadores()
