import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { fetchOffersAction } from '../../../store/offers-process/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p><b>Failed to Load Offers</b></p>
      <button
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        className="button"
        type="button"
      >
        Try Again
      </button>
    </>
  );
}

export default ErrorScreen;
