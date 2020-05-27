import { MemberDetailEntity, createDefaultMemberDetailEntity } from './memberDetail.vm';
import { mapMemberDetailEntityFromApiToVm } from './memberDetail.mapper';

export interface MemberDetailEntityAPI {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  email: string,
  hireable: string,
  bio: string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: Date,
  updated_at: Date
}

export const getMembersByLogin = (login: string): Promise<MemberDetailEntity> => {
  const gitHubMembersUrl: string = `https://api.github.com/users/${login}`;
  
  return fetch(gitHubMembersUrl)
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  })
  .then((response: Response): any => response.json())
  .then(
    (data: MemberDetailEntityAPI): Promise<MemberDetailEntity> => Promise.resolve(mapMemberDetailEntityFromApiToVm(data))
  )
}
