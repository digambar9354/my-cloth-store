import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // Convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        // TODO: Implement login functionality
        console.log('Logged in successfully!');
        console.log('Username:', this.f['username'].value);
        console.log('Password:', this.f['password'].value);

        // Here you would typically send login request to server
    }
}
