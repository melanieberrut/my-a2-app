import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-image',
	template: '<img src="{{imageUrl}}" />',
})

export class ImageComponent {
	@Input() imageUrl;
}