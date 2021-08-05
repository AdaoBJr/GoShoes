import React from 'react';

export default function Favorited() {
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <section className="share section bdContainer" id="share">
        <div className="FavoritedContainer bdGrid">
          <div className="FavoritedData">
            <h2>
              Sharing Is The Best Gift
              {' '}
              <br />
              {' '}
              You Can Give
            </h2>
            <p className="FavoritedDescription">Sharing these holidays is the best gift you can give, give a present or share your love with the people you love the most and celebrate with great happiness.</p>
            <a href className="button">Send a Gift</a>
          </div>

          <div className="FavoritedImg">
            <img src="assets/img/shared.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
