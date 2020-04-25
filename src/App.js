import React, { useMemo, useState } from "react";
import Login from "./Pages/Login";
import Main from "./Pages/Main";

import GlobalStyle from "./styles/global.js";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = process.env.CLIENT_ID;
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-playback-state",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-recently-played",
  "user-read-playback-position",
  "streaming",
  "app-remote-control",
  "user-modify-playback-state",
  "user-read-currently-playing",
];
const uriAuth = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

function App() {
  const params = useMemo(authorization, []);

  function authorization() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }

    console.log(hashParams);
    return hashParams;
  }

  return (
    <>
      <GlobalStyle />
      {params.access_token ? (
        <Main token={params.access_token} />
      ) : (
        <Login uri={uriAuth} />
      )}
    </>
  );
}

export default App;
