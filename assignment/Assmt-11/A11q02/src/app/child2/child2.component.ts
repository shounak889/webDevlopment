import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [StringService]

})
export class Child2Component {
  public cal = 0;

  public s1 = "JaiShreeRam";

  constructor(private obj1 : StringService)
  {
    this.cal = obj1.countCapitol(this.s1);
  }

}
