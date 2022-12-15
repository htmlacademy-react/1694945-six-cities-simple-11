import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router';
import { createMemoryHistory } from 'history';
import InputField from './input-field';

const field = 'email';
const handleFieldChange = () => void 0;

describe('Component: InputField', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <InputField
            field={field}
            handleFieldChange={handleFieldChange}
            data-testid={field}
          />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByTestId(field)).toBeInTheDocument();
  });
});
