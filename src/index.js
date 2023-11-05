import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/styling/about-practice.css';
import './components/styling/about-therapists.css';
import './components/styling/connect.css';
import './components/styling/connect_button.css';
import './components/styling/faqs.css';
import './components/styling/footer.css';
import './components/styling/home.css';
import './components/styling/locations.css';
import './components/styling/navbar.css';
import './components/styling/policy_cancellation.css';
import './components/styling/policy_fees.css';
import './components/styling/policy_good_faith.css';
import './components/styling/policy_privacy.css';
import './components/styling/quotes.css';
import './components/styling/services.css';
import './components/styling/services_adolescents.css';
import './components/styling/services_couples.css';
import './components/styling/services_individuals.css';
import './components/styling/specialties.css';
import App from './Rose+Sooy';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
