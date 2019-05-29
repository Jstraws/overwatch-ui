import {Component, OnInit} from '@angular/core';
import {AppUser} from '../_models/appUser';
import {ActivityLog} from '../_models/activity-log';
import {MatchService} from '../_services/match.service';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  public currentUser: AppUser;
  public activityLogs: ActivityLog[];

  constructor(private matchService: MatchService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.matchService.fetchActivityLog(this.currentUser.userId).subscribe(data => {
      this.activityLogs = data;
      this.lineChartLabels = this.activityLogs.map(log => log.date);
      this.lineChartData = [{
        data: this.activityLogs.map(log => log.value)
      }];
    });
  }

}
