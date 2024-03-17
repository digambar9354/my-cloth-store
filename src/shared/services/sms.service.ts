// sms.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SmsService {
    private apiUrl = 'YOUR_SMS_SERVICE_API_URL';
    private apiKey = 'YOUR_SMS_SERVICE_API_KEY';

    constructor(private http: HttpClient) { }

    sendSMS(phoneNumber: string, message: string): Observable<any> {
        const payload = {
            to: phoneNumber,
            body: message
        };
        return this.http.post<any>(this.apiUrl, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
    }
}
