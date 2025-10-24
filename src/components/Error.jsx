// components/ErrorPage.jsx
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Oops!</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/">← Go back home</Link>
    </div>
  );
}
