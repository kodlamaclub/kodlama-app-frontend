import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "@design/header/header.component";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
})
export class DesignModule {
}
