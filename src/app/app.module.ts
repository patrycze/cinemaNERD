import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { TestComponent } from './test/test.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core'; 
@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService, 
    { provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
