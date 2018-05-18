import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';

const routes: Routes = [
    { path: 'resume', component: ResumeComponent }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[ResumeRoutingModule]
})

export class ResumeRoutingModule{}