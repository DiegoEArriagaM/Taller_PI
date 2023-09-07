import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  lista = [{
    "codigo": "L0001",
    "nombre": "Don Quijote",
    "edicion": 2,
    "stock": 50,
    "editorial_id": "E0001"
  },
  {
    "codigo": "L0002",
    "nombre": "Don Quijote de la mancha",
    "edicion": 3,
    "stock": 150,
    "editorial_id": "E0002"
  }];
}
