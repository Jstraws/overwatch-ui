import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from '../_services/hero.service';
import {MapService} from '../_services/map.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-statistic-list',
  templateUrl: './statistic-list.component.html',
  styleUrls: ['./statistic-list.component.css']
})
export class StatisticListComponent implements OnInit, OnDestroy {
  listType: string;
  type: string;
  list;
  navigationSubscription;
  iconUrls = {
    'ASSAULT': 'https://i.imgur.com/CzzZpnS.png',
    'ESCORT': 'https://i.imgur.com/NTgjGPB.png',
    'HYBRID': 'https://i.imgur.com/RpNDBXB.png',
    'CONTROL': 'https://i.imgur.com/KQu7XOX.png',
    'ARENA': 'https://www.dropbox.com/s/lnpfxiq26ikpzfi/arcade.jpg?raw=1'
  };

  constructor(
    private heroService: HeroService,
    private mapService: MapService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.type = this.route.snapshot.paramMap.get('listType');
        if (this.type === 'byMap') {
          console.log('MAP');
          this.listType = 'Map Statistics';
          this.mapService.getStandardMaps().subscribe(data => {
            this.list = data;
          });
        } else if (this.type === 'byHero') {
          console.log('HERO');
          this.listType = 'Hero Statistics';
          this.heroService.getAll().subscribe(data => {
            this.list = data;
          });
        } else if (this.type === 'byMapType') {
          this.listType = 'Map Type Statistics';

          this.mapService.getMapTypes().subscribe(data => {
            this.list = data;
            console.log(this.list);
          });
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
