import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Season} from '../_models/season';
import {map} from 'rxjs/operators';
import {Statistic} from '../_models/statistic';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private api: string;
  private currentUser;

  constructor(private http: HttpClient) {
    this.api = 'https://overwatch-tracker-straus.herokuapp.com/season';
  }

  getAll(): Observable<Season[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/all`, {headers}).pipe(map(data => <Season[]>data));
  }

  getSeasonStatistic(seasonId): Observable<Statistic> {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/stats/${this.currentUser.userId}/${seasonId}`, {headers})
      .pipe(map(data => <Statistic>data));
  }
}
