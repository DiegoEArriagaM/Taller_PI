import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public baseUrl = "http://localhost:5000/api/book";
  public baseUrl2 = "http://localhost:5000/api/editorial";

  constructor(private httpClient: HttpClient) { }

  public getBooks(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
  
  public getEditorials(): Observable<any> {
    return this.httpClient.get(this.baseUrl2);
  }


  public createBook(jsonLibro: JSON): void {
    this.httpClient.post('http://localhost:5000/api/book', jsonLibro).subscribe(respuesta => {
      console.log(respuesta);
    })
  }
  
  public updateBook(jsonLibro: JSON): void {
    this.httpClient.put('http://localhost:5000/api/book', jsonLibro).subscribe(respuesta => {
      console.log(respuesta);
    })
  }

  public deleteBook(jsonLibro: JSON): void {
    const url = 'http://localhost:5000/api/book'; 

    // Configura la solicitud DELETE con los datos en el cuerpo
    const options = {
      body: jsonLibro
    };

    this.httpClient.request('delete', url, options).subscribe(
      (respuesta) => {
        console.log(respuesta);
        // Puedes manejar la respuesta después de eliminar el libro aquí
      },
      (error) => {
        console.error(error);
        // Maneja cualquier error que ocurra durante la solicitud de eliminación
      }
    );
  }
}





