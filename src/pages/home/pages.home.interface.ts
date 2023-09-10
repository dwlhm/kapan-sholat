export interface JadwalSholatApi {
  status: boolean;
  data: {
    id: string;
    lokasi: string;
    daerah: string;
    jadwal: {
      imsak: string;
      subuh: string;
      terbit: string;
      dhuha: string;
      dzuhur: string;
      ashar: string;
      maghrib: string;
      isya: string;
    };
  };
}

export interface JadwalSholat {
  lokasi: string;
  jadwal: string[];
}
