import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddnewComponent } from './main/addnew/addnew.component';
import { NotfoundComponent } from './main/notfound/notfound.component';
import { EditComponent } from './main/edit/edit.component';


@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      AddnewComponent,
      NotfoundComponent,
      EditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
