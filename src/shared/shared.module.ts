// shared.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// Import other Angular Material modules as needed

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule, 
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule

        // Add other Angular Material modules as needed
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule
        // Export other Angular Material modules as needed
    ]
})
export class SharedModule { }
