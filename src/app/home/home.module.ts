import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule
    ]
})
export class HomeModule {

}