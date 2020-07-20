import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { LevelListComponent } from './level-list/level-list.component';
import { LevelUpdateComponent } from './level-update/level-update.component';
import { LevelCreateComponent } from './level-create/level-create.component';
import { ModalityListComponent } from './modality-list/modality-list.component';
import { ModalityUpdateComponent } from './modality-update/modality-update.component';
import { ModalityCreateComponent } from './modality-create/modality-create.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusUpdateComponent } from './status-update/status-update.component';
import { StatusCreateComponent } from './status-create/status-create.component';



@NgModule({
  declarations: [CategoryListComponent, CategoryUpdateComponent, CategoryCreateComponent, LevelListComponent, LevelUpdateComponent, LevelCreateComponent, ModalityListComponent, ModalityUpdateComponent, ModalityCreateComponent, SkillListComponent, SkillUpdateComponent, SkillCreateComponent, StatusListComponent, StatusUpdateComponent, StatusCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ReferentialsModule { }
