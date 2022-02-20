import React from 'react';
import { ContactsType } from 'redux/profile_reducer';

type newWW = {

  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string

}

type ContactsPT = {
  site: string
  value: string
}
export const Contacts = (props: ContactsPT) => {
  return <div><b>{props.site}:</b> {props.value}</div>;
};