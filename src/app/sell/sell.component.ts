import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html'
})
export class SellComponent implements OnInit {
    sellForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.sellForm = this.formBuilder.group({
            customerName: ['', Validators.required],
            mobileNumber: ['', Validators.required],
            quantity: [1, [Validators.required, Validators.min(1)]],
            sellingPrice: ['', [Validators.required, Validators.min(0.01)]],
            creditSale: [false],
            discount: [0]
        });
    }

    // Convenience getter for easy access to form fields
    get f() { return this.sellForm.controls; }

    onSubmit() {
        if (this.sellForm.invalid) {
            return;
        }

        // TODO: Implement selling functionality
        console.log('Product sold!');
        console.log('Customer Name:', this.f['customerName'].value);
        console.log('Mobile Number:', this.f['mobileNumber'].value);
        console.log('Quantity:', this.f['quantity'].value);
        console.log('Selling Price:', this.f['sellingPrice'].value);
        console.log('Credit Sale:', this.f['creditSale'].value);
        console.log('Discount:', this.f['discount'].value);

        // Here you would typically send sell request to server
    }
}
