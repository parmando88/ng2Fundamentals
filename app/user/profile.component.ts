import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service'


@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
     em {float:right; color:#E05C65; paddin-left:10px}
     .error input {background-color:#E3C3C5;}
     .error ::-webkit-input-placeholder { color: #999;}
     .error ::-moz-placeholder { color: #999;}
     .error :-moz-placeholder { color: #999;}
     .error ::ms-input-placeholder { color: #999;}
  `]

})
export class ProfileComponent implements OnInit {
profileForm: FormGroup;
firstName: FormControl;
lastName: FormControl;

constructor(private _authService:AuthService, private _router: Router, @Inject(TOASTR_TOKEN) private _toastr: Toastr){}

       ngOnInit(){
         this.firstName = new FormControl(this._authService.currentUser.firstName, [Validators.required,
         Validators.pattern('[a-zA-Z].*')])
         this.lastName = new FormControl(this._authService.currentUser.lastName, Validators.required)

         this.profileForm = new FormGroup({
           firstName: this.firstName,
           lastName: this.lastName
         })
       }

       saveProfile(formValues){
         if(this.profileForm.valid){
        this._authService.updateCurrentUser(formValues.firstName, formValues.lastName)
            .subscribe(()=> {
               this._toastr.success('Profile Saved');
            });
      
       // this._router.navigate(['/events'])
         }
       }

       cancel(){
         this._router.navigate(['/events'])
       }

       validateFirstName(){
       return  (this.firstName.valid || this.firstName.untouched)
       }
        validateLastName(){
       return  (this.lastName.valid || this.lastName.untouched)
      }
      
      logout() {
        this._authService.logout().subscribe(() => {
           this._router.navigate(['/user/login']);
        })
      }
}