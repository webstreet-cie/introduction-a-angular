import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [UserListComponent, UserUpdateComponent, UserCreateComponent, UserDetailComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
