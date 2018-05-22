import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/home.component';

const routes: Routes =[
    {path:'library', loadChildren: 'src/app/Library/library.module#LibraryModule'},
    {path:'resume', loadChildren: 'src/app/Resume/resume.module#ResumeModule'},
    {path: 'src/home', component: HomeComponent},
    { path: 'src',
    redirectTo: '/src/home',
    pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{}