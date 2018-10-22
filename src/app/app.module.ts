import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HomeComponent} from './home/home.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroService} from './_services/hero.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'heroes', component: HeroListComponent},
  {path: 'hero/:heroId', component: HeroDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomeComponent,
    HeroListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
