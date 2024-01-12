import { Routes } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { BookComponent } from './book/book.component';

export const routes: Routes =
[
    {path:'techs', component : TechComponent },
    {path:'booklist', component : BookComponent}
];
