import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = '//localhost:8080/appUser';
  }

  getById(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  register(user: User) {
    return this.http.post(`${this.api}/new`, user);
  }

  update(user: User) {
    return this.http.put(`${this.api}/update`, user);
  }
}
