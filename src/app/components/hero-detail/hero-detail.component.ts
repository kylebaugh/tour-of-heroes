import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location /* Location gives access to browser history stack */ } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/hero';
import { ActivatedRoute } from '@angular/router'; // lets us access the current URL route and grab things like params and queries
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent {
  // Old version used a property being passed for hero, new version grabs it from params
  // @Input() hero?: Hero;

  hero: Hero | undefined

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ){}

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  // uses Location to access and navigat through the browser history stack
  goBack(): void {
    this.location.back()
  }

  ngOnInit(){
    this.getHero()
  }

}
