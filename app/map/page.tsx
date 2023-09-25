import Image from 'next/image'


export default function Map() {
    return (<>
        <div className = "flex justify-center">
        <Image
            src="/jadm.png"
            width={800}
            height={400}
            alt="LAHS Hackathon Dashboard 2024"
        />
        </div>
        </>

    )

}
