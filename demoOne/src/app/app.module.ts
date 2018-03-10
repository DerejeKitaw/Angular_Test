import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TwainComponent } from './twain/twain.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TwainService } from './twain/twain.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './hero/hero.service';
import { UserService } from './shared/user.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BannerComponent,
    WelcomeComponent,
    TwainComponent
  ],
  providers: [HeroService,
    TwainService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
