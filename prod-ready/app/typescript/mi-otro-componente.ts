import {Component} from 'angular2/core';
	
import { Injectable, NgZone } from 'angular2/core';
import { FormBuilder, Validators } from 'angular2/common';



@Component({
    selector:'mi-otro-componente',
    templateUrl:'plantillas/chat.html'
})

export class MiOtroComponente{
    base:Array<String>;
    names:Array<String>;
    fb:any;
    chatValues:Array<Object>;
    nombreUsuarioRandom:Text;
    

    constructor(private zone: NgZone){
        this.base = new Array(10);
        this.asignadorNombres()
        
       
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

    asignadorNombres(){
        var userName =  this.generadorRadomDeNombres();
        if(localStorage.getItem("userName")===null){
            localStorage.setItem("userName", userName);
        }else{
            userName = localStorage.getItem("userName")
        }

        this.nombreUsuarioRandom =  userName;
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
       
        var numero = 1
        var path = 'chat/user'+numero+"/"
        
        
        var me = this;
        me.chatValues = [] ;
       
        this.read();

    } 

    read(){
         var me = this;
         var starCountRef = this.fb.database().ref('chat');
        starCountRef.on('value', function(snapshot) {
                console.log("----");
                var votes = [];
                snapshot.forEach(function(vote) {
                    votes.push({ ip: vote.val().fancyName, stars: vote.val().message});
                });

                
                me.chatValues = votes;//snapshot.val();
                console.log(votes)
                //me.zone.run();
                
        });
    }
    doLogin(event) {
        console.log(this.chat);
         var me = this;
        var numero = Math.random().toString(36).substr(2);
        var path = 'chat/user'+numero+"/"
       this.fb.database().ref(path).set({
            fancyName:localStorage.getItem("userName"),
            message:me.chat
        });
        event.preventDefault();
    }

    

}