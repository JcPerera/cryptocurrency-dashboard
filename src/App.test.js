import { render , screen } from '@testing-library/react';
import TrendingPage from "./pages/TrendingPage";
import CurrencyInfo from "./components/CurrencyInfo";


test('renders the trending page', () => {
  render(<TrendingPage />);
  const linkElement = screen.getByText(/trending/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the CurrencyInfo component', () => {
  render(<CurrencyInfo img="https://assets.coingecko.com/coins/images/12022/small/683JEXMN_400x400.png?1596694142"
                       symbol="test"
                       id="test"
                       rank="1"
                       price={100.00}
                       priceChange={2.3445}
                       webUrl="https://ftx.com/tokens/BALHALF"
                       gitUrl="https://github.com/zocteam/zeroonecoin"/>);
  const linkElement = screen.getByText(/2.34%/i);
  expect(linkElement).toBeInTheDocument();
});
