import React from 'react';

type ContactsPT = {
  site: string
  value: string
}
export const Contacts = (props: ContactsPT) => {
  return <div><b>{props.site}:</b> {props.value}</div>;
};