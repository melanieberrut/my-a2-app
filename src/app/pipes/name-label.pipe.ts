import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'nameLabel'
})

export class NameLabel implements PipeTransform {
	// (value: @OutgoingType) : @InGoingType
	transform(value: string, prepend: String): String {
		return prepend + value;
	}
}