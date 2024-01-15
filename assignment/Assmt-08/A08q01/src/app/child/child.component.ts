import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public t1:string = "";


  @Output() public myEvent = new EventEmitter();

  public submit()
  {
    // this.myEvent.emit(this.t1);
    this.myEvent.emit("Ye bababbab");
  }

  constructor(){}

  ngOnInit(){

  }
}
