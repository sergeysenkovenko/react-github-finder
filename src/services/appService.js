export default class AppService {
  _apiBase = "https://api.github.com";

  _envVars = () => {
    let clientID, clientSecret;

    if (process.env.NODE_ENV !== "production") {
      clientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
      clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    } else {
      clientID = process.env.GITHUB_CLIENT_ID;
      clientSecret = process.env.GITHUB_CLIENT_SECRET;
    }

    return { clientID, clientSecret };
  };

  fetchResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    return await res.json();
  };

  fetchUsers = async query => {
    const users = await this.fetchResource(
      `/search/users?q=${query}&client_id=${
        this._envVars().clientID
      }&client_secret=${this._envVars().clientSecret}`
    );
    return users.items;
  };

  fetchUser = async username => {
    const user = await this.fetchResource(
      `/users/${username}?client_id=${this._envVars().clientID}&client_secret=${
        this._envVars().clientSecret
      }`
    );
    return user;
  };

  fetchUserRepos = async username => {
    const user = await this.fetchResource(
      `/users/${username}/repos?per_page=10&sort=created:asc&client_id=${
        this._envVars().clientID
      }&client_secret=${this._envVars().clientSecret}`
    );
    return user;
  };
}
