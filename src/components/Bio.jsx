import React from 'react';
import { useIntl } from 'react-intl';

function Bio() {
  const intl = useIntl();

  return (
    <div className="bio-container">
      <h1>{intl.formatMessage({ id: 'bio.greeting' })}</h1>
      <p>{intl.formatMessage({ id: 'bio.introduction' })}</p>
      <p>{intl.formatMessage({ id: 'bio.passionIntro' })}</p>
      <ul>
        {intl.formatMessage({ id: 'bio.passionPoints' }).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p>{intl.formatMessage({ id: 'bio.currentStatus' })}</p>
      <p>
        {intl.formatMessage({ id: 'bio.contactIntro' })}
        {' '}
        <a href={`mailto:${intl.formatMessage({ id: 'bio.email' })}`}>
          {intl.formatMessage({ id: 'bio.email' })}
        </a>
      </p>
    </div>
  );
}

export default Bio;