import { Fragment, useState, ChangeEvent } from 'react';
import { OfferId } from '../../../types/offer';
import {
  MARKS,
  TextAreaProperites
} from '../../../const';
import { getPluralWord } from '../../../utils';

type ReviewFormProps = {
  selectedOffer: OfferId;
};

function ReviewForm({ selectedOffer }: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: ''
  });
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const marksList = MARKS.map((mark) => (
    <Fragment key={mark.key}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={mark.key}
        id={`${mark.key}-${getPluralWord(mark.key, 'star')}`}
        type="radio"
        checked={Number(formData.rating) === mark.key}
        onChange={handleFieldChange}
      />
      <label
        htmlFor={`${mark.key}-${getPluralWord(mark.key, 'star')}`}
        className="reviews__rating-label form__rating-label"
        title={mark.value}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </Fragment>
  ));
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {marksList}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={handleFieldChange}
        minLength={TextAreaProperites.MinLength}
        maxLength={TextAreaProperites.MaxLength}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least&nbsp;
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ReviewForm;
