import * as ck from "cookie";
import { getSession as serverSession } from "./routes/_session";

export async function handle({ request, render }) {
  const response = await render(request);
  return {
    ...response,
    headers: {
      ...response.headers,
      custom: "foo",
    },
  };
}

export async function getSession({ headers, ...request }) {
  const cookie = ck.parse(headers["cookie"] || "");
  let session = {};
  session = serverSession(cookie["sid"]);

  console.log("session", session);

  return session;
}
