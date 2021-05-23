import { destroySession } from "./_session";

export async function post(request) {
  const sid = request.headers.cookie["sid"];
  if (sid) {
    destroySession(sid);
  }
  return {
    headers: {
      "set-cookie": "sid=",
    },
    body: "",
  };
}
