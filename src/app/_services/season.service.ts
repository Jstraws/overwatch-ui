import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Season} from '../_models/season';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = '//localhost:8080/season';
  }

  getAll(): Observable<Season[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/all`, {headers}).pipe(map(data => <Season[]>data));
  }
}
