import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { PostComponentComponent } from './post-component/post-component.component';

@NgModule({
  declarations: [AppComponent, RedditComponent, PostComponentComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
