import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  @Output() public funnn2 = new EventEmitter();

  public chiii()
  {
    this.funnn2.emit("In child222 but called by child 1");
  }

}
