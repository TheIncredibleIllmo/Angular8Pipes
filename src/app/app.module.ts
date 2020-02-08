import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { HidePipe } from './pipes/hide.pipe';


registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SecureDomPipe,
    HidePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
