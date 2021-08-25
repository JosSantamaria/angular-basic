import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
selector:'app-contador',
template:`  
<h1>{{titulo}}</h1>

<h3>El Numero base es: <strong>{{base}}</strong></h3>

<button (click)= "acumular(+base);"> + {{base}} </button>

<span> {{numero}} </span>

<button (click)="acumular(-base)"> - {{base}} </button>
`
})

export class ContadorComponent{
titulo = 'Contador App';
numero:number = 10;
acumular(valor:number){
  this.numero += valor;
}
base=5;
}