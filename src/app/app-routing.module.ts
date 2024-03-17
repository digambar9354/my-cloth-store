// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockComponent } from './add-stock/add-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { SellComponent } from './sell/sell.component';
import { StockVisualizationComponent } from './stock-visualization/stock-visualization.component';
import { SmsComponent } from './sms/sms.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    { path: 'add-stock', component: AddStockComponent },
    { path: 'stock-list', component: StockListComponent },
    { path: 'sell', component: SellComponent },
    { path: 'stock-visualization', component: StockVisualizationComponent },
    { path: 'sms', component: SmsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: '/stock-list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
