import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getById(id: number) {
    return this.http.get(`//localhost:8080/appUser/${id}`);
  }

  register(user: User) {
    return this.http.post(`//localhost:8080/appUser/new`, user);
  }

  update(user: User) {
    return this.http.put(`//localhost:8080/appUser/update`, user);
  }
}
