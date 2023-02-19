import { GifsService } from './../services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  //metodo para obtener la data desde el servicio
  get resultado(){
    return this.gifsService.resultado
  }
  constructor(private gifsService:GifsService){


  }

}
