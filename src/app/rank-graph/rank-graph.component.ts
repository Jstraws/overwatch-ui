import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {AppUser} from '../_models/appUser';
import {ActivityLog} from '../_models/activity-log';
import {MatchService} from '../_services/match.service';

@Component({
  selector: 'app-rank-graph',
  templateUrl: './rank-graph.component.html',
  styleUrls: ['./rank-graph.component.css']
})
export class RankGraphComponent implements OnInit {
  public startingDate: Date;
  public endingDate: Date;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10
        }
      }],
      yAxes: [
        {
          id: 'matchActivity',
          position: 'left'
        }
      ]
    },
    elements: {
      line: {
        tension: 0
      }
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(0,123,255)',
      backgroundColor: 'rgba(0,123,255,0)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public activityLogs: ActivityLog[];
  private currentUser: AppUser;

  constructor(private matchService: MatchService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.endingDate = new Date();
    this.startingDate = new Date();
    this.startingDate.setDate(this.endingDate.getDate() - 30);
    const activityDTO = {
      'startingDate': this.startingDate,
      'endingDate': this.endingDate,
      'userId': this.currentUser.userId
    };
    this.matchService.fetchRankActivity(activityDTO).subscribe(data => {
      this.activityLogs = data;
      this.lineChartLabels = this.activityLogs.map(log => log.date);
      this.lineChartData = [{
        data: this.activityLogs.map(log => log.value)
      }];
    });
  }

  updateGraph() {
    const activityDTO = {
      'startingDate': this.startingDate,
      'endingDate': this.endingDate,
      'userId': this.currentUser.userId
    };
    this.matchService.fetchRankActivity(activityDTO).subscribe(data => {
      this.activityLogs = data;
      this.lineChartLabels = this.activityLogs.map(log => log.date);
      this.lineChartData = [{
        data: this.activityLogs.map(log => log.value)
      }];
    });
  }

}
