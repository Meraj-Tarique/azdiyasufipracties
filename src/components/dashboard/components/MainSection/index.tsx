// import Image from "next/image";
// import bgImage from "@images/slide-2.jpg";

// export default function MainSection() {
//   return (
//     <section className="relative h-screen">
//       <Image
//         src={bgImage || null}
//         alt="Blue Mosque illuminated at night"
//         fill
//         className="object-cover"
//         priority
//       />

//       <div className="absolute inset-0 bg-black/50" />
//       <div className="relative container mx-auto px-4 h-full flex items-center">
//         <div className="max-w-2xl text-white text-center">
//           <div
//             className="flex justify-center mb-4 w-auto h-[60] relative"
//             style={{
//               position: "relative",
//             }}
//           >
//             <Image
//               src={
//                 "https://mlena6qa4grg.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nauthemes.net/alim/wp-content/uploads/2020/07/bsml-txt.png"
//               }
//               alt="Blue Mosque illuminated at night"
//               // width={600}
//               // height={400}
//               // className=" w-auto"
//               objectFit="contain"
//               layout="fill" // Ensures the image covers the container
//             />
//           </div>
//           {/* <div className="flex justify-end mb-4">
//             <Image
//               src={
//                 "https://mlena6qa4grg.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nauthemes.net/alim/wp-content/uploads/2020/07/bsml-txt.png"
//               }
//               alt="Blue Mosque illuminated at night"
//               // width={400} // Set the width for better resolution
//               // height={200} // Set the corresponding height
//               layout="fill"
//               objectFit="cover"
//             />
//           </div> */}

//           <h1
//             className="text-5xl md:text-6xl font-bold mb-6"
//             style={{
//               fontFamily: '"Katibeh", Sans-serif',
//             }}
//           >
//             Welcome to Azdiya Sufi Teachings
//           </h1>
//           <p className="text-xl mb-8">
//             Organisation for Promoting Shari`ah Compliant Sufism
//           </p>
//           {/* <Button className="bg-[#C5A059] hover:bg-[#B08E4C] text-white px-8 py-6 text-lg">
//             Learn More
//           </Button> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Amiri } from "next/font/google"; // Updated import
import Image from "next/image";
import bgImage from "@images/slide-2.jpg";

const amiri = Amiri({
  weight: "400",
  subsets: ["latin"],
});

export default function MainSection() {
  return (
    <section className="relative h-screen">
      <Image
        src={bgImage || null}
        alt="Blue Mosque illuminated at night"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/0" />
      <div className="relative container mx-auto px-4 h-full flex flex-col">
        {/* Arabic Text Container - Centered at Top */}
        <div
          className={`${amiri.className} gap-12 flex-1 flex flex-col justify-center items-center text-[#f1e8db] text-center`}
        >
          <h1 className="text-2xl leading-tight sm:text-4xl md:text-5xl mb-6 md:mb-8">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h1>

          <h1 className="text-2xl leading-tight sm:text-4xl md:text-5xl mb-8 md:mb-10">
            اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِیْنَ
          </h1>

          <h1 className="text-2xl leading-tight sm:text-4xl md:text-5xl mb-10 md:mb-12">
            اَللَّهُمَّ صَلِّ عَلَى سَيّدِ نَا مُحَمَّدٍ وَّ سِيْلَتِى اِلَيْكَ
            وَالِهِ وَسَلّـِمْ
          </h1>

          <h1 className="text-2xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ
            يَحْزَنُونَ
          </h1>
        </div>

        {/* English Text Container - Bottom Left */}
        {/* <div
          className="pb-16 text-white"
          style={{ fontFamily: '"Katibeh", Sans-serif' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Azdiya Sufi Teachings
          </h1>
          <p className="text-xl">
            Organisation for Promoting Shari`ah Compliant Sufism
          </p>
        </div> */}
      </div>
    </section>
  );
}
