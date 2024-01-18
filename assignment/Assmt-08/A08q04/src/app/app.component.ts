import { Component } from '@angular/core';
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
  title = 'A08q04';
  public name : string = "";
  public len: any

  funLen(val2 : string)
  { 
    this.len = val2.length;
  }

  myValue: string = "";

  onInputChange(newValue: string) {
    // typecasting newValue to string to avoid bject is possibly null 
    this.myValue = newValue as string;  
  }

}


