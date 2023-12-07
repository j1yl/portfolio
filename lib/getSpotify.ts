type SpotifyTopSongsResponse = {
  items: SpotifyTopSong[];
};

type SpotifyTopSong = {
  album: any;
  artists: any[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  external_urls: any;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    } as any),
  });

  return response.json();
};

export const fetchTopTracks = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=10",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const data: SpotifyTopSongsResponse = await response.json();

  return data.items.map((item, index) => {
    return {
      id: item.id,
      i: index,
      name: item.name,
      artist: item.artists.map((artist) => artist.name).join(", "),
      image: item.album.images[0].url,
      href: item.href,
    };
  });
};

export const fetchTopArtists = async () => {
  const { accessToken } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
