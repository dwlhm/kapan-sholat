import type { useCurrentDateResp } from "@utils";
import { useEffect, useState } from "react";
import { JadwalSholat, JadwalSholatApi } from "./pages.home.interface";

export const useJadwalSholatApi = (
  currentDate: useCurrentDateResp
): [boolean, Error | null, JadwalSholat | null] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<JadwalSholat | null>(null);
  useEffect(() => {
    fetch(
      `https://api.myquran.com/v1/sholat/jadwal/1227/${currentDate.year}/${currentDate.month}/${currentDate.day}`
    )
      .then((res) => res.json())
      .then((jadwal: JadwalSholatApi) => {
        setLoading(false);
        setData({
          lokasi: jadwal.data.lokasi,
          jadwal: [
            jadwal.data.jadwal.subuh,
            jadwal.data.jadwal.dzuhur,
            jadwal.data.jadwal.ashar,
            jadwal.data.jadwal.maghrib,
            jadwal.data.jadwal.isya,
          ],
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return [loading, error, data];
};
