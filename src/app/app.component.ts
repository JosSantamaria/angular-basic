import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Nombre de Componente dentro de html
  templateUrl: './app.component.html'
  //templateUrl: './app.component.html', //ruta PATH (Carpetas)
  ,

})

export class AppComponent {
 titulo = 'Contador App';
 numero:number = 10;

//  sumar(){
//    this.numero += 1;
//  }

//  restar(){
//   this.numero -= 1;
// }

acumular(valor:number){
  this.numero += valor;

}
 base=5;
}
