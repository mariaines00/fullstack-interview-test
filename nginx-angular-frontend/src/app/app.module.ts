import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* app components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateShiftsComponent } from './create-shifts/create-shifts.component';
import { DisplayShiftsComponent } from './display-shifts/display-shifts.component';

/* app services */
import { ShiftService } from './services/shifts/shift.service';

/* material imports */
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
		CreateShiftsComponent,
		DisplayShiftsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatTableModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule

	],
	providers: [ ShiftService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
