export interface JadwalSholatBulananApi {
  status: boolean;
  data: {
    id: string;
    lokasi: string;
    daerah: string;
    jadwal: [
      {
        tanggal: string;
        imsak: string;
        subuh: string;
        terbit: string;
        dhuha: string;
        dzuhur: string;
        ashar: string;
        maghrib: string;
        isya: string;
      }
    ];
  };
}
