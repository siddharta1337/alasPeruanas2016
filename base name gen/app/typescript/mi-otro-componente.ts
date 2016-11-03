import {Component} from 'angular2/core';

@Component({
    selector:'mi-otro-componente',
    templateUrl:'plantillas/nombres.html'
})

export class MiOtroComponente{
    base:Array<String>;
    names:Array<String>;

    constructor(){
        this.base = new Array(10);
         
    }

    generadorRadomDeNombres(){
         
        this.names = [
            'Brayan',
            'Gary',
            'Goku',
            'Jean Pierre',
            'Zeta',
            'Ragga Man',
            'Jordan',
            'Sam',
            'Perry',
            'Lancelot'
        ];
        
        
        let apellidos = [
            'el bambino',
            'el don',
            'y Yandel',
            'la máquina',
            'el rebelde',
            'dirty buoy',
            'baby face',
            'King',
            'de la guetto',
            'number one'
        ];

        return this.names[ Math.round( Math.random()*(this.names.length-1) ) ] + " " + apellidos[ Math.round( Math.random()*(apellidos.length-1) ) ]

    }

}