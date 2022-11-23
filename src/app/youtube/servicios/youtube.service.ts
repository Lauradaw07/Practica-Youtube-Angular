import { Injectable } from '@angular/core';
import { Video, Youtube } from '../interfaces/youtube.inteface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private httpClient: HttpClient) { }

  public videosBuscados: Video[] = [];
  public videosFavoritos: Video[] = [];

  private api_key: string = "AIzaSyAdMSwiKNQevSh82RQHaEBGpoY1uYYX3xo";
  private limit: number = 12;

  buscarVideo(busqueda: string) {
    busqueda = busqueda.trim();
    busqueda = busqueda.toLowerCase();

    if((busqueda != "")) {
      this.httpClient.get<Youtube>(`https://www.googleapis.com/youtube/v3/search?key=${this.api_key}&q=${busqueda}&part=snippet&type=video&maxResults=${this.limit}`).subscribe((respuesta) =>  {
        console.log(respuesta);
        
      this.videosBuscados = respuesta.items;
    });
    }
  }

  agregarVideoAFavoritos(video: Video) {
    if(!this.videosFavoritos.some(videoEnArray => videoEnArray.id.videoId == video.id.videoId)) {
      this.videosFavoritos.push(video);
      console.log(this.videosFavoritos);
      
    }
  }

  borrarVideoFavorito(id: string) {
    let indice = this.videosFavoritos.findIndex(videoEnArray => videoEnArray.id.videoId == id);
    if(indice != -1) {
      this.videosFavoritos.splice(indice, 1);
    }
  }

  borrarTodosFavoritos() {
    console.log('entra');
    
    this.videosFavoritos = [];
    console.log(this.videosFavoritos);
    
  }

}
