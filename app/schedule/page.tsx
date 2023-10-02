import Link from "next/link"
import {getLocalData} from '../../_components/ReadJson';

export default async function Schedule() {
    const schedule = await getLocalData('json/schedule.json');
    // console.log(schedule) ;

    return (
    <>

    <table className="w-5/6 ml-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg border-separate table-fixed border-spacing-5 font-mono">
        <thead>
            <tr>
            <th className = "text-left">Start</th>
            <th className = "text-left">Name</th>
            <th className = "text-left">Location</th>
            <th className = "text-left">Description</th>
            </tr>
        </thead>
        <tbody>
    {schedule.map(function(r){
         return (
            <tr className = "ring ring-2">
                <td className = "text-left">{r.start}   </td>
                <td className = "text-left">{r.event}   </td>
                <td className = "text-left">{r.location}   </td>
                <td className = "text-left">{r.desc}   </td>
            </tr>
         )
       })}

    </tbody>
    </table>
    </>
    )
}

