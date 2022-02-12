export const requiredField = (value: string) => {
  if (!!value) return undefined;
  return 'Field is required';
};

export const maxLengthCreator = (max: number) => (value: string) => {
  if (value && value.length > max) {
    console.dir('maxLength15');
    return `Must be ${max} characters or less`;
  } else {
    return undefined;
  }
};

