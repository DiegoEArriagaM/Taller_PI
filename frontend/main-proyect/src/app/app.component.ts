import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicios/api.service';

interface libro {
  codigo: string,
  nombre: string,
  edicion: number,
  stock: number,
  editorial_id: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = "";

  nuevoLibro: libro = {
    "codigo": "",
    "nombre": "",
    "edicion": 0,
    "stock": 0,
    "editorial_id": ""
  }

  constructor(private apiService: ApiService) { }



  onClickEditorialesLibro(): void {
    this.apiService.getEditorials().subscribe(
      (data) => {
        // Maneja los datos obtenidos de la API aquí
        console.log(data.data);
      },
      (error) => {
        // Maneja cualquier error que ocurra durante la solicitud
        console.error(error);
      }
    )
  }


  public onClickCrearLibro(): void {
    console.log('Codigo:', this.nuevoLibro.codigo);
    console.log('Nombre:', this.nuevoLibro.nombre);
    console.log('Edicion:', this.nuevoLibro.edicion);
    console.log('Stock:', this.nuevoLibro.stock);
    console.log('ID Editorial:', this.nuevoLibro.editorial_id);

    const jsonLibro: any = {
      "codigo": this.nuevoLibro.codigo,
      "nombre": this.nuevoLibro.nombre,
      "edicion": this.nuevoLibro.edicion,
      "stock": this.nuevoLibro.stock,
      "editorial_id": this.nuevoLibro.editorial_id
    };

    this.apiService.createBook(jsonLibro);
  }

  public onClickUpdateLibro(): void {
    const jsonLibro: any = {
      "codigo_nuevo": "L0003",
      "nombre": "El patito Feo New",
      "edicion": 7,
      "stock": 60,
      "editorial_id": "E0003",
      "codigo_libro": "L0003"
    };

    this.apiService.updateBook(jsonLibro);
  }

  public onClickDelteLibro(): void {
    const jsonLibro: any = {
      "codigo_libro": "L0003"
    };
    this.apiService.deleteBook(jsonLibro);
  }
}

