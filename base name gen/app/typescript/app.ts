///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {enableProdMode} from 'angular2/core';
import {MiOtroComponente} from './mi-otro-componente';

@Component({
  selector: 'mi-app',
  templateUrl: 'plantillas/inicio.html',
  directives: [MiOtroComponente] 
})
//no incluir ; aqui

export class MiComponente {
  nombre ='Carlos';
}
enableProdMode();
bootstrap(MiComponente);
