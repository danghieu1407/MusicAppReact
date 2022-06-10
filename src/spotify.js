const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientID = "6ebc30523a4f4be790258cae411d22b5";
const redirectUri= "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
