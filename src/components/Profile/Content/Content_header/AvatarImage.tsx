import React from 'react';

export function AvatarImage(props: { userId: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return <>{!props.userId && <input type={'file'} onChange={props.onChange} />}</>;
}