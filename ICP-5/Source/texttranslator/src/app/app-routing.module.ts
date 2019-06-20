import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextTranslatorComponent} from './text-translator/text-translator.component';

const appRoutes: Routes = [
  { path: 'text-trans' , component : TextTranslatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
