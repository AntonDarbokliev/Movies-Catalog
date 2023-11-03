import "./MovieDetails.css";
export const MovieDetails = () => {
  return (
    <>
      <h1 id="title">Five nights at Freddy's</h1>
      <div className="container">
        <div className="imageDiv">
          <img
            src="https://m.media-amazon.com/images/I/71LcVhJz3DL._AC_UF894,1000_QL80_.jpg"
            id="poster"
          />
        </div>

        <div className="videoPlayer">
        <iframe width="580" height="400" src="https://www.youtube.com/embed/0VH9WCFV6XQ?si=uroSjV4I6rBiT6a7" frameborder="0" allowfullscreen></iframe>
    </div>
        <div className="movieInfo">
          <ul>
            <li>Director: Bla Bla</li>
            <li>Year: Bla Bla</li>
            <li>Top Cast: Bla Bla</li>
          </ul>
        </div>
      </div>

        <div className="movieImages">
            <ul>
            <li><img src="https://m.media-amazon.com/images/M/MV5BNzAxM2JmMjEtZjE0My00OWQzLWE3ZTEtYzc4MzViOGZhODI3XkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg" alt="" /></li>
            <li><img src="https://assets-prd.ignimgs.com/2023/06/27/fivenightsatfreddysmovie-1687879404025.jpg?width=1280" alt="" /></li>
            <li><img src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/10/26/Five-Nights-at-Freddys-movie-animatronics.jpg" alt="" /></li>
            </ul>
        </div>

        <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Dolor eveniet minima consectetur iste explicabo, alias aliquid labore placeat modi. 
            Commodi nemo itaque est accusamus earum. Reprehenderit esse sit ut accusamus.
            orem, ipsum dolor sit amet consectetur adipisicing elit.
             Dolor eveniet minima consectetur iste explicabo, alias aliquid labore placeat modi. 
            Commodi nemo itaque est accusamus earum. Reprehenderit esse sit ut accusamus.
            orem, ipsum dolor sit amet consectetur adipisicing elit.
             Dolor eveniet minima consectetur iste explicabo, alias aliquid labore placeat modi. 
        </p>
    </>
  );
};
