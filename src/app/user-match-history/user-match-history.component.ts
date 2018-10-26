import {Component, OnInit} from '@angular/core';
import {Match} from '../_models/match';
import {MatchService} from '../_services/match.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-match-history',
  templateUrl: './user-match-history.component.html',
  styleUrls: ['./user-match-history.component.css']
})
export class UserMatchHistoryComponent implements OnInit {
  matches: Array<Match>;

  constructor(private matchService: MatchService, private router: Router) {
  }

  ngOnInit() {
    this.matchService.getAllForUser().subscribe(data => {
      this.matches = data;
    });
  }

  matchDetail(id) {
    this.router.navigate([`/match/${id}`]);
  }
}
