import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @ViewChild('sidenav') sidenav!: MatSidenav;

    constructor() { }

    toggleSidenav() {
        this.sidenav.toggle();
    }
}
