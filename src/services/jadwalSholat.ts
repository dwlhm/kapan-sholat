import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { JadwalSholatBulananApi } from "../pages/bulanan/pages.bulanan.interface";
import { useCurrentDateResp } from "../utils/useCurrentDate";
import { JadwalSholatApi } from "../pages/home/pages.home.interface";

export const jadwalSholatApi = createApi({
  reducerPath: "jadwalSholat",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.myquran.com/v1/sholat/jadwal/",
  }),
  endpoints: (builder) => ({
    getJadwalSholatByMonth: builder.query<JadwalSholatBulananApi,useCurrentDateResp>({
      query: (currentDate) => `1227/${currentDate.year}/${currentDate.month}`,
    }),
    getJadwalSholatByDate: builder.query<JadwalSholatApi, useCurrentDateResp>({
      query: (currentDate) =>
        `1227/${currentDate.year}/${currentDate.month}/${currentDate.day}`,
    }),
  }),
});

export const {
    useGetJadwalSholatByMonthQuery,
    useGetJadwalSholatByDateQuery
} = jadwalSholatApi