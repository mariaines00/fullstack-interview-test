import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { ShiftService } from './../services/shifts/shift.service';

@Component({
	selector: 'app-create-shifts',
	templateUrl: './create-shifts.component.html',
	styleUrls: ['./create-shifts.component.css']
})
export class CreateShiftsComponent implements OnInit {

	constructor(
		private service: ShiftService,
		private router: Router
	) { }

	ngOnInit() {
	}

	/**
	 * Gets the ui form values and calls service
	 */
	createShift(name, picker, duration) {
		this.service.createShift(name.value,picker._validSelected, duration.value)
			.subscribe(	
				next => {
					this.router.navigate(['/display-shifts'])
				},
				error => {
					console.error(error);
				}
			)

	}

}
