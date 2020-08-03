import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { CartListComponent } from './shared/components/cart-list/cart-list.component';
import { MovieTicketComponent } from './shared/components/movie-ticket/movie-ticket.component';
import { InputBorderDirective } from './shared/directives/input-border.directive';
import { BasicComponent } from './pages/basic/basic.component';
import { AdvancedComponent } from './pages/advanced/advanced.component';
import { MainComponent } from './pages/main/main.component';
import { MainDetailComponent } from './pages/main-detail/main-detail.component';
import { IndexComponent } from './pages/index/index.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { CstFilterPipe } from './shared/pipes/filter.pipe';
import { NumstringPipe } from './shared/pipes/numstring.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    CartListComponent,
    MovieTicketComponent,
    InputBorderDirective,
    BasicComponent,
    AdvancedComponent,
    MainComponent,
    MainDetailComponent,
    IndexComponent,
    MovieDetailsComponent,
    CstFilterPipe,
    NumstringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
