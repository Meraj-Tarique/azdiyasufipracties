import React from "react";
import styles from "@/styles/missionStyle.module.css";

const MissionAndVissionPage = () => {
  return (
    <section className="py-15 bg-bg-gray-50 flex flex-col justify-center items-center ">
      <div className="container mx-auto px-2 mb-12 text-center">
        <h2 className={`text-5xl mb-6 ${styles.textStyle} !font-normal`}>𝓥𝓲𝓼𝓲𝓸𝓷</h2>
        <div className="mx-auto px-4 py-2 max-w-3xl">
          <p className="text-2xl text-[#5c4d3d] leading-relaxed text-align-center">
            {/* Enable ourselves to attain the state of{" "} */}
            ᴇɴᴀʙʟᴇ ᴏᴜʀꜱᴇʟᴠᴇꜱ ᴛᴏ ᴀᴛᴛᴀɪɴ ᴛʜᴇ ꜱᴛᴀᴛᴇ ᴏꜰ{" "}
            <span className="italic">𝐄𝐡𝐬ā𝐧 </span>ᴀꜱ ᴅᴇꜱɪʀᴇᴅ ɪɴ{" "}
            <span className="font-semibold">ʜᴀᴅɪᴛʜ ᴊɪʙʀᴀᴇʟ</span>
            <span className="italic">
              {"  "}( ꜱᴀʜɪʜ ᴍᴜꜱʟɪᴍ, ʙᴏᴏᴋ ᴏꜰ ꜰᴀɪᴛʜ, ʜᴀᴅɪᴛʜ ɴᴏ. 1)
            </span>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-2 text-center">
        <h2 className={`text-5xl mb-6 ${styles.textStyle} !font-normal`}>𝓜𝓲𝓼𝓼𝓲𝓸𝓷</h2>

        <div className="mx-auto px-4 py-2 max-w-3xl">
          <p className="text-2xl text-[#5c4d3d] leading-relaxed text-align-center ">
            ᴘʀᴏᴍᴜʟɢᴀᴛᴇ <span className="italic">ᴍᴜᴊᴀᴅɪᴅɪ ꜱᴜꜰɪ ᴘᴀᴛʜ </span>{" "}
           ᴛʜʀᴏᴜɢʜ ᴀ ᴅᴇᴅɪᴄᴀᴛᴇᴅ ᴇᴅᴜᴄᴀᴛɪᴏɴᴀʟ ᴄᴜʀʀɪᴄᴜʟᴜᴍ of {" "}
            <span className="font-semibold"> Salat wa salam, Dhikr </span>and{" "}
            <span className="font-semibold">Muraqiba.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVissionPage;
