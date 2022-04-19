import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo:string;
  public tituloSubs$:Subscription;
  
  constructor(private router:Router) {

    this.tituloSubs$ = this.getArgumentosRuta()
                            .subscribe((data)=>{
                            this.titulo = data['titulo'];
                            document.title = `adminpro - ${this.titulo}`;
    });;
   }

   getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter(event=>event instanceof ActivationEnd),
      filter((event:ActivationEnd)=>event.snapshot.firstChild === null? true : false),
      map((event:ActivationEnd)=> event.snapshot.data)
    )
    
   }

   ngOnDestroy(): void {
this.tituloSubs$.unsubscribe();     
   }
  
}
