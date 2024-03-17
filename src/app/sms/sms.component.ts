import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sms',
    templateUrl: './sms.component.html'
})
export class SmsComponent implements OnInit {
    smsForm!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.smsForm = this.fb.group({
            recipientNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
            message: ['', Validators.required]
        });
    }

    get f() {
        return this.smsForm.controls;
    }

    sendSMS() {
        if (this.smsForm.valid) {
            const recipientNumber = this.smsForm.value.recipientNumber;
            const message = this.smsForm.value.message;

            // Here you can implement the logic to send the SMS
            console.log(`Sending SMS to ${recipientNumber}: ${message}`);

            // Clear the form after sending the SMS
            this.smsForm.reset();
        }
    }
}
