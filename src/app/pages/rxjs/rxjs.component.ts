import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervaloSubs:Subscription;
  constructor() { 
      
    

    this.retornaObservable().pipe(
      // retry(1)
    )
    // .subscribe({
    //   next: value => console.log('Subs:', value), 
    //   error: err => console.warn('Error', err),
    //   complete: () => console.info('Obs terminado') 
    // })
   this.intervaloSubs = this.retornaIntervalo()
    .subscribe(   console.log    );
  }

  retornaIntervalo(){
   return interval(100)
                        .pipe(
                            
                            map(valor=> (valor+1)),
                            filter(valor=> (valor % 2 === 0) ? true:false),
                            // take(10),
                             )
  }

  retornaObservable():Observable<number>{
    let i = -1;
    return new Observable<number>( observer => {


      const intervalo = setInterval(()=>{

        i++;
        observer.next(i);


        if(i === 4){

          clearInterval( intervalo );
          observer.complete();
        };

        // if(i===2){
        //   observer.error('i llegó al valor de 2');
        // }
        
      }, 1000)

    })

  }

  ngOnDestroy(): void {
      this.intervaloSubs.unsubscribe();
  }

}
