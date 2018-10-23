import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Map} from '../_models/map';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  api: string;
  currentUser: User;

  constructor(private http: HttpClient) {
    this.api = '//localhost:8080/map';
  }

  getAllMaps(): Observable<Map[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/all`, {headers}).pipe(map(data => <Map[]>data));
  }

  getStandardMaps(): Observable<Map[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/standard`, {headers}).pipe(map(data => <Map[]>data));
  }
}
