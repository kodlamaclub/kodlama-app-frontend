import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DesignModule} from "@design/design.module";
import {BrowseComponent} from "@feature/home/browse/browse.component";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import { CourseListItemComponent } from './course-list-item/course-list-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    BrowseComponent,
    CourseListItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DesignModule,
    MatIconModule,
    FlexModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HomeModule {
}
