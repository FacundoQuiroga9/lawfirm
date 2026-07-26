import { firm, reviewContent } from '../../data/siteContent';
import Icon from '../shared/Icon';
import './Reviews.css';

const Reviews = () => {
  const stars = '★'.repeat(reviewContent.rating);

  return (
    <section
      className="reviews-section section-pad"
      aria-labelledby="reviews-title"
    >
      <div className="site-shell">
        <div className="reviews-panel">
          <div className="reviews-intro">
            <p className="eyebrow">{reviewContent.eyebrow}</p>
            <h2 id="reviews-title">{reviewContent.heading}</h2>
            <a
              className="reviews-link"
              href={firm.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View on Google Maps</span>
              <Icon name="arrow" size={18} className="button-arrow" />
            </a>
          </div>

          <figure className="review-card">
            <div
              className="review-stars"
              role="img"
              aria-label={`${reviewContent.rating} out of 5 stars`}
            >
              <span aria-hidden="true">{stars}</span>
            </div>
            <blockquote>
              <p>&ldquo;{reviewContent.quote}&rdquo;</p>
            </blockquote>
            <figcaption>
              <strong>{reviewContent.reviewer}</strong>
              <span>{reviewContent.source}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
