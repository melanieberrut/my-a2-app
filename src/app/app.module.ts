import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './image-component/image.component';
import { profileComponent } from './profile-component/profile.component';
import { shortProfileComponent } from './shortProfile-component/shortProfile.component';
import { similarListComponent } from './similarList-component/similarList.component';
import { NameLabel } from './pipes/name-label.pipe';

import { AppRoutingModule } from './app.routing';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    profileComponent,
    shortProfileComponent,
    similarListComponent,
    NameLabel,
    ShopComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
