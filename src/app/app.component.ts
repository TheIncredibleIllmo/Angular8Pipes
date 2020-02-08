import { Component } from '@angular/core';
import { resolve } from 'url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Eduardo';

  secondName = 'eduardo Medina MontoYa';

  numbers = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234;
  salary:number = 1234.5;

  heroe = {
    name:'Logan',
    alias:'Wolverine',
    edad:38,
    address:{
      street:'1st Lock',
      street2:'112'
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('The data as been downloaded'), 3500);
  });

  currentDate = new Date();

  youtubeUrl:string = "https://www.youtube.com/embed/3te48WIuW3I";

  password:string = "Overiz33030@";
  isShown:boolean = true;
}
