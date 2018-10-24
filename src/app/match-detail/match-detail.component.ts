import {Component, OnInit} from '@angular/core';
import {Match} from '../_models/match';
import {MatchService} from '../_services/match.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  match: Match;

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('matchId');

    this.matchService.getSingleMatch(id).subscribe(data => {
      this.match = data;
    });
  }

}
