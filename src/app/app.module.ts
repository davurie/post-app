import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
