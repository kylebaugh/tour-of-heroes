import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes'; // mock data array
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../../services/message.service';
import { RouterLink } from '@angular/router';

// gathers global state data (?) based on the injectable HeroService class
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailComponent,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = []

  /*
  Old version
    selectedHero?: Hero

    onSelect(hero: Hero): void{
        this.selectedHero = hero
        this.messageService.add(`Selected hero ${hero.id} on Hero Component`)
      }
  */

  // adding the service instance to the constructor gives access to its properties and methods
  constructor(private heroService: HeroService, /*old version used message service */ public messageService: MessageService) {}

  // creating method that is able to access the Injected Service defined in the constructor
  getHeroes(): void {
    // for synchronous code, we can set our data directly
    // this.heroes = this.heroService.getHeroes()

    // for asynchronous code, we need to wait for the promise reponse, and subscribe to the observable with the subscribe method
    this.heroService.getHeroes()
    //subscribe awaits the promise response, and then executes a callback function to implement data
      .subscribe(heroes => this.heroes = heroes)
  }

  // test function to duplicate with axios check to pokeAPI
  getMons(): void {
    this.heroService.getMons()
  }

  // essentially useEffect in React. As the page initializes, it processes the functions inside.
  ngOnInit(): void {
    this.getHeroes()
    this.getMons()

  }

}
