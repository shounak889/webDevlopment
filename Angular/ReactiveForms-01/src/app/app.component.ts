import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForms-01';
  MarvellousForm = new FormGroup(
  {
    username : new FormControl('Xys'),
    password : new FormControl(),
    confirmPass : new FormControl(),

    MarvellousClass : new FormGroup(
    {
      batch : new FormControl('fsfs'),
      fees : new FormControl()
    }
    )
  }
 );

 setData()
 {
  this.MarvellousForm.setValue
  (
    {
      username : 'Sss',
      password : 'dadad',
      confirmPass : 'dadad',
      MarvellousClass :
      {
        batch : 'MEAN',
        fees : '21000'
      },
     } 
  )

 }

 clrData()
 {
  this.MarvellousForm.setValue
  (
    {
      username : '',
      password : '',
      confirmPass : '',
      MarvellousClass :
      {
        batch : '',
        fees : ''
      },
     } 
  )

 }
  
}
