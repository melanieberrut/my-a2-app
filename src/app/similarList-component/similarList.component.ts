import { Component } from '@angular/core';

@Component({
	selector: 'app-similarList',
	template: `
		<div>
			<h3>Similar Matches</h3>
			<ul>
				<li *ngFor="let profile of profiles">
					<app-shortprofile [pf]="profile"></app-shortprofile>
				</li>
			</ul>
		</div>
	`,
})

export class similarListComponent {
	profiles = [
		'Hot man',
		'Hot woman',
		'Hot dog',
	];
}