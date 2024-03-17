import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { SellComponent } from './sell/sell.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { SmsComponent } from './sms/sms.component';
import { StockVisualizationComponent } from './stock-visualization/stock-visualization.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        StockListComponent,
        SellComponent,
        AddStockComponent,
        SmsComponent,
        StockVisualizationComponent,
        LoginComponent,
        LogoutComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        SharedModule
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
