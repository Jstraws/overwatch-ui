import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/hero/all');
  }

  get(id): Observable<Hero> {
    return this.http.get(`//localhost:8080/hero/${id}`).pipe(map(data => <Hero>data));
  }
}
