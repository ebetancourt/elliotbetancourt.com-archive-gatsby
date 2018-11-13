import React from 'react';
import ReactDOM from 'react-dom';

import PostTitleByline from './PostTitleByline';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostTitleByline />, div);
  ReactDOM.unmountComponentAtNode(div);
});
