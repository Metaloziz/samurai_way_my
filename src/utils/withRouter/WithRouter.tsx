import { Component } from 'react';

import { useParams } from 'react-router-dom';

export const withRouter = (WrappedComponent: typeof Component) => (props: object) => {
  const params = useParams(); // useParams возвращает объект пары key/value (ключ/значение) параметров URL.
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrappedComponent {...props} params={params} />;
};
