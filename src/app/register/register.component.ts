import {Component, OnInit} from '@angular/core';
import {AppUser} from '../_models/appUser';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../_services/authentication.service';
import {AlertService} from '../_services/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  model = new AppUser();

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  hashCode(s) {
    let h = 0, i = 0;
    const l = s.length;

    if (l > 0) {
      while (i < l) {
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
      }
    }

    return h;
  }

  onSubmit() {
    this.submitted = true;

    this.model.password = this.hashCode(this.model.password);

    this.authenticationService.register(this.model)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error1 => {
          this.alertService.error('User Already Exists');
        }
      );
  }
}
