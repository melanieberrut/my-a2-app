import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-shortprofile',
	template: '<div><p>{{pf}}</p></div>', // <-- binding
})

export class shortProfileComponent {
	@Input() pf;
}