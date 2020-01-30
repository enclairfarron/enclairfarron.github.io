import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://github.com/enclairfarron"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.zhihu.com/people/spring-64-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zhihu
        </a>
      </footer>
    );
  }
}

export default Footer;
