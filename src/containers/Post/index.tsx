import React from 'react';
import { getRouteProps } from 'react-static';

import MdRenderer from '../../components/MdRenderer';
import PostHeader from '../../components/PostHeader';

import { MdPageInfo } from '../../types';

export default getRouteProps(({ data, text }: MdPageInfo) => (
  <div>
    <PostHeader {...data} />
    <MdRenderer text={text} />
  </div>
));
