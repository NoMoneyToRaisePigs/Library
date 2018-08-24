import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//import { HomeComponent } from './Home/home.component';
import { LayoutComponent } from './Layout/layout.component';

// const routes: Routes =[
//     {path:'library', loadChildren: 'src/app/Library/library.module#LibraryModule'}, // this is for Systemjs
//     {path:'resume', loadChildren: 'src/app/Resume/resume.module#ResumeModule'}, //this is for Systemjs
//     // {path:'library', loadChildren: './Library/library.module#LibraryModule'}, //this is for Webpack
//     // {path:'resume', loadChildren: './Resume/resume.module#ResumeModule'}, //this is for Webpack
//     {path: 'src/home', component: HomeComponent},
//     { path: 'src',
//     redirectTo: '/src/home',
//     pathMatch: 'full'
//     }
// ];

const routes: Routes =[
    {
        path:'',component: LayoutComponent, children:[
            {path:'Home', loadChildren: 'src/app/Home/home.module#HomeModule'},
            {path:'Library', loadChildren: 'src/app/Library/library.module#LibraryModule'},
            {path:'Resume', loadChildren: 'src/app/Resume/resume.module#ResumeModule'},
            {path:'', redirectTo:'Home', pathMatch:'full'}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{}