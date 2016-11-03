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
    var core_1;
    var MiOtroComponente;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MiOtroComponente = (function () {
                function MiOtroComponente() {
                    this.base = new Array(10);
                }
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
                MiOtroComponente = __decorate([
                    core_1.Component({
                        selector: 'mi-otro-componente',
                        templateUrl: 'plantillas/nombres.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MiOtroComponente);
                return MiOtroComponente;
            })();
            exports_1("MiOtroComponente", MiOtroComponente);
        }
    }
});

//# sourceMappingURL=mi-otro-componente.js.map
