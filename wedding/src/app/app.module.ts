import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { MakeupComponent } from './makeup/makeup.component';
import { MehandiComponent } from './mehandi/mehandi.component';
import { ChoregrapherComponent } from './choregrapher/choregrapher.component';
import { LocationsComponent } from './locations/locations.component';
import { CaterersComponent } from './caterers/caterers.component';
import { DecorsComponent } from './decors/decors.component';
import { ClothingComponent } from './clothing/clothing.component';
import { DjComponent } from './dj/dj.component';
import { PlannerComponent } from './planner/planner.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './artist/artist.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mehandi', component: MehandiComponent },
  { path: 'explore/:keyword', component: CaterersComponent },
  { path: 'clothing', component: ClothingComponent },
  { path: 'dj', component: DjComponent },
  { path: 'artist', component: ArtistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PhotographerComponent,
    MakeupComponent,
    MehandiComponent,
    ChoregrapherComponent,
    LocationsComponent,
    CaterersComponent,
    DecorsComponent,
    ClothingComponent,
    DjComponent,
    PlannerComponent,
    LoginComponent,
    SignupComponent,
    ArtistComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
