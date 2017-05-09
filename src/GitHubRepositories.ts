import Axios from 'axios';
import {AxiosResponse} from 'axios';
import * as mustache from 'mustache';
import errorTpl from './error.tpl.html';
import {HtmlHelper} from './HtmlHelper';
import {IGitHubRepository} from './IGitHubRepository';
import repoTpl from './repo.tpl.html';
import reposListTpl from './repos_list.tpl.html';

export class GitHubRepositories {
  public static readonly API_URL: string = 'https://api.github.com/repositories';

  public async render() {
    let repos;
    try {
      repos = await this._fetchRepos();
    } catch (error) {
      const errorMarkup = this._renderErrorMarkup(error.message);
      HtmlHelper.appendElementToBody(errorMarkup);
      return;
    }

    let reposMarkup = '';
    repos.data.map(repo => {
      reposMarkup = reposMarkup + this._renderRepositoryMarkup(repo as IGitHubRepository);
    });
    const reposListMarkup = this._renderRepositoriesListMarkup(reposMarkup);
    HtmlHelper.appendElementToBody(reposListMarkup);
  }

  private _fetchRepos(): Promise<AxiosResponse> {
    return Axios.get(GitHubRepositories.API_URL).then(res => res).then(err => err);
  }

  private _renderRepositoryMarkup(repo: IGitHubRepository): string {
    return mustache.render(repoTpl, repo);
  }

  private _renderRepositoriesListMarkup(content: string): string {
    return mustache.render(reposListTpl, {content});
  }

  private _renderErrorMarkup(error: string): string {
    return mustache.render(errorTpl, {error});
  }
}
