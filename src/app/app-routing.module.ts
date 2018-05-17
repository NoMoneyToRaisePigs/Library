import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './common/component/button/button.component';
import { ResumeComponent } from './Resume/resume.component';
const routes: Routes =[
    {path:'library',component: ButtonComponent},
    {path:'resume', component: ResumeComponent},
    {path:'src', component: ResumeComponent},
    {path:'xxx', component: ButtonComponent},
    { path: '',
    redirectTo: '/library',
    pathMatch: 'full'
    },
    { path: '**', component: ResumeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{}