import PlayWidget from 'react-spotify-widgets';

function Spotify(){

    return(
        <PlayWidget
          width='100%'
          height={80}
          uri={'spotify:playlist:37i9dQZF1DZ06evO4jkBCE'}
          lightTheme={true}
        />
    )

}

export default Spotify