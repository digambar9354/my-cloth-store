// stock-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/shared/services/stock.service';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html'
})
export class StockListComponent implements OnInit {
    stocks: any[] = [];

    constructor(private stockService: StockService) { }

    ngOnInit() {
        this.loadStocks();
    }

    loadStocks() {
        this.stockService.getStocks().subscribe(
            (data: any[]) => {
                this.stocks = data;
            },
            error => {
                console.error('Error loading stocks:', error);
            }
        );
    }
}
