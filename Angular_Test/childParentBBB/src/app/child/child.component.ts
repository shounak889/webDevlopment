import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() public obj1 = new EventEmitter();

  public calling()
  {
    this.obj1.emit("Call from Parents");
  }
}
