import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // creates funtion that returns an array of objects matching the Hero interface
  // Would most likely use this to work with an API for actual data
  //  getHeroes(): Hero[]{
  //    return HEROES
  //  }

  // with an observable, we do this
  // getHeroes will return an Observable array of Hero objects
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  getMons(){
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err)
        return err.data
      })

  }

  constructor(private messageService: MessageService) { }

  addMessage(mess: string): void{
    this.messageService.add(mess)
  }

  clearMessages():void {
    this.messageService.clear()
  }

}
