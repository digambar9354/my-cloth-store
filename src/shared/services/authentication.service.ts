// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>('api/login', { username, password }).pipe(
            tap(response => {
                // Store authentication token in localStorage
                localStorage.setItem('token', response.token);
            })
        );
    }

    logout(): void {
        // Clear authentication token from localStorage
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        // Check if authentication token exists in localStorage
        return !!localStorage.getItem('token');
    }
}
