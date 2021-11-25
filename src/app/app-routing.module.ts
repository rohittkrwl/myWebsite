import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { DetailsComponent } from './details/details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkexComponent } from './workex/workex.component';

const routes: Routes = [
  {path:'', redirectTo: '/details', pathMatch: 'full'},
  {path:'details', component : DetailsComponent},
  {path:'career', component : CareerComponent},
  {path:'workex', component : WorkexComponent},
  {path:'skills', component : SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
