import {Injectable} from '@angular/core';
import {AppUser} from '../_models/appUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameMap} from '../_models/gameMap';
import {map} from 'rxjs/operators';
import {Statistic} from '../_models/statistic';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  api: string;
  currentUser: AppUser;

  constructor(private http: HttpClient) {
    this.api = 'https://overwatch-tracker-straus.herokuapp.com/map';
  }

  getAllMaps(): Observable<GameMap[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/all`, {headers}).pipe(map(data => <GameMap[]>data));
  }

  getStandardMaps(): Observable<GameMap[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/standard`, {headers}).pipe(map(data => <GameMap[]>data));
  }

  getMapTypes(): Observable<string[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/types`, {headers}).pipe(map(data => <string[]>data));
  }

  getMapStatistic(mapId, seasonId): Observable<Statistic> {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/stats/${mapId}/${this.currentUser.userId}/${seasonId}`, {headers}).pipe(map(data => <Statistic>data));
  }

  getTypeStatistic(type, seasonId): Observable<Statistic> {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/stats/type/${type}/${this.currentUser.userId}/${seasonId}`, {headers})
      .pipe(map(data => <Statistic>data));
  }
}
