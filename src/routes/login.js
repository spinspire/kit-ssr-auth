import { createSession, getSession } from "./_session";

export async function post(request) {
  const sid = createSession();
  return {
    headers: {
      "set-cookie": `sid=${sid}`,
    },
    body: getSession(sid),
  };
}
