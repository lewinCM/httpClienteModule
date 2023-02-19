import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, SearchResponse } from 'src/app/interface/data.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  resultado: Datum[] = []

  private _historial: string[] = []
  private apiKey: string = 'u2iJYswdRd0rLNE56nneAPITR2ouYzeN'
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs'

  get historia() {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {
    // aqui  retornamos las busquedas en localStorage esta es una forma
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!)

    // }
    // otra forma corta
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('resultados')!) || []

    // almacenar las img en local ultimo buscados
  }
  buscador(query: string = '') {
    // convertir todos los elementos del buscador en mayuscula
    query = query.trim().toLocaleLowerCase()

    // inserta en la ultima linea

    // evitar repeticiones
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
    }
    // limita el numero del input en el arreglo de min 0 max 10
    this._historial = this._historial.splice(0, 10)
    console.log(this._historial);

    //

    // guardar elementos el localStorage
    //json convierte cualquier propiedad en string
    localStorage.setItem('historial', JSON.stringify(this._historial))

    //tomador de los parametros
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limt', '10')
      .set('q', query);


    // console.log(params.toString());


    // llamando a la api
    this.http.get<SearchResponse>(`${this.servicioUrl}/search?`, { params })
      .subscribe((resp: SearchResponse) => {
        console.log(resp.data);
        this.resultado = resp.data
        // qui los ultimos resultados
        localStorage.setItem('resultados', JSON.stringify(this.resultado))
      })



  }

}
