import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { GitSearchUsersService } from './git-search-users.service';
import { GitSearchComponent } from './git-search/git-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ContentLoaderModule
  ],
  providers: [GitSearchService, GitSearchUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
