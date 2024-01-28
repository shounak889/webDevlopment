import { Component } from '@angular/core';
import { Service01Service } from './service01.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{

  constructor (private service : Service01Service)
  {

  }

  message : any;

  ngOnInit()
  {
    this.service.getfun().subscribe(data=>{
      this.message=data;
    })
  }


}
