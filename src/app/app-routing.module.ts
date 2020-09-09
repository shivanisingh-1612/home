import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path:'about', component: AboutComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'resume', component: ResumeComponent},
  { path: 'achievements', component: AchievementsComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
