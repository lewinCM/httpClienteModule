import { GifsService } from './../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get historial() {
    return this.gifsService.historia
  }
  constructor(private gifsService: GifsService) {

  }
  buscar(termino: string ) {

    // console.log(termino);
    this.gifsService.buscador(termino)

  }


}
