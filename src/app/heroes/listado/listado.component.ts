import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] =['Spiderman','Ironman','Goku','Yo','Capitan America'];
  hBorrado:String = '';
  
  borrarHeroe(){
    console.log('Borrando...');
    //this.heroes.splice(-1);
                //Shift() - Retorna el elemento eliminado
     this.hBorrado = this.heroes.shift() || '' ; //Si asignamos un resultado a una propiedad, esta nos servira para mostrar un dato aun ete dentro de una funcion como esta.

    
  
  }

        
  
}
