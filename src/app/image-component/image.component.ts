import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-image',
	template: '<div class="thumb"><img src="{{imageUrl}}" /></div>',
	styles: [
		`
			.thumb {
				width: 100px;
				height: 100px;
				padding: 10px;
			}
			.thumb img {
				height: 100%;
				width: auto;
			}
		`
	]
})

export class ImageComponent {
	@Input() imageUrl;
}