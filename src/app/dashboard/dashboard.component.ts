import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/shared/services/stock.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    stocks: any[] = [
        { productName: 'Product 1', category: 'Category 1', quantity: 10, price: 100 },
        { productName: 'Product 2', category: 'Category 2', quantity: 15, price: 150 },
        { productName: 'Product 3', category: 'Category 3', quantity: 20, price: 200 },
        // Add 10 more static records
        { productName: 'Product 4', category: 'Category 1', quantity: 8, price: 80 },
        { productName: 'Product 5', category: 'Category 2', quantity: 12, price: 120 },
        { productName: 'Product 6', category: 'Category 3', quantity: 18, price: 180 },
        { productName: 'Product 7', category: 'Category 1', quantity: 6, price: 60 },
        { productName: 'Product 8', category: 'Category 2', quantity: 14, price: 140 },
        { productName: 'Product 9', category: 'Category 3', quantity: 22, price: 220 },
        { productName: 'Product 10', category: 'Category 1', quantity: 4, price: 40 }
        // Add more static records as needed
    ];;

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
