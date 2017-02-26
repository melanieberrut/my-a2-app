import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'nameLabel'
})

export class NameLabel implements PipeTransform {
	// (value: @OutgoingType) : @InGoingType
	transform(value: string): String {
		return 'Name: ' + value;
	}
}