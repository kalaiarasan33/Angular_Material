import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { CartListComponent } from './shared/components/cart-list/cart-list.component';
import { MovieTicketComponent } from './shared/components/movie-ticket/movie-ticket.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    CartListComponent,
    MovieTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
