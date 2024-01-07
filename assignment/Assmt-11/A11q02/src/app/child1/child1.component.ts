import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers: [NumberService]

})
export class Child1Component {
  public ans : boolean = false;

  num = 97;

  constructor(private obj1 : NumberService)
  {
    this.ans = this.obj1.checkPrime(this.num);
  }

}
