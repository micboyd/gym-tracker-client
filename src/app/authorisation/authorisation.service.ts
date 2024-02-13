import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/authorisation/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

import { SessionDetails } from '../shared/models/authorisation/SessionDetails';
import { ApiService } from '../shared/services/api.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	route: string = 'authentication';

	constructor(
		private http: HttpClient,
		private router: Router,
		private apiHelper: ApiService,
	) {}

	userAuthentication(payload: User): Observable<any> {
		return this.apiHelper.post(payload, `${this.route}/login`);
	}

	userRegistration(payload: User): Observable<any> {
		return this.apiHelper.post(payload, `${this.route}/register`);
	}

	isAuthenticated(): boolean {
		const jwtHelper: JwtHelperService = new JwtHelperService();
		const token = this.currentToken;

		if (token) {
			return !jwtHelper.isTokenExpired(token);
		} else {
			return false;
		}
	}

	storeSessionDetails(sessionDetails: SessionDetails) {
		localStorage.setItem('isAdmin', sessionDetails.isAdmin);
		localStorage.setItem('token', sessionDetails.token);
		localStorage.setItem('userId', sessionDetails.userId);
		localStorage.setItem('username', sessionDetails.username);
		localStorage.setItem('fullName', sessionDetails.fullName);
		localStorage.setItem('profilePictureUrl', sessionDetails.profilePictureUrl);
	}

	logout() {
		void this.router.navigate(['/login']);
		localStorage.clear();
	}

	canActivate(): boolean {
		if (!this.isAuthenticated()) {
			void this.router.navigate(['login']);
			return false;
		}
		return true;
	}

	get currentUsername(): string {
		const username = localStorage.getItem('username');
		return username ? username : '';
	}

	get currentUserId(): string {
		const userId = localStorage.getItem('userId');
		return userId ? userId : '';
	}

	get currentFullName(): string {
		const fullName = localStorage.getItem('fullName');
		return fullName ? fullName : '';
	}

	get currentProfilePictureUrl(): string {
		const profilePictureUrl = localStorage.getItem('profilePictureUrl');
		return profilePictureUrl ? profilePictureUrl : '';
	}

	get currentToken(): string {
		const token = localStorage.getItem('token');
		return token ? token : '';
	}
}
