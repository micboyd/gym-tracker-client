import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
	selector: 'app-title-button',
	templateUrl: 'title-button.component.html',
	styleUrls: ['title-button.component.scss']
})

export class TitleButtonComponent {

	@Output()
	buttonClickEvent: EventEmitter<boolean>;

	@Input()
	title: string = '';

	@Input()
	buttonLabel: string = '';

	constructor() {
	}

	buttonClick() {
		this.buttonClickEvent.emit(true);
	}
}
