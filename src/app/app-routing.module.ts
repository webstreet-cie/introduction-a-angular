//protected
import { AdminComponent } from './protected/admin/admin.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';

import { TrainingListComponent as AdminTrainingListComponent } from './protected/training/training-list/training-list.component';
import { TrainingCreateComponent as AdminTrainingCreateComponent } from './protected/training/training-create/training-create.component';
import { TrainingUpdateComponent as AdminTrainingUpdateComponent } from './protected/training/training-update/training-update.component';

import { SessionListTrainerComponent as  AdminSessionListTrainerComponent} from './protected/session/session-list-trainer/session-list-trainer.component';
import { SessionListParticipantComponent as AdminSessionListParticipantComponent } from './protected/session/session-list-participant/session-list-participant.component';
import { SessionListComponent as AdminSessionListComponent } from './protected/session/session-list/session-list.component';
import { SessionCreateComponent  as AdminSessionCreateComponent} from './protected/session/session-create/session-create.component';
import { SessionUpdateComponent as AdminSessionUpdateComponent} from './protected/session/session-update/session-update.component';

import { BlogListComponent as AdminBlogListComponent } from './protected/blog/blog-list/blog-list.component';
import { BlogUpdateComponent as AdminBlogUpdateComponent } from './protected/blog/blog-update/blog-update.component';
import { BlogCreateComponent as AdminBlogCreateComponent} from './protected/blog/blog-create/blog-create.component';
import { BlogListTrainerComponent as AdminBlogListTrainerComponent } from './protected/blog/blog-list-trainer/blog-list-trainer.component';

import { PurchaseListComponent } from './protected/purchase/purchase-list/purchase-list.component';

import { UserListComponent } from './protected/user/user-list/user-list.component';
import { UserDetailComponent } from './protected/user/user-detail/user-detail.component';
import { UserCreateComponent } from './protected/user/user-create/user-create.component';
import { UserUpdateComponent } from './protected/user/user-update/user-update.component';

import { CategoryUpdateComponent } from './protected/referentials/category-update/category-update.component';
import { CategoryCreateComponent } from './protected/referentials/category-create/category-create.component';
import { CategoryListComponent } from './protected/referentials/category-list/category-list.component';

import { LevelUpdateComponent } from './protected/referentials/level-update/level-update.component';
import { LevelCreateComponent } from './protected/referentials/level-create/level-create.component';
import { LevelListComponent } from './protected/referentials/level-list/level-list.component';

import { ModalityUpdateComponent } from './protected/referentials/modality-update/modality-update.component';
import { ModalityCreateComponent } from './protected/referentials/modality-create/modality-create.component';
import { ModalityListComponent } from './protected/referentials/modality-list/modality-list.component';

import { SkillUpdateComponent } from './protected/referentials/skill-update/skill-update.component';
import { SkillCreateComponent } from './protected/referentials/skill-create/skill-create.component';
import { SkillListComponent } from './protected/referentials/skill-list/skill-list.component';

import { InvoiceDetailComponent } from './protected/account/invoice-detail/invoice-detail.component';
import { PurchaseHistoryComponent } from './protected/account/purchase-history/purchase-history.component';
import { TrainerRateGainComponent } from './protected/account/trainer-rate-gain/trainer-rate-gain.component';
import { PaymentParametersComponent } from './protected/account/payment-parameters/payment-parameters.component';
import { ProfileComponent } from './protected/account/profile/profile.component';
import { AccountComponent } from './protected/account/account/account.component';

