import { Member, createDefaultMember } from "../model/member";
import parse from "parse-link-header";

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data: any): Promise<Member[]> => {
  const members = data.map(gitHubMember => {
    var member: Member = createDefaultMember();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

export const getAllMembers = (organizationName: string): Promise<Member[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};



export interface responseSearchPag {
  members: Member[],
  next: number | undefined,
  last: number | undefined
}

export const getAllMembersByPage = (organizationName: string, page: number, perPage: number): Promise<responseSearchPag> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?page=${page}&per_page=${perPage}`;
  let next: number | undefined;
  let last: number | undefined;

  return fetch(gitHubMembersUrl)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        let parsed = parse(response.headers.get('Link'));
        next = (parsed == undefined || null) || (parsed.next == undefined || null) ? undefined : parseInt(parsed.next.page);
        last = (parsed == undefined || null) || (parsed.last == undefined || null) ? undefined : parseInt(parsed.last.page);
        return Promise.resolve(response);
      } else {
        let error = new Error(response.statusText);
        throw error;
      }
    })
    .then((response: Response): any => response.json())
    .then(
      (data: any): Promise<responseSearchPag> => {
        const members: responseSearchPag = {
          members: data.map((gitHubMember) => {
            var member: Member = createDefaultMember();

            member.id = gitHubMember.id;
            member.login = gitHubMember.login;
            member.avatar_url = gitHubMember.avatar_url;

            return member;
          }),
          next: next,
          last: last
        };

        return Promise.resolve(members);
      }
    )
}

