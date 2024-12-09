// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

// Calling three functions and creating 3 variables with diffrents values

let album1 = make_album('Maaz', 'Album title 1');

let album2 = make_album('Hamdan', 'Album_title 2');

// Calling a make_album function with third parametr
let album3 = make_album('Huda','Album title 3', 10);

// Print values of our object created my functuon

console.log(album1);
console.log(album2);
console.log(album3);

