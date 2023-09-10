import { Link } from "react-router-dom";
import Text from "../../components/text";
import { useJadwalSholatApi } from "./pages.home.hooks";
import useCurrentDate from "../../utils/useCurrentDate";

export default () => {
  const description = ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];
  const [loading, error, data] = useJadwalSholatApi(useCurrentDate());
  return (
    <div
      data-testid="pages-home"
      className="flex items-center justify-center flex-col"
    >
      <Text.Title>Jadwal Sholat Hari Ini</Text.Title>
      <div className="mt-12 flex justify-between max-w-lg w-full px-5">
        <Text.Base textSize="text-sm">Tasikmalaya, Indonesia</Text.Base>
        <Link
          to="/jadwal-bulanan"
          className="transition text-sm bg-gray-100 text-gray-700 hover:text-gray-100 hover:bg-gray-900 px-4 py-1 rounded"
        >
          Jadwal Satu Bulan
        </Link>
      </div>
      <div className="flex justify-center max-w-lg w-full">
        {loading 
          ? <p>Loading...</p>
          : description.map((v, k) => (
          <div key={v} className="m-6 mt-4">
            <Text.Base textSize="text-2xl">{ data?.jadwal[k] }</Text.Base>
            <Text.Description textSize="text-sm">{v}</Text.Description>
          </div>
        ))}
      </div>
    </div>
  );
};
