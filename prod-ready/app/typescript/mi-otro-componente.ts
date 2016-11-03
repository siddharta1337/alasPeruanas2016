import {Component} from 'angular2/core';
	
import { Injectable, NgZone } from 'angular2/core';


@Component({
    selector:'mi-otro-componente',
    templateUrl:'plantillas/chat.html'
})

export class MiOtroComponente{
    base:Array<String>;
    names:Array<String>;
    fb:any;
    chatValues:Object;
    

    constructor(private zone: NgZone){
        this.base = new Array(10);
        
       
        this.fb = firebase;
        this.firebaseInit();
    }

    ///crea un nombre reggaetonero usando valores aleatorios de dos arrays 
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

  
   
    //conecta la app a firebase
    firebaseInit(){
        // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
        var config = {
            apiKey: " AIzaSyDkY7TSRA-rGLIYdJ8f8xbUOx2OMN5jWT4",
            authDomain: "firechat-aa6f7.firebaseapp.com",
            databaseURL: "https://firechat-aa6f7.firebaseio.com/"
        };
        this.fb.initializeApp(config);
       
        var numero = 14
        var path = 'chat/user'+numero+"/"
       this.fb.database().ref(path).set({
            fancyName:'juancho',
            message:'yolo'
        });
        
        var me = this;
        me.chatValues = {user:"ji"} ;
        var starCountRef = this.fb.database().ref('chat');
        starCountRef.on('value', function(snapshot) {
                console.log("----");
                console.log(snapshot.val())
                me.chatValues = {user:"jooo"} ;
                me.zone.run();
                
        });

    } 

    

}