export interface useCurrentDateResp {
  day: number;
  month: number;
  year: number;
}

export default () => {
  const date = new Date();

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};
