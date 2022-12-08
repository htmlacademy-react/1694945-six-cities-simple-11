import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { setReviewFormBlocked } from '../../../store/property-process/actions';
import { sendReviewAction } from '../../../store/api-actions';
import {
  MARKS,
  ReviewLength
} from '../../../const';
import { getPluralWord } from '../../../utils';

type ReviewFormProps = {
  selectedOffer: number;
};

function ReviewForm({ selectedOffer }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isReviewFormBlocked = useAppSelector((state) => state.isReviewFormBlocked);
  const [formData, setFormData] = useState({
    rating: '',
    review: ''
  });
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formData.rating && formData.review) {
      dispatch(setReviewFormBlocked(true));
    }
    dispatch(sendReviewAction({
      id: selectedOffer,
      rating: +formData.rating,
      comment: formData.review,
    }));

    setFormData({
      rating: '',
      review: ''
    });

  };

  const isSubmitButtonDisabled = formData.review.length < ReviewLength.Min
    ||
    formData.review.length > ReviewLength.Max
    ||
    formData.rating === ''
    ||
    isReviewFormBlocked;

  const marksList = MARKS.map((mark) => (
    <Fragment key={mark.key}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={mark.key}
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
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
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
        value={formData.review}
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least&nbsp;
          <b className="reviews__text-amount">
            {`${ReviewLength.Min} characters`}
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          {!isReviewFormBlocked ? 'Submit' : 'Sending...'}
        </button>
      </div>
    </form>
  );
}
export default ReviewForm;
