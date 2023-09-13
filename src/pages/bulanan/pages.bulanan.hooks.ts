import type { useCurrentDateResp } from "@utils";
import { JadwalSholatBulananApi } from "./pages.bulanan.interface";
import { useEffect, useState } from "react";

export const useJadwalSholatBulananApi = (currentDate: useCurrentDateResp) : 
[boolean, Error | null, JadwalSholatBulananApi | null] => {
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ error, setError ] = useState<Error | null>(null)
    const [ data, setData ] = useState<JadwalSholatBulananApi | null>(null)

    useEffect(() => {
        fetch(
            `https://api.myquran.com/v1/sholat/jadwal/1227/${currentDate.year}/${currentDate.month}`
        )
        .then(res => res.json())
        .then((jadwal: JadwalSholatBulananApi) => {
            setLoading(false)
            setData(jadwal)
        })
        .catch(err => {
            setLoading(false)
            setError(err)
        })
    }, [])

    return [ loading, error, data ]
}