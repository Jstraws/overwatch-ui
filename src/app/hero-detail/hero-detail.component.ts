import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('heroId');
    console.log(id);

    this.heroService.get(id).subscribe(data => {
      this.hero = data;
    });
  }
}
