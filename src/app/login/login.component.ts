import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router) { }

    value: string;
    position = 'tl';
    nativeValue: string = '';
    disabled = false;
    open = false;
    co: string = 'Nessuna Centrale Selezionata';
    selected = false;

    ngOnInit() { }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    select(choice) {
        console.log("choice is: " + choice)
        this.selected = true;
        this.co = choice;
    }

    get pTop() {
        return (this.position === 'tl' || this.position === 'tr') ? 0 : null;
    }

    get pBottom() {
        return (this.position === 'bl' || this.position === 'br') ? 0 : null;
    }

    get pLeft() {
        return (this.position === 'tl' || this.position === 'bl') ? 0 : null;
    }

    get pRight() {
        return (this.position === 'tr' || this.position === 'br') ? 0 : null;
    }
}
