import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
})
export class DesignModule {
}
