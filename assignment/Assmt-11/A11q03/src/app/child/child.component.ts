import { Component, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService, StringService]
})

export class ChildComponent {
    public numT : boolean  = false;
    public num = 11;

    public cap : number = 0;
    public s1 : string = "StringIsKING";
    constructor(private obj1 : NumberService, private obj2 : StringService)
    {
      this.numT = obj1.checkPrime(this.num);
      this.cap = obj2.capitalChars(this.s1)

    }
}
