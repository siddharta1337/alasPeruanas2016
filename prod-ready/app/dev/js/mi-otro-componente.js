System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var MiOtroComponente;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            MiOtroComponente = (function () {
                function MiOtroComponente(zone) {
                    this.zone = zone;
                    this.base = new Array(10);
                    this.fb = firebase;
                    this.firebaseInit();
                }
                ///crea un nombre reggaetonero usando valores aleatorios de dos arrays 
                MiOtroComponente.prototype.generadorRadomDeNombres = function () {
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
                    var apellidos = [
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
                    return this.names[Math.round(Math.random() * (this.names.length - 1))] + " " + apellidos[Math.round(Math.random() * (apellidos.length - 1))];
                };
                //conecta la app a firebase
                MiOtroComponente.prototype.firebaseInit = function () {
                    // Initialize Firebase
                    // TODO: Replace with your project's customized code snippet
                    var config = {
                        apiKey: " AIzaSyDkY7TSRA-rGLIYdJ8f8xbUOx2OMN5jWT4",
                        authDomain: "firechat-aa6f7.firebaseapp.com",
                        databaseURL: "https://firechat-aa6f7.firebaseio.com/"
                    };
                    this.fb.initializeApp(config);
                    var numero = 14;
                    var path = 'chat/user' + numero + "/";
                    this.fb.database().ref(path).set({
                        fancyName: 'juancho',
                        message: 'yolo'
                    });
                    var me = this;
                    me.chatValues = { user: "ji" };
                    var starCountRef = this.fb.database().ref('chat');
                    starCountRef.on('value', function (snapshot) {
                        console.log("----");
                        console.log(snapshot.val());
                        me.chatValues = { user: "jooo" };
                        me.zone.run();
                    });
                };
                MiOtroComponente = __decorate([
                    core_1.Component({
                        selector: 'mi-otro-componente',
                        templateUrl: 'plantillas/chat.html'
                    }), 
                    __metadata('design:paramtypes', [core_2.NgZone])
                ], MiOtroComponente);
                return MiOtroComponente;
            })();
            exports_1("MiOtroComponente", MiOtroComponente);
        }
    }
});

//# sourceMappingURL=mi-otro-componente.js.map
