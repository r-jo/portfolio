import { getTopTracks } from '@/lib/spotify'

const topTracks = async (_, res) => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    albumArt: track.album.images[1].url,
  }))

  return res.status(200).json({ tracks })
}

export default topTracks
