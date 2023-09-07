import { Component } from '@angular/core';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent {
  lista = [{
    "id": "E0001",
    "nombre": "Santa Fe",
    "pais": "Colombia",
    "ciudad": "Bogota"
  }, {
    "id": "E0002",
    "nombre": "BookWorld",
    "pais": "Estados Unidos",
    "ciudad": "Washington DC"
  }];
}
