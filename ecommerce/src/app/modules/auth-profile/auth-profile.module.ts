import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthProfileRoutingModule } from './auth-profile-routing.module';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthProfileComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthProfileRoutingModule, SharedModule],
})
export class AuthProfileModule {}
