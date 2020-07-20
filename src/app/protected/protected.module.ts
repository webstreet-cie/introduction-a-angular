import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { TrainingModule } from './training/training.module';
import { SessionModule } from './session/session.module';
import { BlogModule } from './blog/blog.module';
import { PurchaseModule } from './purchase/purchase.module';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { ReferentialsModule } from './referentials/referentials.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    TrainingModule,
    SessionModule,
    BlogModule,
    PurchaseModule,
    UserModule,
    AccountModule,
    ReferentialsModule
  ]
})
export class ProtectedModule { }
