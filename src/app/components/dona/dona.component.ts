import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title:string = "Sin Título";

  //Cambio la documentación de Charts LOS INPUTS no sirven
 @Input('labels') doughnutChartLabels: string[] = [ 'label1', 'label2', 'label3' ];
 @Input('data') dataChart:any = {  data: [ 350, 450, 100 ],
                            backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
                            //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
                          }


  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
     this.dataChart,
    ]
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData={
   
      labels: this.doughnutChartLabels,
      datasets:[{ data: this.dataChart }]
   
    }
   
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  

}
