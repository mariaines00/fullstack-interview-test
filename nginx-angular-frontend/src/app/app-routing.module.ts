import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateShiftsComponent } from './create-shifts/create-shifts.component';
import { DisplayShiftsComponent } from './display-shifts/display-shifts.component';

const routes: Routes = [
	{ path: '', redirectTo: 'display-shifts', pathMatch: 'full'},
	{ path: 'create-shifts', component: CreateShiftsComponent },
	{ path: 'display-shifts', component: DisplayShiftsComponent },
	{ path: '*', redirectTo: 'display-shifts', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }