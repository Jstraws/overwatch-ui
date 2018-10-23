import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Match} from '../_models/match';
import {User} from '../_models/user';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  api: String;
  currentUser: User;

  constructor(private http: HttpClient, private router: Router) {
    this.api = '//localhost:8080/match';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getAllForUser(): Observable<Match[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/user/${this.currentUser.userId}`, {headers}).pipe(map(data => <Match[]>data));
  }

  saveNewMatch(match: Match): void {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    this.http.post(`${this.api}/new`, match, {headers}).pipe(map(data => {
      const tempMatch = <Match>data;
      this.router.navigate([`/match/${tempMatch.matchId}`]);
    }));
  }

}
