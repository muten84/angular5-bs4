import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '@blox/material';

@NgModule({
    imports: [MaterialModule, CommonModule, LoginRoutingModule],
    declarations: [LoginComponent]
})
export class LoginModule { }
