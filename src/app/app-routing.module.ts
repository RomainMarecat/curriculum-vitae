import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'experiences', component: AboutComponent },
  { path: '**', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
