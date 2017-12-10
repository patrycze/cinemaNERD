import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { TestComponent } from './test/test.component';
import { PostService } from './services/post.service';
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
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
