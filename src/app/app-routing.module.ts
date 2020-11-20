import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Depth1Component } from './depth1/depth1.component';
import { Depth1childComponent } from './depth1child/depth1child.component';


const routes: Routes = [
    { path: 'depth-test', children: [

        { path: '', redirectTo: '/depth-test/depth-1', pathMatch: 'full' },

        { path: 'depth-1', component: Depth1Component, children: [

            { path: '', redirectTo: '/depth-test/depth-1/child-depth-1', pathMatch: 'full' },
            { path: 'child-depth-1', component: Depth1childComponent }

        ] }

    ] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}