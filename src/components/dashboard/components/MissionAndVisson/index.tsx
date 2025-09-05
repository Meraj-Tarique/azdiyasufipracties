import React from "react";
import styles from "@/styles/missionStyle.module.css";

const MissionAndVissionPage = () => {
  return (
    <section className="py-15 bg-bg-gray-50 flex flex-col justify-center items-center ">
      <div className="container mx-auto px-2 mb-12 text-center"></div>
      <div className="container mx-auto px-2 mb-12 text-center">
        <h2 className={`text-5xl mb-6 ${styles.textStyle}`}>𝓥𝓲𝓼𝓲𝓸𝓷</h2>
        <div className="mx-auto px-4 py-2 max-w-3xl">
          <p className="text-2xl text-[#5c4d3d] leading-relaxed text-align-center">
            {/* Enable ourselves to attain the state of{" "} */}
            𝓔𝓷𝓪𝓫𝓵𝓮 𝓸𝓾𝓻𝓼𝓮𝓵𝓿𝓮𝓼 𝓽𝓸 𝓪𝓽𝓽𝓪𝓲𝓷 𝓽𝓱𝓮 𝓼𝓽𝓪𝓽𝓮 𝓸𝓯{" "}
            <span className="italic">𝐄𝐡𝐬ā𝐧 </span>𝓪𝓼 𝓭𝓮𝓼𝓲𝓻𝓮𝓭 𝓲𝓷{" "}
            <span className="font-semibold">𝓗𝓪𝓭𝓲𝓽𝓱 𝓙𝓲𝓫𝓻𝓪𝓮𝓵 {"  "}</span>
            <span className="italic">
              {/* (Sahih Muslim, Book of Faith, Hadith No.1). */}( 𝓢𝓪𝓱𝓲𝓱 𝓜𝓾𝓼𝓵𝓲𝓶,
              𝓑𝓸𝓸𝓴 𝓸𝓯 𝓕𝓪𝓲𝓽𝓱, 𝓗𝓪𝓭𝓲𝓽𝓱 𝓝𝓸.1).
            </span>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-2 text-center">
        <h2 className={`text-5xl mb-6 ${styles.textStyle}`}>𝓜𝓲𝓼𝓼𝓲𝓸𝓷</h2>

        <div className="mx-auto px-4 py-2 max-w-3xl">
          <p className="text-2xl text-[#5c4d3d] leading-relaxed text-align-center ">
            𝓟𝓻𝓸𝓶𝓾𝓵𝓰𝓪𝓽𝓮 <span className="italic">𝓜𝓾𝓳𝓪𝓭𝓲𝓭𝓲 𝓢𝓾𝓯𝓲 𝓟𝓪𝓽𝓱 </span>{" "}
            𝓽𝓱𝓻𝓸𝓾𝓰𝓱 𝓪 𝓭𝓮𝓭𝓲𝓬𝓪𝓽𝓮𝓭 𝓮𝓭𝓾𝓬𝓪𝓽𝓲𝓸𝓷𝓪𝓵 𝓬𝓾𝓻𝓻𝓲𝓬𝓾𝓵𝓾𝓶 𝓸𝓯{" "}
            <span className="font-semibold"> 𝓢𝓪𝓵𝓪𝓽 𝔀𝓪 𝓼𝓪𝓵𝓪𝓶, 𝓓𝓱𝓲𝓴𝓻 </span>𝓪𝓷𝓭{" "}
            <span className="font-semibold">𝓜𝓸𝓻𝓪𝓺𝓲𝓫𝓪.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVissionPage;
