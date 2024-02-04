import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  name : string = "Shounak Rendalkar, Kolhapur";
  value  = 12.34;
  today = new Date();

  book =
  {
    "name" : "Learning  Angular",
    "Author" : "James Peter",
    "Price" : 322
  }
}
