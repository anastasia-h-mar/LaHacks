import Link from "next/link"

import fsPromises from 'fs/promises';
import path from 'path'

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


export async function getLocalData(fileName: string) {
    // Get the path of the json file
    const filePath = path.join(process.cwd(), fileName);
    // console.log(filePath);
    
    // Read the json file
    const jsonDataBytes = await fsPromises.readFile(filePath);
  
    // DEBUG return jsonDataStr ;
  
    // Convert the bytes into a string and then parse that string into a JS object
    const objectData = JSON.parse(jsonDataBytes.toString());
  
    return objectData;
  }