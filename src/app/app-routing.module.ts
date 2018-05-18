import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './common/component/button/button.component';
import { ResumeComponent } from './Resume/resume.component';
// const routes: Routes =[
//     {path:'library',component: ButtonComponent},
//     {path:'resume', component: ResumeComponent},
//     {path:'src', component: ResumeComponent},
//     {path:'xxx', component: ButtonComponent},
//     { path: '',
//     redirectTo: '/library',
//     pathMatch: 'full'
//     },
//     { path: '**', component: ResumeComponent}
// ];

const routes: Routes = [
        //{ path: 'src', component: ButtonComponent},
    // { path: '', component: ButtonComponent},
    // { path: 'src', loadChildren: './Library/library.module#LibraryModule'},
    // { path: 'resume', loadChildren: './src/app/Resume/resume.module#ResumeModule'},

     { path: 'src/library', loadChildren: './app/Library/library.module#LibraryModule'},

//{ path: 'library', component: ResumeComponent},
    {path:'src', component: ButtonComponent, children:[
        {path:'resume', loadChildren: './Resume/resume.module#ResumeModule'},
        {path:'libiary', loadChildren: './Library/library.module#LibraryModule'}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{}