import { Injectable } from '@angular/core';
import {ApiService} from "../../shared/services/api.service";

@Injectable({
    providedIn: 'root',
})

export class MealItemService {
    constructor(private apiHelper: ApiService) {}

    route: string = 'nutrition';

    getSingleMeal(id: string) {
        return this.apiHelper.get(`${this.route}/single-meal`, [id]);
    }
}
