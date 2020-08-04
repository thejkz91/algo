import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logros: Ilogro[];
  titulo: string = 'Bienvenidos'

  constructor() { }

  ngOnInit(){
    this.logros = this.getLogros();
  }
  getLogros(): Ilogro[]{
    return[{
      id:1,
      title:"Logre algo interesante",
      description:"alñsdkfjalksdfjalsdfjk"
    },
    {
      id:2,
      title:"otra pendejada similar",
      description:"algo X"
    },
    {
      id:3,
      title:"la tercer pendejada del dia",
      description:"asdjfasjdfajsdfajdfasjdf"
    }
  ]


  }
}
interface Ilogro{
  id: number;
  title:string;
  description ?: string;
}
