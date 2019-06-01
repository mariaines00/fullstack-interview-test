import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/* app components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ManageShiftsComponent } from './manage-shifts/manage-shifts.component';
import { DisplayShiftsComponent } from './display-shifts/display-shifts.component';

/* material imports */
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		AppComponent,
		ManageShiftsComponent,
		DisplayShiftsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
