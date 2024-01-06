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
  title = 'A07q04';

  public s1 = "Marvellous Infosystem";
  public s2 = "";
  public up()
  {
    console.log("upppppp");
    this.s1 = this.s1.toLocaleUpperCase();
    console.log(this.s1.toLocaleUpperCase());
  }

  public lp()
  {
    this.s1 = this.s1.toLowerCase();
  }



}
