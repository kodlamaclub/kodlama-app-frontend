import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import { LogoComponent } from './logo/logo.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { UserComponent } from './user/user.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    LogoComponent,
    UserComponent
  ],
    imports: [
        RouterModule,
        CommonModule,
        MatIconModule,
        FlexModule,
        MatSidenavModule,
        MatButtonModule,
    ],
})
export class DesignModule {
}
