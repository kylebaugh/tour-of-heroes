import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    // basic Angular directives like *ngFor and *ngIf
    CommonModule,
    // allows embeded links that connect to defined routes in app.routes
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  // setup default array that will contain Hero objects based off Hero interface
  heroes: Hero[] = []

  // include service in constructor to access values and methods
  constructor(private heroService: HeroService){}

  // use getHeroes method on component load
  ngOnInit(): void {
    this.getHeroes()
  }

  // local method utilizing service method as an observable and setting heroes array
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5))
  }

}
