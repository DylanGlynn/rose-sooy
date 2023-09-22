import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/styling/about.css';
import './components/styling/faqs.css';
import './components/styling/footer.css';
import './components/styling/home.css';
import './components/styling/navbar.css';
import './components/styling/policy_cancellation.css';
import './components/styling/policy_good_faith.css';
import './components/styling/policy_privacy.css';
import './components/styling/services.css';
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
