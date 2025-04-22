export async function getSports(query = '') {
  const response = await fetch(`https://sports-api.dicoding.dev/teams/search?t=${query}`);
  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson.message);
  }

  return responseJson.teams;
}
