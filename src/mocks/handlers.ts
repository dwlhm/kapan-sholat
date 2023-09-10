import { rest } from "msw";
import { useCurrentDate } from "../utils";

const currentDate = useCurrentDate();

export const handlers = [
  rest.get(
    `https://api.myquran.com/v1/sholat/jadwal/1227/${currentDate.year}/${currentDate.month}/${currentDate.day}`,
    (_, res, ctx) => {
      return res(
        ctx.json({
          status: true,
          data: {
            id: "1227",
            lokasi: "KOTA TASIKMALAYA",
            daerah: "JAWA BARAT",
            koordinat: {
              lat: -7.325902777777777,
              lon: 108.21985555555555,
              lintang: "7° 19' 33.25\" S",
              bujur: "108° 13' 11.48\" E",
            },
            jadwal: {
              tanggal: "Minggu, 10/09/2023",
              imsak: "04:19",
              subuh: "04:29",
              terbit: "05:40",
              dhuha: "06:08",
              dzuhur: "11:48",
              ashar: "15:04",
              maghrib: "17:48",
              isya: "18:57",
              date: "2023-09-10",
            },
          },
        })
      );
    }
  ),
];
