import { Injectable } from '@angular/core';
import { GitSearchUsers } from './git-search-users';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitSearchUsersService {
  cachedValues: Array<{
    [query: string]: GitSearchUsers
  }> = [];
  constructor(private http: HttpClient) {
    this.http = http;
  }

  gitSearchUsers = (query: string): Promise<GitSearchUsers> => {
    let promise = new Promise<GitSearchUsers>((resolve, reject) => {
      if(this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this.http.get('https://api.github.com/search/users?q=' + query)
        .toPromise()
        .then( (response) => {
          resolve(response as GitSearchUsers)
        }, (error) => {
          reject(error);
        })
      }
    })
    return promise;
  }

}
