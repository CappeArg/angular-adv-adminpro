import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes personalizados
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

//Modulos personalizados (rutas)
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const ROUTES:Routes=[

  //path: '/dashboard' PagesRoutingModule
  //path: '/auth' AuthRoutingModule
  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path:'**', component:NotpagefoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    AuthRoutingModule,
    RouterModule.forRoot(ROUTES)    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
