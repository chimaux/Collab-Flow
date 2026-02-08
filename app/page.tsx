import Image from "next/image";
import "./globals.css"
import { funnelDisplay } from '@/lib/fonts'; 
import { getImageProps } from 'next/image';
import Link from "next/link"

export default function Home() {



  const common = {
    alt: "CollabFlow background",
    sizes: "100vw",               // full viewport width
    // fill: true,
    style: { objectFit: 'cover' as const, objectPosition: 'center' as const },
  };

  // Desktop version (large screens)
  const { props: desktopProps } = getImageProps({
    ...common,
    src: "/landingPage-desktop.webp",    // your desktop-optimized image
    width: 1920,                  // original width (for aspect ratio)
    height: 1080,                 // original height
    quality: 80,
  });

  // Mobile version (smaller screens)
  const { props: mobileProps } = getImageProps({
    ...common,
    src: "/landingPage-mobile.webp",     // your mobile-optimized version
    width: 750,                   // smaller original dimensions
    height: 1334,                 // portrait-ish if needed
    quality: 75,                  // slightly lower for mobile
  });




  return (
<div className="relative h-screen">
 {/* <Image
 src={"/lpBG.webp"}
 fill
 alt="Background image"
 
 /> */}

       <picture className="absolute inset-0 -z-10">
        {/* Desktop / large screens first */}
        <source media="(min-width: 768px)" srcSet={desktopProps.srcSet} />
        {/* Mobile fallback */}
        <img
          {...mobileProps}
          alt="CollabFlow background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture> 

<div className="absolute  h-screen w-screen">
  <div className={` ${funnelDisplay.className} font-extrabold text-3xl md:text-6xl text-center bg-[#10151f]  text-white  mt-25 md:mt-30  border-b-2 border-t-2 border-t-gray-500 border-b-gray-500 py-8`}>
  CollabFlow
</div>


<div className="w-full mt-20 ">

  <div className="   w-full text-center text-3xl md:text-4xl font-semibold
  bg-linear-to-b from-white/80 via-white/60 to-white/50
  bg-clip-text text-transparent
  [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]
  mask-image:linear-gradient(to_bottom,black_70%,transparent)
  md:bg-none md:text-white md:text-opacity-100">
  Collaborate seamlessly
</div>
<div className="  w-full text-center text-3xl md:text-4xl font-semibold
  bg-linear-to-b from-white/80 via-white/60 to-white/50
  bg-clip-text text-transparent
  [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]
  mask-image:linear-gradient(to_bottom,black_70%,transparent)
  md:bg-none md:text-white md:text-opacity-100">
  With your team
</div>

<div className="w-full text-center text-gray-100 md:text-white mt-16 md:mt-10 md:text-2xl">Streamline your workflow and boost productivity</div>
<div className="w-full text-center text-gray-100  md:text-white md:text-2xl">with our all-in-one collaboration platform.</div>

<div className="flex items-center justify-center gap-4 mt-10">
<Link
href={"/auth/sign-up"}
>
<div
    className="
      px-4 py-2 md:px-8 md:py-3.5 
      text-white font-medium text-lg
      bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600
      hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700
      transition-all duration-300
      rounded-sm shadow-lg hover:shadow-xl
      focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
    "
  >
    Sign Up
  </div>
</Link>
  
<Link  
href={"/auth/login"}
>
  <div
    className="
      px-4 py-2 md:px-8 md:py-3.5 
     
      text-white font-medium text-lg
      bg-gray-900
      border border-gray-300 hover:text-gray-900
      hover:border-gray-400 hover:bg-gray-50
      transition-all duration-300
      rounded-sm shadow-sm hover:shadow
      focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
    "
  >
    Log In
  </div>
</Link>

</div>
</div>
</div>
</div>
  );
}
