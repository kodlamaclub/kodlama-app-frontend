import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {DesignModule} from "@design/design.module";
import {BrowseComponent} from "@feature/home/browse/browse.component";


@NgModule({
  declarations: [
    HomeComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DesignModule
  ]
})
export class HomeModule { }