//public
import { NotFoundComponent } from './public/spare-pages/not-found/not-found.component';
import { SitemapComponent } from './public/spare-pages/sitemap/sitemap.component';
import { ConditionsComponent } from './public/spare-pages/conditions/conditions.component';
import { ConfidentialityComponent } from './public/spare-pages/confidentiality/confidentiality.component';
import { ContactComponent } from './public/spare-pages/contact/contact.component';
import { AboutComponent } from './public/spare-pages/about/about.component';
import { ForgottenPasswordComponent } from './public/spare-pages/forgotten-password/forgotten-password.component';
import { RegistrationComponent } from './public/spare-pages/registration/registration.component';
import { ConnexionComponent } from './public/spare-pages/connexion/connexion.component';
import { CartComponent } from './public/spare-pages/cart/cart.component';
import { BecomeATrainerComponent } from './public/spare-pages/become-atrainer/become-atrainer.component';
import { BlogDetailComponent } from './public/blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './public/blog/blog-list/blog-list.component';
import { SessionDetailComponent } from './public/session/session-detail/session-detail.component';
import { SessionListComponent } from './public/session/session-list/session-list.component';
import { TrainingDetailComponent } from './public/training/training-detail/training-detail.component';
import { TrainingListComponent } from './public/training/training-list/training-list.component';
import { HomeComponent } from './public/home/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'fr', pathMatch: 'full'},
    { path: 'fr',component:HomeComponent},

     {path: 'fr/formations', component: TrainingListComponent },
    { path: 'fr/formations/:slug/:id', component: TrainingDetailComponent },
    {path: 'fr/sessions', component:SessionListComponent},
    {path:'fr/sessions/:slug/:id', component:SessionDetailComponent},
    {path:'fr/blog',component:BlogListComponent},
    {path:'fr/blog/:slug/:id',component:BlogDetailComponent},
    {path:'fr/devenir-formateur', component:BecomeATrainerComponent},
    {path:'fr/panier',component:CartComponent},
    {path:'fr/connexion',component:ConnexionComponent},
    {path:'fr/inscription',component:RegistrationComponent},
    {path:'fr/mot-de-passe-perdu',component: ForgottenPasswordComponent},
    {path:'fr/a-propos', component:AboutComponent},
    {path:'fr/contact', component:ContactComponent},
    {path:'fr/confidentialite', component:ConfidentialityComponent},
    {path:'fr/conditions', component:ConditionsComponent},
    {path:'fr/plan-du-site', component:SitemapComponent},

    { path: 'fr/admin', 
    component: AdminComponent,
    canActivate: [],
    children: [ 
    {path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full'},
    {path:'tableau-de-bord', component:DashboardComponent},
    {path:'formations', component:AdminTrainingListComponent},
    {path:'formations/creer', component:AdminTrainingCreateComponent},
    {path:'formations/modifier/:id', component:AdminTrainingUpdateComponent},
    {path:'sessions', component:AdminSessionListComponent},
    {path:'sessions/creer', component:AdminSessionCreateComponent},
    {path:'sessions/modifier/id', component:AdminSessionUpdateComponent},
    {path:'sessions/formateur', component:AdminSessionListTrainerComponent},
    {path:'sessions/participant', component:AdminSessionListParticipantComponent},
    {path:'blog', component:AdminBlogListComponent},
    {path:'blog/creer', component:AdminBlogCreateComponent},
    {path:'blog/modifier/:id', component:AdminBlogUpdateComponent},
    {path:'blog/formateur', component:AdminBlogListTrainerComponent},

    {path:'achats', component:PurchaseListComponent},
    {path:'utilisateurs', component:UserListComponent},
    {path:'utilisateurs/creer', component:UserCreateComponent},
    {path:'utilisateurs/modifier/:id', component:UserUpdateComponent},
    {path:'utilisateurs/voir/:id', component:UserDetailComponent},

    {path:'categories', component:CategoryListComponent},
    {path:'categories/creer', component:CategoryCreateComponent},
    {path:'categories/modifier/:id', component:CategoryUpdateComponent},

    {path:'niveaux', component:LevelListComponent},
    {path:'niveaux/creer', component:LevelCreateComponent},
    {path:'niveaux/modifier/:id', component:LevelUpdateComponent},

    {path:'modalites', component:ModalityListComponent},
    {path:'modalites/creer', component:ModalityCreateComponent},
    {path:'modalites/modifier/:id', component:ModalityUpdateComponent},

    {path:'competences', component:SkillListComponent},
    {path:'competences/creer', component:SkillCreateComponent},
    {path:'competences/modifier/:id', component:SkillUpdateComponent},

    {path:'compte', component:AccountComponent},
    {path:'profil', component:ProfileComponent},
    {path:'parametres-reglement', component:PaymentParametersComponent},
    {path:'tarifs-gains-formateur', component:TrainerRateGainComponent},
    {path:'historique-achats', component:PurchaseHistoryComponent},
    {path:'facture/id', component:InvoiceDetailComponent}

    ]
    },
     {path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
