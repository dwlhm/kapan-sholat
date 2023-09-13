import Text from "@components/text"
import useCurrentDate from "../../utils/useCurrentDate"
import { useJadwalSholatBulananApi } from "./pages.bulanan.hooks"

import backIcon from "../../assets/icons/back.svg"
import { Link } from "react-router-dom"

export default () => {

    const date = useCurrentDate()
    const [ loading, error, data ] = useJadwalSholatBulananApi(date)

    return(
        <div className="mx-auto my-24" data-testid="pages-bulanan">
            <div className="mb-5">
                <Link to="/" className="flex">
                    <img className="w-6" src={backIcon} />
                    <Text.Title><span className="font-normal text-base ml-1">Jadwal Sholat</span></Text.Title>
                </Link>
                <Text.Title>Bulan <span>{date.month_name}</span> <span>{date.year}</span></Text.Title>
            </div>
            { loading 
                ? <p>Loading...</p>
                : data?.data.jadwal.map((v,i) => (
                    <div key={i} className="mt-2">
                        <Text.Base fontSize="text-sm">{v.tanggal}</Text.Base>
                        <div className="flex gap-4">
                            <div className="m-6 mt-4">
                                <Text.Base fontSize="text-sm" textAlign="text-center">Subuh</Text.Base>
                                <Text.Base fontSize="text-2xl">{v.subuh}</Text.Base>
                            </div>
                            <div className="m-6 mt-4">
                                <Text.Base fontSize="text-sm" textAlign="text-center">Dzuhur</Text.Base>
                                <Text.Base fontSize="text-2xl">{v.dzuhur}</Text.Base>
                            </div>
                            <div className="m-6 mt-4">
                                <Text.Base fontSize="text-sm" textAlign="text-center">Ashar</Text.Base>
                                <Text.Base fontSize="text-2xl">{v.ashar}</Text.Base>
                            </div>
                            <div className="m-6 mt-4">
                                <Text.Base fontSize="text-sm" textAlign="text-center">Maghrib</Text.Base>
                                <Text.Base fontSize="text-2xl">{v.maghrib}</Text.Base>
                            </div>
                            <div className="m-6 mt-4">
                                <Text.Base fontSize="text-sm" textAlign="text-center">Isya</Text.Base>
                                <Text.Base fontSize="text-2xl">{v.isya}</Text.Base>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}