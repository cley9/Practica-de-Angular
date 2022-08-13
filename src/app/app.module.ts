import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiWordComponet } from './hi-word.componet';
import { CajaComponent } from './caja/caja.component';
import { TesTessComponent } from './tes-tess/tes-tess.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    // AppComponent,HiWordComponet, CajaComponent, TesTessComponent, FormsComponent
    AppComponent,HiWordComponet, CajaComponent, TesTessComponent, FormsComponent, InputComponent, MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
