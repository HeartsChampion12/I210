const artistsRef = document.querySelector("artists"); 

async function getArtist(artistId) {
    const artistResponse = await fetch(`https://api.deezer.com/artist/${artistId}`); 
    const artistData = await artistResponse.json(); 

    console.log(artistData); 
}

async function makeArtistList() {
    const artistCount = 199; 

    for (let i = 0; i < artistCount.length; i++) {
        const artist = await getARtist[i];
       
        console.log(artist); 
    }
}

getArtist(); 