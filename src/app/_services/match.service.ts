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
    this.api = 'https://overwatch-tracker-straus.herokuapp.com/match';
  }

  getAllForUser(): Observable<Match[]> {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/user/${this.currentUser.userId}`, {headers}).pipe(map(data => <Match[]>data));
  }

  getSingleMatch(matchId): Observable<Match> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    return this.http.get(`${this.api}/${matchId}`, {headers}).pipe(map(data => <Match>data));
  }

  setMatchDifference(match: Match): Match {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    this.http.get(`${this.api}/recent/${this.currentUser.userId}`, {headers}).subscribe(data => {
      const lastMatch = <Match>data;
      match.rankDifference = lastMatch.rank - match.rank;
    });
    return match;
  }

  saveNewMatch(match: Match): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:thisIsAPass3215')});
    // match = this.setMatchDifference(match);
    this.http.get(`${this.api}/recent/${this.currentUser.userId}`, {headers}).subscribe(data => {
      const lastMatch = <Match>data;
      if (lastMatch != null) {
        match.rankDifference = match.rank - lastMatch.rank;
      } else {
        match.rankDifference = 0;
      }

      this.http.post(`${this.api}/new`, match, {headers}).subscribe(temp => {
        const tempMatch = <Match>temp;
        this.router.navigate([`/match/${tempMatch.matchId}`]);
      });
    });
  }
}
