import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, Playing, Lyrics, Scroll } from "./styles";
import apiVagalume from "../../services/apiVagalume";

export default function Main({ token }) {
  const [count, setCount] = useState(0);
  const [currentPlaying, setCurrentPlaying] = useState([]);
  const [urlImage, setUrlImage] = useState("");
  const [artists, setArtists] = useState([]);
  const [lyric, setLyric] = useState([]);

  useEffect(() => {
    async function getCurrentPlaying() {
      const response = await api.get("v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data) {
        setCurrentPlaying(response.data.item);
        setUrlImage(response.data.item.album.images[0].url);
        setArtists(response.data.item.artists);
      }

      console.log(response.data);
      console.log(response.data.item.album.images[0].url);
    }

    getCurrentPlaying();
  }, [token]);

  useEffect(() => {
    async function getLyric() {
      const [artist, ...rest] = artists;
      if (artist) {
        const response = await apiVagalume.get("/search.php", {
          params: {
            art: artist.name,
            mus: currentPlaying.name,
            apikey: process.env.API_KEY,
          },
        });
        if (response.data.mus[0]) {
          console.log(response.data.mus[0].text);
          setLyric(response.data.mus[0].text);
        } else {
          setLyric("Não encontrei letra dessa música :/");
        }
      }
    }

    getLyric();
  }, [artists, currentPlaying.name]);

  return (
    <Container>
      <Playing>
        <img src={urlImage} />
        <strong>{currentPlaying.name}</strong>
        {artists.map((artist) => (
          <span>{artist.name},</span>
        ))}
      </Playing>
      <Lyrics>
        <pre>
          <Scroll>{lyric}</Scroll>
        </pre>
      </Lyrics>
    </Container>
  );
}
