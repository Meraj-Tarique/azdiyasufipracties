/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

const SaintsBiographic = () => {
  return (
    <div className="max-w-8xl mx-auto py-6 px-5  text-xl bg-black sufi-Big-Image h-screen relative mt-7">
      <div className="absolute inset-0 z-0 blurred-background"></div>

      <div className="lg:p-4 pt-2 space-y-6 w-full lg:w-[85%] mx-auto relative z-10">
        <div className="text-center">
          <div className="sm:mb-12 sm:mt-12">
            <h2 className="sm:text-6xl md:text-3xl font-bold text-white">
              𝚂𝚊𝚒𝚗𝚝'𝚜 𝙱𝚒𝚘𝚐𝚛𝚊𝚙𝚑𝚒𝚎𝚜
            </h2>
          </div>
          <div>
            <h2 className="sm:text-5xl md:text-2xl text-white mb-5">
              <Link href="/service/saints-biographies/Hazrat Hamid Hasan Alawi?name=Hazrat Hamid Hasan Alawi (R.A)">
                𝘏𝘢𝘻𝘳𝘢𝘵 𝘏𝘢𝘮𝘪𝘥 𝘏𝘢𝘴𝘢𝘯 𝘈𝘭𝘢𝘸𝘪 (𝘙.𝘈)
              </Link>
            </h2>
          </div>
          <div>
            <h2 className="sm:text-5xl md:text-2xl text-white mb-5">
              <Link href="/service/saints-biographies/Syed Abdul Bari Shah?name=Syed Abdul Bari Shah (R.A)">
                𝘚𝘺𝘦𝘥 𝘈𝘣𝘥𝘶𝘭 𝘉𝘢𝘳𝘪 𝘚𝘩𝘢𝘩 (𝘙.𝘈)
              </Link>
            </h2>
          </div>
          {/* <div>
            <h2 className="sm:text-5xl md:text-2xl  text-white mb-5">
              <Link href="/service/saints-biographies/Syed Abdul Bari Shah?name=Syed Abdul Bari Shah (R.A)">
                ᴀɴᴏᴛʜᴇʀ ᴇxᴀᴍᴘʟᴇ (ʀ.ᴀ)
              </Link>
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SaintsBiographic;
