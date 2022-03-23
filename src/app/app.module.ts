import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeOnHoverDirective } from './shared/directives/change-on-hover.directive';
import { ClickOnElementDirective } from './shared/directives/click-on-element.directive';
import { SetBackgroundColorDirectiveDirective } from './shared/directives/SetBackgroundColorDirective.directive';
import { CalculateAgePipe } from './shared/pipes/CalculateAge.pipe';
import { UserNamesPipe } from './shared/pipes/UserNames.pipe';
import { TaskFirstComponent } from './task-first/task-first.component';
import { TaskSecondComponent } from './task-second/task-second.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFirstComponent,
    TaskSecondComponent,
    UserNamesPipe,
    CalculateAgePipe,
    ClickOnElementDirective,
    SetBackgroundColorDirectiveDirective,
    ChangeOnHoverDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
