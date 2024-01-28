import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service01Service {

  constructor(private http : HttpClient) { }

  getfun()
  {
    return this.http.get("http://localhost:5555/fun");
  }
}
