import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SidenavComponent} from "./sidenav/sidenav.component";

@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
})
export class DesignModule {
}
