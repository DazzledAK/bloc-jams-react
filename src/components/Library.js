import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
            <Link id="main-link" to={`/album/${album.slug}`} key={index}>
              <img id="images-song" src={album.albumCover} alt={album.title} />
              <div className="link-song">{album.title}</div>
              <div className="link-song">{album.artist}</div>
              <div className="link-song">{album.songs.length} songs</div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
