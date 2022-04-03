import { Component, OnChanges } from '@angular/core';
import { ChartData } from 'chart.js';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1:string[]=[];
  constructor(){

  
  }

        //Cambio la documentación de Charts -- esto no funciona

  lables1 : string[] =  [ 'Dato2', 'Dato3', 'Dato4' ];
  data1: ChartData<'doughnut'> = {
    labels: this.lables1,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };
  
}
