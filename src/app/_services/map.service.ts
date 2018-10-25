import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Map} from '../_models/map';
import {map} from 'rxjs/operators';
import {Statistic} from '../_models/statistic';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  api: string;
  currentUser: User;

  constructor(private http: HttpClient) {
    this.api = '//localhost:8080/map';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getAllMaps(): Observable<Map[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/all`, {headers}).pipe(map(data => <Map[]>data));
  }

  getStandardMaps(): Observable<Map[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/standard`, {headers}).pipe(map(data => <Map[]>data));
  }

  getMapTypes(): Observable<string[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/types`, {headers}).pipe(map(data => <string[]>data));
  }

  getMapStatistic(mapId, seasonId): Observable<Statistic> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/stats/${mapId}/${this.currentUser.userId}/${seasonId}`, {headers}).pipe(map(data => <Statistic>data));
  }

  getTypeStatistic(type, seasonId): Observable<Statistic> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/stats/type/${type}/${this.currentUser.userId}/${seasonId}`, {headers})
      .pipe(map(data => <Statistic>data));
  }
}
