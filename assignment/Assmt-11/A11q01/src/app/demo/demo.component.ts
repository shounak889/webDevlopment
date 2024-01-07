import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmaticService } from '../arithmatic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmaticService]
})

export class DemoComponent 
{
  public ans1 : number = 0;
  public ans2 : number = 0;
  num1 = 10;
  num2 = 5;

  constructor( private obj1 : ArithmaticService)
  {
    this.ans1 = this.obj1.add(this.num1,this.num2);
    this.ans2 = this.obj1.sub(this.num1,this.num2);
  }

}
