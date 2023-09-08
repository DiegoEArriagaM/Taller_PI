import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../servicios/api.service';

interface libro {
  codigo_nuevo: string,
  nombre: string,
  edicion: number,
  stock: number,
  editorial_id: string,
  codigo_libro: string
}

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  @ViewChild('modalAviso') modalAviso!: ElementRef;

  nuevoLibro: libro = {
    "codigo_nuevo": "",
    "nombre": "",
    "edicion": 0,
    "stock": 0,
    "editorial_id": "",
    "codigo_libro": ""
  }

  libroUpdate: any = {
    "codigo_nuevo": "",
    "nombre": "this.nuevoLibro.nombre",
    "edicion": 0,
    "stock": 0,
    "editorial_id": "",
    "codigo_libro": ""
  };

  lista: any[] = [];

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.apiService.getBooks().subscribe(
      (data) => {
        this.lista = data.data;
      },
      (error) => {
        console.error(error);
      }
    )
  }


  public onClickUpdateLibro(): void {
    console.log('Codigo:', this.nuevoLibro.codigo_nuevo);


    this.libroUpdate.codigo_nuevo = this.nuevoLibro.codigo_nuevo;
    this.libroUpdate.nombre = this.nuevoLibro.nombre;
    this.libroUpdate.edicion = this.nuevoLibro.edicion;
    this.libroUpdate.stock = this.nuevoLibro.stock;
    this.libroUpdate.editorial_id = this.nuevoLibro.editorial_id;


    this.apiService.updateBook(this.libroUpdate);
  }

  public onClickCodigo(codigo: any): void {
    console.log('Codigo a agregar:', codigo);
    this.libroUpdate.codigo_libro = codigo;
  }

  public onClickBorrar(codigo: any): void {
    console.log('Codigo a borrar:', codigo);
    const deleteBook: any = {
      "codigo_libro": codigo
    };

    this.apiService.deleteBook(deleteBook);

    const modal = this.modalAviso.nativeElement;
    modal.style.display = 'block'; // Muestra el modal
    modal.classList.add('show'); // Agrega la clase 'show' para que se muestre correctamente
  }

}
