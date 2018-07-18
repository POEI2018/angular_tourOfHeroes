import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';

import { environment as ENV} from '../environments/environment' ;

@Injectable({
providedIn: 'root'
})
export class HeroService {
private subject:BehaviorSubject<Array<Hero>>;
private mockUrl : string ; 

constructor(private httpClient:HttpClient) {
  this.subject = new BehaviorSubject(new Array());
  this.mockUrl = ENV.apiUrl + '/assets/heroes.json' ;
  }

  get heroes() : Observable<Array<Hero>>{
    return this.subject.asObservable() ;
  }

  loadMock() {
    this.httpClient.get<Array<Hero>>(this.mockUrl) ;
    
    }
  }