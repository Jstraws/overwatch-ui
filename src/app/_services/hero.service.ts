import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Hero} from '../_models/hero';
import {Statistic} from '../_models/statistic';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private api = '//localhost:8080/hero';
  private currentUser;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/all`, {headers});
  }

  get(id): Observable<Hero> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/${id}`, {headers}).pipe(map(data => <Hero>data));
  }

  getStatistics(heroId, seasonId): Observable<Statistic> {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/stats/${heroId}/${this.currentUser.userId}/${seasonId}`, {headers})
      .pipe(map(data => <Statistic>data));
  }
}
