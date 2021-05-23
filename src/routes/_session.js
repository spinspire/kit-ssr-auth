let nextSid = 0;
const sessions = {};

export function createSession() {
  let newSid = ++nextSid;
  console.log(`newSid=${newSid}`);
  sessions[newSid] = {
    attr1: new Date(),
  };
  return newSid;
}

export function getSession(sid) {
  //sid = 1
  console.log(`sid=${sid}`, sessions[sid]);
  return sessions[sid];
}

export function destroySession(sid) {
  delete sessions[sid];
}
