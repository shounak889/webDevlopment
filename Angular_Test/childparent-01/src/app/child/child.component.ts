import { Component, EventEmitter, Output } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [Child2Component],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() public sendfun = new EventEmitter();

  public sendMsg()
  {
    this.sendfun.emit("Hey boyyy I know");
  }

  public jj : any;

}
