import { Component, ElementRef, ViewChild } from '@angular/core';
import { YoutubeService } from '../servicios/youtube.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  constructor(private youtubeService:YoutubeService) { }

  @ViewChild("busqueda") busqueda!:ElementRef<HTMLInputElement>;

  buscar(busqueda: string) {
    this.youtubeService.buscarVideo(busqueda);
    this.busqueda.nativeElement.value = "";
  }
}
