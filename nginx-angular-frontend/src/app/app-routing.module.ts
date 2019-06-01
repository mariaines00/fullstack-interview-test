import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageShiftsComponent } from './manage-shifts/manage-shifts.component';
import { DisplayShiftsComponent } from './display-shifts/display-shifts.component';

const routes: Routes = [
	{ path: '', redirectTo: 'display-shifts', pathMatch: 'full'},
	{ path: 'manage-shifts', component: ManageShiftsComponent },
	{ path: 'display-shifts', component: DisplayShiftsComponent },
	{ path: '*', redirectTo: 'display-shifts', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }