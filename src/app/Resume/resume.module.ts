import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component'

const routes: Routes = [
    { path: '', component: ResumeComponent }
];

@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes)],
    declarations:[ResumeComponent]
})

export class ResumeModule{}