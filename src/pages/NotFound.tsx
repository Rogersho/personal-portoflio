import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <span className="section-tag">// 404</span>
      <h1 className="section-title" style={{ marginTop: '16px' }}>Page not found</h1>
      <p className="text-muted-color" style={{ marginTop: '12px' }}>
        The page you requested does not exist or may have moved.
      </p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-flex', marginTop: '24px' }}>
        Return Home
      </Link>
    </div>
  );
};
