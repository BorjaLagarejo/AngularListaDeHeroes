import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  // Variables
  heroes: any[] = [];
  buscando: string;

  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); // Cogemos los datos de los heroes y lo guardamos en un array local

    this.activatedRoute.params.subscribe(params => {
      this.buscando = params['busqueda'];
      this.heroes = this._heroesService.buscarHeroes(params['busqueda']);
    });
  }

  verHeroe(id: number) {
    console.log(id); // Recive la id de Heroe
    this.router.navigate( ['/heroe', id]);
  }
}
