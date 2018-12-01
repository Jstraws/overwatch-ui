import {Component, OnInit} from '@angular/core';
import {Match} from '../_models/match';
import {MatchService} from '../_services/match.service';
import {Router} from '@angular/router';
import {PaginationInstance} from 'ngx-pagination';


@Component({
  selector: 'app-user-match-history',
  templateUrl: './user-match-history.component.html',
  styleUrls: ['./user-match-history.component.css']
})
export class UserMatchHistoryComponent implements OnInit {
  matches: Array<Match>;
  maxSize = 7;
  directionLinks = true;
  responsive = true;
  autoHide = false;
  config: PaginationInstance = {
    id: 'paginator',
    itemsPerPage: 15,
    currentPage: 1
  };
  labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: 'You\'re on page'
  };

  constructor(private matchService: MatchService, private router: Router) {
  }

  ngOnInit() {
    this.matchService.getAllForUser().subscribe(data => {
      this.matches = data;
    });
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  matchDetail(id) {
    this.router.navigate([`/match/${id}`]);
  }
}
