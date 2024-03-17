export type TUser = {
  username: string;
  email: string;
  password: string;
};

export type Tevent = {
  id?: number;
  event_name: string;
  location: string;
  data: string;
  is_liked?: boolean;
  image: string | null;
};

const headers = {
  "Content-Type": "application/json",
};

export const BASE_URL = "http://127.0.0.1:8000/app";

export async function register({ user }: { user: TUser }) {
  const resp = await fetch(`${BASE_URL}/signup/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(user),
  });

  const res = await resp?.json();
  if (!resp.ok) {
    console.log({ res });
    return { data: null, error: res };
  }
  console.log({ res });
  return { data: res, error: null };
}
export async function Login({ user }: { user: Omit<TUser, "email"> }) {
  const resp = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(user),
  });

  const res = await resp?.json();
  if (!resp.ok) {
    console.log({ res });
    return { data: null, error: res };
  }
  console.log({ res });
  return { data: res, error: null };
}

export const token = JSON.parse(
  localStorage.getItem("token") as string
)?.access;

export const getAllEvents = async () => {
  const resp = await fetch(`${BASE_URL}/events/all/`);
  const res = await resp.json();
  if (!resp.ok) {
    return { data: null, error: res };
  }

  return { data: res as Tevent[], error: null };
};

export async function toogleLike(id: number) {
  const resp = await fetch(`${BASE_URL}/events/${id}/toggle-like/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Bearer ${token}`,
    },
  });

  const res = await resp?.json();
  console.log({ res });
}
