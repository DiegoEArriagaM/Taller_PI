import { Component } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent {
  constructor(private apiService: ApiService) { }

  lista: any[] = [];

  ngOnInit(): void {
    this.apiService.getEditorials().subscribe(
      (data) => {
        this.lista = data.data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
