import React, { useState } from "react";
import styles from "./Travel.module.css";
import img1 from "../assets/images/IMG_0168.JPEG";
import img2 from "../assets/images/IMG_0172.JPEG";
import img3 from "../assets/images/IMG_0177.JPEG";
import img5 from "../assets/images/IMG_0408.JPEG";
import img6 from "../assets/images/IMG_0411.JPEG";
import img7 from "../assets/images/IMG_0414.JPEG";
import img8 from "../assets/images/IMG_0420.JPEG";
import img9 from "../assets/images/IMG_0422.JPEG";
import img10 from "../assets/images/IMG_0439.JPEG";
import img11 from "../assets/images/IMG_0562.JPEG";
import img12 from "../assets/images/IMG_1429.JPEG";
import img13 from "../assets/images/IMG_1433.JPEG";
import img14 from "../assets/images/IMG_1438.JPEG";
import img15 from "../assets/images/IMG_2975.JPEG";
import img16 from "../assets/images/IMG_2978.JPEG";
import img17 from "../assets/images/IMG_2992.JPEG";
import img18 from "../assets/images/IMG_2994.JPEG";
import img19 from "../assets/images/IMG_2999.JPEG";
import img20 from "../assets/images/IMG_3416.JPEG";
import img21 from "../assets/images/IMG_3422.JPEG";
import img22 from "../assets/images/IMG_3426.JPEG";
import img23 from "../assets/images/IMG_3434.JPEG";
import img24 from "../assets/images/IMG_3444.JPEG";
import img25 from "../assets/images/IMG_3451.JPEG";
import img26 from "../assets/images/IMG_3453.JPEG";
import img27 from "../assets/images/IMG_3494.JPEG";

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

  const galleryImages = [
    img1, img2, img3, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27
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

          {/* Quotes Section */}
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
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Travel Image ${index + 1}`}
                  className={styles.galleryImage}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
