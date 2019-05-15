import {Component, OnInit} from '@angular/core';
import {Statistic} from '../_models/statistic';
import {MapService} from '../_services/map.service';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../_services/hero.service';
import {Season} from '../_models/season';
import {SeasonService} from '../_services/season.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  statistic: Statistic;
  type: string;
  seasons: Season[];
  season: Season;
  winRate: number;

  constructor(
    private mapService: MapService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private seasonService: SeasonService) {
  }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    const value = this.route.snapshot.paramMap.get('value');
    this.seasonService.getAll().subscribe(data => {
      this.seasons = data;
      this.season = this.seasons[1];

      if (this.type === 'byMap') {
        this.mapService.getMapStatistic(value, this.season.seasonId).subscribe(map => {
          this.statistic = map;
          this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
        });
      } else if (this.type === 'byMapType') {
        this.mapService.getTypeStatistic(value, this.season.seasonId).subscribe(mapType => {
          this.statistic = mapType;
          this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
        });
      } else if (this.type === 'byHero') {
        this.heroService.getStatistics(value, this.season.seasonId).subscribe(hero => {
          this.statistic = hero;
          this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
        });
      } else if (this.type === 'bySeason') {
        this.seasonService.getSeasonStatistic(this.season.seasonId).subscribe(season => {
          this.statistic = season;
          this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
        });
      }
    });

  }

  onSeasonChange() {
    this.type = this.route.snapshot.paramMap.get('type');
    const value = this.route.snapshot.paramMap.get('value');
    if (this.type === 'byMap') {
      this.mapService.getMapStatistic(value, this.season.seasonId).subscribe(map => {
        this.statistic = map;
        this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
      });
    } else if (this.type === 'byMapType') {
      this.mapService.getTypeStatistic(value, this.season.seasonId).subscribe(mapType => {
        this.statistic = mapType;
        this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
      });
    } else if (this.type === 'byHero') {
      this.heroService.getStatistics(value, this.season.seasonId).subscribe(hero => {
        this.statistic = hero;
        this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
      });
    } else if (this.type === 'bySeason') {
      this.seasonService.getSeasonStatistic(this.season.seasonId).subscribe(season => {
        this.statistic = season;
        this.winRate = this.statistic.wins / (this.statistic.wins + this.statistic.draws + this.statistic.losses);
      });
    }
  }

}
