import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor() {}

	get currentUser(): string {
		return localStorage.getItem('userId') || '';
	}

    get currentUserFullName(): string {
        return localStorage.getItem('fullName') || '';
    }
}
