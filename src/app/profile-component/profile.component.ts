import { Component } from '@angular/core';

@Component({
	selector: 'app-profile',
	template:
	`
		<div>
			<h3>Profile</h3>
			<p>Name: {{ name }}</p>
			<p>Age: {{ age }}</p>
			<p>Hotness: {{ hotness }}</p>
		</div>

	`,
})

export class profileComponent {
	name = 'Melanie';
	age = 29;
	hotness = '10/10';
}