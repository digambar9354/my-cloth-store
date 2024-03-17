// add-stock.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from 'src/shared/services/stock.service';


@Component({
    selector: 'app-add-stock',
    templateUrl: './add-stock.component.html'
})
export class AddStockComponent implements OnInit {
    stockForm!: FormGroup;
    purchaseDocument!: File;

    constructor(
        private formBuilder: FormBuilder,
        private stockService: StockService
    ) { }

    ngOnInit() {
        this.stockForm = this.formBuilder.group({
            productName: ['', Validators.required],
            category: ['', Validators.required],
            quantity: [null, [Validators.required, Validators.min(1)]],
            price: [null, [Validators.required, Validators.min(0.01)]],
            supplier: ['', Validators.required],
            purchaseDate: ['', Validators.required],
            additionalCharges: [null],
            purchaseDocument: [null]
        });
    }

    submitForm() {
        if (this.stockForm.invalid) {
            return;
        }

        const formData = this.prepareFormData();
        this.stockService.addStock(formData, this.purchaseDocument).subscribe(
            response => {
                console.log('Stock added successfully:', response);
                this.stockForm.reset();
                this.purchaseDocument;
            },
            error => {
                console.error('Error adding stock:', error);
            }
        );
    }

    handleFileInput(event: any) {
        this.purchaseDocument = event.target.files[0];
    }

    private prepareFormData(): FormData {
        const formData = new FormData();
        const formValue = this.stockForm.value;
        Object.keys(formValue).forEach(key => {
            formData.append(key, formValue[key]);
        });
        return formData;
    }
}
