const artistsRef = document.querySelector("#artists"); 

async function getArtist(artistId) {
    const artistResponse = await fetch(`https://i210-music-api.vercel.app/artists`); 
    const artistData = await artistResponse.json(); 

    return artistData
}

async function makeArtistList() {
    const allArtists = await getArtist(); 

    for (let i = 0; i < allArtists.length; i++) {
        const artist = allArtists[i];
       
        artistsRef.innerHTML += `<img src="${artist.picture_medium}" height="100" />`
    }
}

makeArtistList(); 