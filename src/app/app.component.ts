import { Component, AfterViewInit } from '@angular/core';
import { ExampleService } from './services/example.service';

import Swiper from "swiper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  mySwiper:Swiper;
  
  paises:any[] = [];

  constructor(private _exampleService:ExampleService){

    this._exampleService.getPaises()
      .subscribe( (data:any)=>{
        console.log(data);
        this.paises = data;
      })
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container')
  }

}
