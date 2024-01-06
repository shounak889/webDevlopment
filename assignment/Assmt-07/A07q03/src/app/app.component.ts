import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A07q03';

  public s1 = "Marvellous Infosystems";
  
  public fun1()
  {
    console.log("Hi....");
    this.s1 = "Educating for Better tomorrow";
  }

}
