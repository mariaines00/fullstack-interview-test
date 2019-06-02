import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ShiftService {

	api_url: string;

	constructor(
		private http:HttpClient
	) { 
		this.api_url = environment.api_url;
	}

	/**
	 * Makes backend call to get all shifts
	 */
	getShifts(): Observable<any> {
		return this.http.get(this.api_url);
		//TODO: add pipes
	}

	/**
	 * Makes backend call to add new shift
	 */
	createShift(name, start_date, duration) {
		
		let body = {
			name: name,
			start_date: start_date,
			duration: duration
		}

		return this.http.put(this.api_url, body)
	}


}
