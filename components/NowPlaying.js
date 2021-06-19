import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import styles from '@/styles/track.module.css'

export default function NowPlaying() {
  const { data } = useSWR('/api/nowplaying', fetcher)

  return (
    <>
      {data?.songUrl ? (
        <div className={styles.nowplaying}>
          <p>Now currently playing - </p>
          <div className={styles.nowplaying}>
            <div className={styles.info}>
              <div className={styles.albumArt}>
                <Image
                  src={data?.albumArt}
                  alt="Album Art"
                  width={75}
                  height={75}
                />
              </div>
              <div>
                <p className={styles.title}>
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data?.title}
                  </a>
                </p>
                <p className={styles.artist}>{data?.artist}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.nowplaying}>
          <div className={styles.info}>
            <div className={styles.albumArt}>
              <Image
                src="/assets/spotify.png"
                alt="Spotify Logo"
                width={75}
                height={75}
              />
            </div>
            <div>
              <p className={styles.title}>Not currently playing</p>
              <p className={styles.artist}>Spotify</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
