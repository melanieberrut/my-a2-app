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

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    profileComponent,
    shortProfileComponent,
    similarListComponent,
    NameLabel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
