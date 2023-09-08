import NextLink from 'next/link';

const NotFound = () => (
  <div>
    <h2>404 PAGE</h2>
    <NextLink href="/">
      GO HOME
    </NextLink>
  </div>
);

export default NotFound;
