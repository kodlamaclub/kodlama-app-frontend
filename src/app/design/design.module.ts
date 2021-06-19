import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import { LogoComponent } from './logo/logo.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    LogoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    FlexModule,
    MatSidenavModule,
  ],
})
export class DesignModule {
}
