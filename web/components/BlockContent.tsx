import React from 'react';
import cx from 'classnames';
import BlockContent from '@sanity/block-content-to-react';

import { blockSerializers } from '@components/BlockSerializers';
import { Body } from '@models/body';

interface Props {
  blocks?: Body;
  className?: 'string';
}
const Content = ({ blocks = [], className = '' }: Props) => {
  if (!blocks) return null;
  console.log('blocks', blocks);
  return (
    <BlockContent
      renderContainerOnSingleChild
      className={cx('rc', className)}
      blocks={blocks}
      serializers={blockSerializers}
    />
  );
};

export default Content;
