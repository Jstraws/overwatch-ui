import {Component, OnInit} from '@angular/core';
import {Map} from '../_models/map';
import {Hero} from '../_models/hero';
import {HeroService} from '../_services/hero.service';
import {MapService} from '../_services/map.service';
import {MatchService} from '../_services/match.service';
import {Match} from '../_models/match';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {
  mapValues: Map[];
  heroesAvailable: Hero[];
  submitted = false;
  model = new Match();

  constructor(
    private heroService: HeroService,
    private mapService: MapService,
    private matchService: MatchService
  ) {
  }

  ngOnInit() {
    this.heroService.getAll().subscribe(data => {
      this.heroesAvailable = data;
    });

    this.mapService.getStandardMaps().subscribe(maps => {
      this.mapValues = maps;
    });
  }

  updateHeroes(hero: Hero, event) {
    if (event.target.checked) {
      this.model.addHero(hero);
    } else {
      this.model.deleteHero(hero);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.model.matchDate = new Date();
    this.model.appUser = JSON.parse(localStorage.getItem('currentUser'));

    this.matchService.saveNewMatch(this.model);
  }

}
