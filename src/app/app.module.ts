import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: HammerGestureConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
