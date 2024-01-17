import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() public ch1 = new EventEmitter();

  @Input() public ss1 : any;
  
  public fun1()
  {
    this.ch1.emit("Hello from Child");
  }

}
