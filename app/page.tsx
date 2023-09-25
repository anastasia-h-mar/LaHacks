import Image from 'next/image'

export default async function Home() {

  return (
    <>
    <div className = "w-5/6 ml-auto text-sky-400 text-center font-mono">
      <Image
        src = "/buffer.jpg"
        width = {25}
        height = {25}
      />
      <div className = "text-5xl ">Welcome to Los Altos Hacks VIII!</div>
      <Image
        src = "/buffer.jpg"
        width = {25}
        height = {25}
      />
      <div className = "text-3xl ">Who are we, and what do we do?</div>
      <div className = "text-xl ">We are the largest highschool hackathon on the West Coast!</div>
      <Image
        src = "/buffer.jpg"
        width = {25}
        height = {25}
      />
      <div className = "text-3xl">Where is our hackathon held?</div>
      <div className = "text-xl">In the Juniper Aspiration Dome!</div>
      <Image
        src = "/buffer.jpg"
        width = {25}
        height = {25}
      />
      <div className = "text-3xl">How does the process work?</div>
      <div className = "text-xl">Arrive at the Juniper Dome at 12:00 and be ready for check-in!</div>
      <div className = "text-xl">From there, you will be guided through the</div>
      <div className = "text-xl">entire hackathon with our specialized team.</div>
      <Image
        src = "/buffer.jpg"
        width = {25}
        height = {25}
      />
      <div className = "text-3xl">What skill level is required?</div>
      <div className = "text-xl">None!  No experience level if required for the hackathon.</div>
      <div className = "text-xl">Additionally, we have workshops for beginners.</div>
      <Image
        src = "/buffer.jpg"
        width = {25}
        height = {25}
      />
      <div className = "text-3xl">We're so excited to have you join us this year!</div>
      <Image
        src = "/buffer.jpg"
        width = {25}
        height = {25}
      />
    </div>
    </>
  )
}

