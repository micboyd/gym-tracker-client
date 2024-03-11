import { Component } from "@angular/core";
import { NavigationItem } from "../../models/NavigationItem";

@Component({
	selector: 'app-navigation',
	templateUrl: 'nav.component.html',
	styleUrls: ['nav.component.scss']
})

export class NavigationComponent {

	navOpen: boolean;
	navItems: Array<NavigationItem>;

	constructor() {
		this.navOpen = false;

		this.navItems = [
			{
				label: 'Home',
				route: 'dashboard'
			},
			{
				label: 'Strength',
				route: 'strength/workout-records'
			},
			{
				label: 'Nutrition',
				route: 'nutrition'
			}
		];
	}

	openNav() {
		this.navOpen = true;
	}

	closeNav() {
		this.navOpen = false;
	}
}
