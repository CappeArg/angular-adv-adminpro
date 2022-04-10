import { Component } from '@angular/core';
import { ChartData } from 'chart.js';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  constructor(){

  
  }

  public etiqueta1:string[]=['Pan', 'Asado', 'Vino','Ensalada' ];
  public etiqueta2:string[]=['Pescado', 'Carne Vaca', 'Carne Cerdo','Carne de Mamut' ];
  public etiqueta3:string[]=['Gasolina', 'Gastos de Almacenado', 'Varios','Cableado' ];
  public etiqueta4:string[]=['Soda', 'Yerba', 'Aceite','Choclo' ];
 
  public data1:any= [35, 45, 10, 20];
  public data2:any = [99,85,42];
  public data3:any = [33,710,78];
  public data4:any = [55,66,22];
}