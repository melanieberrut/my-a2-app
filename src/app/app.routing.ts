import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
	// json format- the paths
	{
		// Default
		path: '', pathMatch: 'full', redirectTo: 'shop'
	},
	{
		path: 'shop', component: ShopComponent
	},
	{
		path: 'about', component: AboutComponent
	},
	{
		path: 'contact', component: ContactComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)], // initialise the whole router
	exports: [RouterModule], // exported the router module
})

export class AppRoutingModule {

}