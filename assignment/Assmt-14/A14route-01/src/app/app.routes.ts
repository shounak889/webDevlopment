import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

export const routes: Routes = 
[
    {path:'technology', component : Child1Component},
    {path:'dj', component : Child2Component}
];
