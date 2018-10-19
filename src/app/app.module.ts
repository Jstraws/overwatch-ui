import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HomeComponent} from './home/home.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroService} from './hero.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'heroes', component: HeroListComponent},
  {path: 'hero/:heroId', component: HeroDetailComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomeComponent,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
