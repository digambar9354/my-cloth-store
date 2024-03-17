// logout.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent {
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout();
        // Redirect to the login page or another route upon successful logout
    }
}
