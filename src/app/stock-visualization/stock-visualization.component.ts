import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockService } from 'src/shared/services/stock.service';

@Component({
    selector: 'app-stock-visualization',
    templateUrl: './stock-visualization.component.html'
})
export class StockVisualizationComponent implements OnInit {
    stocksData!: Observable<any[]>;

    // ngx-charts options
    view: [number, number] = [700, 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    legendTitle = 'Legend';
    legendPosition = 'right';
    showXAxisLabel = true;
    xAxisLabel = 'Product';
    showYAxisLabel = true;
    yAxisLabel = 'Quantity';
    showDataLabel = true;
    animations = true;

    constructor(private stockService: StockService) { }

    ngOnInit() {
        this.stocksData = this.stockService.getStocksData();
    }

    onSelect(event: any) {
        console.log(event);
    }
}
