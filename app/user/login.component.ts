import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styles: [`
    em {float:right; color:#E05C65; paddin-left:10px}
    `]
})
export class LoginComponent implements OnInit {
    constructor(private _authService: AuthService, private _router:Router) { }

    ngOnInit() { }

    login(formValues) {
        this._authService.loginUser(formValues.userName, formValues.password);

        this._router.navigate(['/events'])
    }

    cancel(){
         this._router.navigate(['/events'])
    }
}