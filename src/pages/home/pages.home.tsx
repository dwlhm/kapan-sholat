import { Link } from "react-router-dom";
import Text from "@components/text/index.ts";
import { useCurrentDate } from "@utils";
import { useGetJadwalSholatByDateQuery } from "../../services/jadwalSholat.ts";

export default () => {
  const { data, error, isLoading } = useGetJadwalSholatByDateQuery(
    useCurrentDate()
  );
  return (
    <div
      data-testid="pages-home"
      className="flex items-center justify-center flex-col"
    >
      <Text.Title>Jadwal Sholat Hari Ini</Text.Title>
      <div className="mt-12 flex justify-between max-w-lg w-full px-5">
        <Text.Base fontSize="text-sm">Tasikmalaya, Indonesia</Text.Base>
        <Link
          to="/jadwal-bulanan"
          className="transition text-sm bg-gray-100 text-gray-700 hover:text-gray-100 hover:bg-gray-900 px-4 py-1 rounded"
        >
          Jadwal Satu Bulan
        </Link>
      </div>
      <div className="flex justify-center max-w-lg w-full">
        {error ? (
          <p>Gagal mendapatkan data jadwal sholat</p>
        ) : isLoading ? (
          <p>Mencoba mendapatkan data dari API</p>
        ) : data ? (
          <>
            <div className="m-6 mt-4">
              <Text.Base fontSize="text-2xl">Subuh</Text.Base>
              <Text.Base fontSize="text-sm" textAlign="text-center">
                {data.data.jadwal.subuh}
              </Text.Base>
            </div>
            <div className="m-6 mt-4">
              <Text.Base fontSize="text-2xl">Dzuhur</Text.Base>
              <Text.Base fontSize="text-sm" textAlign="text-center">
                {data.data.jadwal.dzuhur}
              </Text.Base>
            </div>
            <div className="m-6 mt-4">
              <Text.Base fontSize="text-2xl">Ashar</Text.Base>
              <Text.Base fontSize="text-sm" textAlign="text-center">
                {data.data.jadwal.ashar}
              </Text.Base>
            </div>
            <div className="m-6 mt-4">
              <Text.Base fontSize="text-2xl">Maghrib</Text.Base>
              <Text.Base fontSize="text-sm" textAlign="text-center">
                {data.data.jadwal.maghrib}
              </Text.Base>
            </div>
            <div className="m-6 mt-4">
              <Text.Base fontSize="text-2xl">Isya</Text.Base>
              <Text.Base fontSize="text-sm" textAlign="text-center">
                {data.data.jadwal.isya}
              </Text.Base>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
