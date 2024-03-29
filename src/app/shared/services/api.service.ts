import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	headers = {
		'Content-Type': 'application/json',
	};

	post<T>(
		payload: T,
		endpointUrl: string,
		identifier?: string[]
	): Observable<any> {

		return this.http.post(
			this.formattedUrl(endpointUrl, identifier),
            this.json(payload),
			{
				headers: this.headers,
			}
		);
	}

	put<T>(
		payload: T,
		endpointUrl: string,
		identifier?: string[]
	): Observable<any> {

		return this.http.put(
			this.formattedUrl(endpointUrl, identifier),
            this.json(payload),
			{
				headers: this.headers,
			}
		);
	}

	get(endpointUrl: string, identifier?: string[]): Observable<any> {
		return this.http.get(this.formattedUrl(endpointUrl, identifier));
	}

	delete(endpointUrl: string, identifier?: string[]): Observable<any> {
		return this.http.delete(this.formattedUrl(endpointUrl, identifier));
	}

    json<T>(payload: T) {
        return JSON.stringify(payload);
    }

	private formattedUrl(endpointUrl: string, identifier?: string[]): string {
		let formattedUrl;

		if (identifier) {
			formattedUrl = `${endpointUrl}/${identifier?.join('/')}`;
		} else {
			formattedUrl = endpointUrl;
		}

		return `${environment.endpointUrl}/${formattedUrl}`;
	}
}
