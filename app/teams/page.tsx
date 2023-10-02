import Link from "next/link"
import {getLocalData} from '../../_components/ReadJson';

export default async function Teams() {
    const teams = await getLocalData('json/teams.json');
    const teamMembers = await getLocalData('json/teams.json');
    // console.log(schedule) ;

    return (
    <>

    <table className= "w-5/6 ml-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg border-separate table-fixed border-spacing-5 font-mono">
        <thead>
            <tr>
            <th className = "text-left">Team</th>
            <th className = "text-left top-02">Team Members</th>
            <th className = "text-left">Project</th>
            </tr>
        </thead>
        <tbody>
    {teams.map(function(r){
         return (
            <>
            <tr className = "ring ring-2">
                <td className = "text-left odd:bg-white even:bg-slate-400 ">{r.teamName}   </td>

                <td className = "text-left">  
                <table className = "text-left">
                {r.teamMembers.map(function(n) {
                    //console.log(n);
                    return (
                        <tr className = "text-left">
                            <td className = "text-left"> {n.member} </td>
                        </tr>
                        )
                })} 
                </table>
                </td>
                <td className = "text-left odd:bg-white even:bg-slate-400 ">{r.projDesc}   </td>
            </tr>
            </>
         )
       })}

    </tbody>
    </table>
    </>
    )
}

