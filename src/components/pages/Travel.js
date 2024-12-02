import React, { useState } from "react";
import styles from "./Travel.module.css";

const TravelPage = () => {
  const articles = [
    {
      title: "Best Destinations to Travel in 2024",
      url: "https://www.lonelyplanet.com/best-in-travel-2024",
    },
    {
      title: "The 50 Best Places to Travel in 2024",
      url: "https://www.travelandleisure.com/best-places-to-go-2024-8385979",
    },
    {
      title: "How to Pack Light for Traveling",
      url: "https://www.rei.com/learn/expert-advice/traveling-light.html",
    },
    {
      title: "Packing Smart and Traveling Light",
      url: "https://www.ricksteves.com/travel-tips/packing-light/packing-smart",
    },
    {
      title: "The Art of Packing Light: 25 Best Tips to Travel Light",
      url: "https://myadventuresacrosstheworld.com/tips-for-packing-light-travel-light/",
    },
  ];

  const quotes = [
    '"The world is a book, and those who do not travel read only one page." – Saint Augustine',
    '"Travel is the only thing you buy that makes you richer." – Unknown',
    '"Not all those who wander are lost." – J.R.R. Tolkien',
    '"To travel is to live." – Hans Christian Andersen',
    '"Adventure is worthwhile." – Aesop',
    '"Once a year, go someplace you’ve never been before." – Dalai Lama',
    '"Life is short and the world is wide." – Simon Raven',
    '"We travel not to escape life, but for life not to escape us." – Anonymous',
    '"A journey of a thousand miles begins with a single step." – Lao Tzu',
    '"Take only memories, leave only footprints." – Chief Seattle',
    '"Wandering re-establishes the original harmony which once existed between man and the universe." – Anatole France',
    '"Better to see something once than hear about it a thousand times." – Asian Proverb',
    '"Do not follow where the path may lead. Go instead where there is no path and leave a trail." – Ralph Waldo Emerson',
    '"Man cannot discover new oceans unless he has the courage to lose sight of the shore." – André Gide',
    '"Travel makes one modest. You see what a tiny place you occupy in the world." – Gustave Flaubert',
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.parentContainer}>
      <div className={styles.navAndContent}>
        {/* Vertical Navigation Bar */}
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#articles">Articles</a>
            </li>
            <li className={styles.navItem}>
              <a href="#quotes">Quotes</a>
            </li>
            <li className={styles.navItem}>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className={styles.travelPage}>
          {/* Header */}
          <header className={styles.header}>
            <h1>Explore the World</h1>
            <p>Discover breathtaking destinations, cultures, and adventures.</p>
          </header>

          {/* Articles Section */}
          <section id="articles" className={styles.articlesSection}>
            <h2>Travel Articles</h2>
            <div className={styles.articleGrid}>
              {articles.map((article, index) => (
                <div key={index} className={styles.articleCard}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Quotes Section (Single Quote with Navigation) */}
          <section id="quotes" className={styles.quotesSection}>
            <h2>Travel Quotes</h2>
            <div className={styles.quoteWrapper}>
              <button className={styles.navButton} onClick={handlePrevQuote}>
                &#9664;
              </button>
              <blockquote className={styles.quote}>
                {quotes[currentQuoteIndex]}
              </blockquote>
              <button className={styles.navButton} onClick={handleNextQuote}>
                &#9654;
              </button>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className={styles.gallery}>
            <h2>Travel Gallery</h2>
            <div className={styles.flexContainer}>
              <img
                src="./images/travel1.jpg"
                alt="Scenic Mountain"
                className={styles.galleryImage}
              />
              <img
                src="./images/travel2.jpg"
                alt="Beach Sunset"
                className={styles.galleryImage}
              />
              <img
                src="./images/travel3.jpg"
                alt="City Lights"
                className={styles.galleryImage}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
