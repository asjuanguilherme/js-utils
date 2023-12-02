export const areArraysEquals = (firstArray: any[], secondArray: any[]) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const sortedFirstArray = firstArray.slice().sort();
  const sortedSecondArray = secondArray.slice().sort();

  for (let i = 0; i < sortedFirstArray.length; i++) {
    if (sortedFirstArray[i] !== sortedSecondArray[i]) {
      return false;
    }
  }

  return true;
};
