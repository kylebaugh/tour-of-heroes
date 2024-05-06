import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../../services/message.service';

// gathers global state data based on the injectable HeroService class
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailComponent,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  selectedHero?: Hero
  heroes: Hero[] = []

  onSelect(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add(`Selected hero ${hero.id} on Hero Component`)
  }

  // adding the service instance to the constructor gives access to its properties and methods
  
  // creating method that is able to access the Injected Service defined in the constructor
  getHeroes(): void {
    // for synchronous code, we can set our data directly
    // this.heroes = this.heroService.getHeroes()
    
    // for asynchronous code, we need to wait for the promise reponse, and we do that with the subscribe method
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
  
  getMons(): void {
    this.heroService.getMons()
  }
  
  constructor(private heroService: HeroService, public messageService: MessageService) {}
  
  // essentially useEffect in React. As the page initializes, it processes the functions inside.
  ngOnInit(): void {
    this.getHeroes()
    this.getMons()

  }

}
