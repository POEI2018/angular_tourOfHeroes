import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string ;
  newHeroName:string ;
  @ViewChild('heroesComp') 
  heroesComponent:HeroesComponent;
  
  constructor(){
  this.title = 'Tour of Heroes';
  this.newHeroName='';
 
  }

  validateHero(event:any, form: NgForm){
    let hero:Hero = new Hero() ;
    hero.name = this.newHeroName ;
    this.heroesComponent.heroes.push(hero);
    form.resetForm();
  }
}

