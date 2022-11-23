import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  declarations: [
    BuscadorComponent,
    FavoritosComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginaPrincipalComponent,
    BuscadorComponent
  ]
})
export class YoutubeModule { }
