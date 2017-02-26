import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items = [
  	'https://cdn.pixabay.com/photo/2016/04/20/17/53/giraffe-1341638_1280.jpg',
  	'https://cdn.pixabay.com/photo/2016/03/28/09/43/giraffe-1285209_1280.jpg',
  	'https://cdn.pixabay.com/photo/2017/01/05/13/26/giraffe-1955126_1280.jpg'
  ];
  profile = {
  	name: 'melanie',
  	age: '29',
  	hot: 10
  }
}
