// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000'; // Replace with your backend API URL

    constructor(private http: HttpClient) { }

    login(credentials: { username: string; password: string }): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/api/login`, credentials).pipe(
            map(response => {
                // Store authentication token and user data in local storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                return response;
            }),
            catchError(error => {
                return of(error);
            })
        );
    }

    logout(): void {
        // Clear authentication token and user data from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    isLoggedIn(): boolean {
        // Check if authentication token exists in local storage
        return !!localStorage.getItem('token');
    }
}
