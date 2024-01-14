import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AlertModule} from 'ngx-bootstrap'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AlertModule.forRoot()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bootstrap-01';
}
