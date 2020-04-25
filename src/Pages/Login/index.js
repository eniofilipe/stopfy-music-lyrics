import React from "react";
import { FaSpotify } from "react-icons/fa";

import { Container } from "./styles";

export default function Login({ uri }) {
  //const { uri } = props;

  return (
    <Container>
      <div>
        <strong>StopFy</strong>
        <a href={uri}>
          <button type="button">
            <span>Login with</span>
            <FaSpotify size={16} color="#fff" />
          </button>
        </a>
      </div>
      <strong>
        Music Lyrics Spotify Api and Vagalume Api with ReactJS for Ênio Filipe
      </strong>
    </Container>
  );
}
