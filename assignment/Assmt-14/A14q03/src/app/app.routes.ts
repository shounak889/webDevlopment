import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DefaultRouteComponent } from './default-route/default-route.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = 
[
    
        {path:'Tech' , component: Comp1Component},
        {path:'BooksAll' , component:Comp2Component},
        //home path when nothing is at the endpoint
        {path:'', component:HomeComponent},
        //when there is wrong at endpoint
        {path:'**', component:DefaultRouteComponent}

    
];
