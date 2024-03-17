export type TUser = {
  username: string;
  email: string;
  password: string;
};

const headers = {
  "Content-Type": "application/json",
};

const BASE_URL = "http://127.0.0.1:8000";

export async function register({ user }: { user: TUser }) {
  const resp = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const res = await resp?.json();
  if (!resp.ok) {
    return;
  }
  console.log({ res });
  return res as TUser;
}
