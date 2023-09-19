// moduli di angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


// componenti creati
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import { BootlegTitleCasePipe } from './pipes/bootleg-title-case.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    FavouritesComponent,
    TimestampToDatePipe,
    BootlegTitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  //componente con cui inizia
  bootstrap: [AppComponent]
})
export class AppModule { }
