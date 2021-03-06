System.register(['angular2/platform/browser', 'angular2/core', './mi-otro-componente'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, core_2, mi_otro_componente_1;
    var MiComponente;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (mi_otro_componente_1_1) {
                mi_otro_componente_1 = mi_otro_componente_1_1;
            }],
        execute: function() {
            MiComponente = (function () {
                function MiComponente() {
                    this.nombre = 'Carlos';
                }
                MiComponente = __decorate([
                    core_1.Component({
                        selector: 'mi-app',
                        templateUrl: 'plantillas/inicio.html',
                        directives: [mi_otro_componente_1.MiOtroComponente]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MiComponente);
                return MiComponente;
            })();
            exports_1("MiComponente", MiComponente);
            core_2.enableProdMode();
            browser_1.bootstrap(MiComponente);
        }
    }
});

//# sourceMappingURL=app.js.map
