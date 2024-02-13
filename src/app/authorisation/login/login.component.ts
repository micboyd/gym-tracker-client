import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../authorisation.service';
import { SessionDetails } from '../../shared/models/authorisation/SessionDetails';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

	private _loading: boolean = false;

	loginForm: FormGroup;
	currentUser: SessionDetails;
	errorMessage: string = '';

	get loaded(): boolean {
		return !this._loading;
	}

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		localStorage.clear();

		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
	}

	onSubmit(): void {
		this._loading = true;
		this.authService.userAuthentication(this.loginForm.value).subscribe({
			error: (error) => {
				this._loading = false;
				this.backendErrorHandling(error);
			},
			next: (data) => {
				this._loading = false;
				this.currentUser = data;
				this.storeLoginData(this.currentUser);
			},
		});
	}

	private backendErrorHandling(errorObject: any): void {
		if (errorObject.statusText === 'Unknown Error') {
			this.errorMessage =
				'An unknown error has occurred, please try again later.';
		} else {
			this.errorMessage = errorObject.error;
		}
	}

	private storeLoginData(currentUser: SessionDetails): void {
		this.authService.storeSessionDetails(currentUser);
		void this.router.navigate(['/home/dashboard']);
	}
}
