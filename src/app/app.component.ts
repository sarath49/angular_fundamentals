import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitSearchUsersService } from './git-search-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService, GitSearchUsersService]
})
export class AppComponent implements OnInit {
  constructor(private GitSearchService: GitSearchService, private GitSearchUsersService: GitSearchUsersService) {

  }
  ngOnInit() {

    this.GitSearchUsersService.gitSearchUsers('sarath49').then((response) => {
      console.log(response);
      alert('Totla Users found: ' + response.total_count);
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  title = 'Github Browser!';
}
