import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers :[FormBuilder,Validators]
})
export class AppComponent {
  constructor(public obj1 : FormBuilder)
  {

  }
  title = 'ReactiveForms-01';

  MarvellousForm = this.obj1.group(
    {
      username : ['Shounak', Validators.required],
      password : ['', Validators.required],
      confirmPass : [''],
  
      MarvellousClass : this.obj1.group(
      {
        batch : ['epj'],
        fees : ['55']
      }
      )
    }
   );
//   MarvellousForm = new FormGroup(
//   {
//     username : new FormControl('Xys'),
//     password : new FormControl(),
//     confirmPass : new FormControl(),

//     MarvellousClass : new FormGroup(
//     {
//       batch : new FormControl('fsfs'),
//       fees : new FormControl()
//     }
//     )
//   }
//  );

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
