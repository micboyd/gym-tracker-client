import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../models/NavigationItem';

@Component({
	selector: 'app-sub-nav',
	templateUrl: 'subnav.component.html',
	styleUrls: ['subnav.component.scss']
})

export class SubnavComponent {
	constructor() {}

	@Input()
	navItems: Array<NavigationItem> = [];

	get navItemsAccess(): Array<NavigationItem> {
		return this.navItems;
	}
}
