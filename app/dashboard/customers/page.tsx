import React from 'react';

// type Props = Record<string, any>;
interface Props {
  foo: number;
}

interface State {
  count: number;
}
export default function CustomersPage(props: Props) {
  return (
    <div>
      <p>Customers Page</p>
    </div>
  );
}
