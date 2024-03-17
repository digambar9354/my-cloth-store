// stock.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StockService {
    private apiUrl = 'https://example.com/api/stocks'; // Replace this with your actual API endpoint

    constructor(private http: HttpClient) { }

    addStock(stockData: any, purchaseDocument: File): Observable<any> {
        const formData = new FormData();
        formData.append('name', stockData.name);
        formData.append('category', stockData.category);
        formData.append('quantity', stockData.quantity);
        formData.append('price', stockData.price);
        formData.append('supplier', stockData.supplier);
        formData.append('purchaseDate', stockData.purchaseDate);
        formData.append('additionalCharges', stockData.additionalCharges);

        if (purchaseDocument) {
            formData.append('purchaseDocument', purchaseDocument, purchaseDocument.name);
        }

        return this.http.post<any>(this.apiUrl, formData);
    }

    getStocks(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getStocksData(): Observable<any[]> {
        // Mock data for demonstration, replace with actual API call
        return new Observable<any[]>(observer => {
            const mockData = [
                { name: 'Product A', value: 100 },
                { name: 'Product B', value: 200 },
                { name: 'Product C', value: 150 },
                { name: 'Product D', value: 300 },
            ];
            observer.next(mockData);
            observer.complete();
        });
    }
}
