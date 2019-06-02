import { Component, OnInit } from '@angular/core';

import { ShiftService } from './../services/shifts/shift.service';

@Component({
	selector: 'app-display-shifts',
	templateUrl: './display-shifts.component.html',
	styleUrls: ['./display-shifts.component.css']
})
export class DisplayShiftsComponent implements OnInit {

	shiftData: any;
	displayedColumns: string[] = ['person', 'start_date', 'duration'];

	constructor(
		private service: ShiftService
	) { }

	ngOnInit() {		
		this.service.getShifts()
			.subscribe(
				response => {this.shiftData = response}
			)
	}

}
