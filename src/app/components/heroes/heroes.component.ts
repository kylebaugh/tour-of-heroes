import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  selectedHero?: Hero
  heroes: Hero[] = HEROES

  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }

}
