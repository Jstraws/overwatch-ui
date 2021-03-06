import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUser} from '../_models/appUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = 'https://overwatch-tracker-straus.herokuapp.com/appUser';
  }

  getById(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  register(user: AppUser) {
    return this.http.post(`${this.api}/new`, user);
  }

  update(user: AppUser) {
    return this.http.put(`${this.api}/update`, user);
  }
}
