// prettier-ignore
export async function absoluteFetch(url: string, init?: RequestInit | undefined): Promise<Response> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  return fetch(url.startsWith(BASE_URL) ? url : `${BASE_URL}${url}`, init);
}
