export interface useCurrentDateResp {
  day: number;
  month: number;
  year: number;
  month_name: string;
}

export default () => {
  const date = new Date();
  const month_name = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    month_name: month_name[date.getMonth()]
  };
};
