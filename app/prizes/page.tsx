import Image from 'next/image'

export default function Prizes() {
    return ( 

        <>

        <div className = "flex"> 
            <table className = "w-2/3 ml-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg border-separate table-fixed border-spacing-5 font-mono">

            <thead>
            <tr className = "text-2xl text-left">
            <th> Prizes </th>
            <th> Category </th>
            </tr>
            </thead>

            <tbody>

            <tr>
                <td>
                <Image
                    src = "/cash.jpg"
                    width = {200}
                    height = {100}
                />
                </td>
                <td> <p>First Place Prize: $2,000 </p></td>
            </tr>

            <tr>
                <td>
                <Image
                    src = "/OLED.jpg"
                    width = {200}
                    height = {100}
                />
                <Image
                    src = "/controller.jpeg"
                    width = {200}
                    height = {100}
                />
                </td>
                <td> <p>Second Place Prize: Nintendo Switch - OLED + Pro Controller</p></td>
            </tr>

            <tr>
                <td>
                <Image
                    src = "/drone.jpg"
                    width = {200}
                    height = {100}
                />
                </td>
                <td> <p>Third Place Prize: Drone </p></td>
            </tr>

            <tr>
            <td>
            <Image
                src = "/projector.jpg"
                width={200}
                height={100}
            />
            </td>

            <td>

            <p>
                Best Creative Hack:
                Mini Projector
            </p>    
            </td>       
            </tr> 

            <tr>
            <td>
            <Image 
                //className = "float: left"
                src = "/airtag.jpg"
                width={250}
                height={100}
            />
            </td>
            <td>

            <p>
                Best Mobile Hack:
                4-Pack Air Tags
            </p>
            </td>
            </tr>
            </tbody>
            </table>

        </div>

        </>
    )
}
