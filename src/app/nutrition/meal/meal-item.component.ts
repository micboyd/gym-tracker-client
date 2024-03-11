import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { MealItemService} from "./meal-item.service";
import { FormControl, FormGroup } from "@angular/forms";
import { IMeal } from "../../shared/models/nutrition/Meal";
import { UserService } from "../../shared/services/user.service";

@Component({
    selector: 'app-meal-item',
    templateUrl: 'meal-item.component.html'
})

export class MealItemComponent implements OnInit {

    constructor () {}

    ngOnInit() {}
}
