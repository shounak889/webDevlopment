import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A08q03';

  public n1 : string = "";

  public n2:any;
  
  lenString()
  {
    this.n2 = this.n1.length
  }

  // so that we can't get errors like ExpressionChangedAfterItHasBeenCheckedError
  ngOnInit() {
    console.log("component has been initialized!");
    //this.n2 = this.n1.length
  }
}
