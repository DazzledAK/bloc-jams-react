import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>
    <div id="front"><img src="https://images.pexels.com/photos/21261/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="birds in sunset" width="100%" height="1000" /></div>
    <section>
      <div className="selling-points">
        <div className="point">
          <span className="ion-music-note"></span>
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="point">
          <span className="ion-wifi"></span>
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>
        <div className="point">
          <span className="ion-iphone"></span>
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
