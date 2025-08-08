/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/missionStyle.module.css";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  weight: "700",
  subsets: ["arabic"], // Must include 'arabic' subset
  display: "swap",
});

export const metadata = {
  title: "QURAN Page",
  description: "This is about QURAN.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};
const BlogDetailPage = () => {
  return (
    <div className="max-w-8xl mx-auto py-10 px-5 mt-8 text-xl">
      <div className="lg:p-6 pt-2 space-y-6 w-full lg:w-[85%] mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
          <div className="bg-white-600 text-white p-6 items-center flex-col flex justify-center mb-8">
            <h1
              className="  sm:text-3xl   text-center 
               md:text-3xl 
               lg:text-4xl 
               xl:text-5xl 
               2xl:text-6xl font-bold italic text-slate-800"
            >
              In the Name of ALLAH, the Beneficent, the Merciful
            </h1>
          </div>
          <div className={`text-center mb-12 ${styles.textStyle}`}>
            <h2
              className="font-bold md:mb-2
                 sm:text-1xl 
               md:text-2xl 
               lg:text-3xl 
               xl:text-4xl 
               2xl:text-5xl"
            >
              QUR'AN: COMPILATION AND COLLATION
            </h2>
          </div>
          <div className="max-w-4xl mx-auto md:p-6 bg-white text-slate-800 font-sans">
            {/* Section 1 */}
            <div className="mb-8 mt-8">
              <h3 className="text-2xl font-bold mb-4">
                1. DEVINE PROTECTION OF QUR'AN
              </h3>

              <div className="md:pl-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    a) By THE ALMIGHTY ALLAH as revealed in Qur'an itself;
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-lg mb-2">
                    <p className="italic">
                      "Certainly we, it is we who have sent down admonition (The
                      Qur'an), and certainly we are indeed its guardian".
                    </p>
                    <p>(Chapter 15 (Surah Al-Hijr), verse 9)</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg mb-2">
                    <p className="italic">
                      "(O Prophet), do not move your tongue (during revelation)
                      for (reciting) it (The Quran) to receive in hurry. O It is
                      surely undertaken by us to store it (in your heart), and
                      to let it be recited (by you) after revelation is
                      completed".
                    </p>
                    <p>(Chapter 75 (Surah Al-Qiyamah), verses 16-17)</p>
                  </div>
                  <p className="mt-2">
                    Qur'an was revealed in parts and with intervals as deemed
                    appropriate by THE ALMIGHTY ALLAH, and, so as to be
                    preserved in heart of Prophet Muhammad{" "}
                    <span className={`${amiri.className} text-xl inline`}>
                      {/* Full honorific */}
                      {/* <p>محمد صلى الله عليه وسلم</p> */}
                      {/* Unicode ligature (ﷺ) */}( ﷺ ){/* With English text */}
                      {/* <p>
                        Prophet Muhammad{" "}
                        <span className="arabic-text">صلى الله عليه وسلم</span>
                      </p> */}
                    </span>{" "}
                    for onward easy preaching of people.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg my-2">
                    <p className="italic">
                      "Said those who disbelieved, "why has the Qur'an not been
                      revealed to him at once?" (It has been sent down) in this
                      way (i.e. in parts) so that we make your heart firm, and
                      we revealed it little by little."
                    </p>
                    <p>(Chapter 25 (Surah Al-Furqan), verse 32)</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg my-2">
                    <p className="italic">
                      "We have divided the Qur'an in portions, so that you may
                      recite it to the people gradually, and we have revealed it
                      little by little".
                    </p>
                    <p>(Chapter 17 (Surah Bani Israil), verse 106)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    b) Companions (May ALLAH be pleased with them) of Prophet
                    Muhammad{" "}
                    <span
                      className={`${amiri.className} text-xl inline font-semibold`}
                    >
                      ( ﷺ )
                    </span>
                  </h4>
                  <p>
                    not only wrote down the revelation as preached to them
                    through oral recitation by the Prophet Muhammad{" "}
                    <span className={`${amiri.className} text-xl inline`}>
                      ( ﷺ )
                    </span>{" "}
                    but also remembered by heart as well.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg my-2">
                    <p className="italic">
                      "But it (The Qur'an in itself) is (a package of) evident
                      signs in the hearts of those who are given knowledge. And
                      no one rejects our verses except the wrongdoers".
                    </p>
                    <p>(Chapter 29 (Surah Al-Ankabut), verse 49).</p>
                  </div>
                  <p>
                    Disbelievers besides many other efforts to oppose the
                    Prophet Muhammad{" "}
                    <span className={`${amiri.className} text-xl inline`}>
                      ( ﷺ )
                    </span>{" "}
                    and Qur'an, also use to propagate that Muhammad{" "}
                    <span className={`${amiri.className} text-xl inline`}>
                      ( ﷺ )
                    </span>{" "}
                    has got some scripture from old times people written for
                    him. Quran says it below;
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg my-2">
                    <p className="italic">
                      "And they said, "(These are) the tales of the ancients he
                      (the messenger) has caused to be written and they are read
                      out to him at morning and evening".
                    </p>
                    <p>(Chapter 25 (Surah Al-Furqan), verse 5)).</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg my-2">
                    <p className="italic">
                      "Say: This has been sent down by Him, who knows the
                      secrets within the heavens and the earth. Indeed, He is
                      All Forgiving, All Merciful."
                    </p>
                    <p>(Chapter 25 (Surah Al-Furqan), verse 6))</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                2. MATERIAL USED FOR WRITING DOWN QUR'AN
              </h3>
              <h4 className="font-semibold mb-2 text-1xl">
                PARCHMENT (ARABIC: RAQ)
              </h4>
              <p className="mb-4">
                Thin membrane obtained from cattle flesh. Earlier scrolls of
                Bible and books of Greek philosophers available in different
                libraries and museums are mostly written of parchments.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="italic">
                  "By the mount of Tur and by a book written on an unrolled
                  scroll"
                </p>
                <p>(Chapter 52 (Surah At-Tur), verses 1-3)</p>
              </div>

              <ul className="list-disc pl-6 space-y-2">
                <li>Tanned, perfumed goat skin (Arabic: Adeem)</li>
                <li>
                  Slate (Arabic: Lakhaf) - Grayish white stone tiles made for
                  writing
                </li>
                <li>
                  Bones of camel - A soccer shaped portion from camel's shoulder
                  bone, carefully separated and processed for writing.
                </li>
                <li>
                  Broad part of dates tree branches, close to trunk of tree
                  (Arabic: Aseeba)
                </li>
                <li>
                  Thin plain and quadrilateral shape wooden plates, processed
                  for writing. (Arabic: Qatab)
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mt-4">
                <p className="font-semibold underline">NOTE:</p>
                <p>
                  What is commonly found in books that Qur'an was written upon
                  leather or bones, these incomplete details give the impression
                  that Qur'an was written in very hard condition and without
                  availability of proper writing material of the time. This
                  impression is totally wrong. Material described above was used
                  not only in Arab but in Iranian and Roman empires as well,
                  because this was the best available material in Middle East
                  and Roman empire. Paper has been in use in China but not yet
                  introduced westward to Iran, Rome and Middle East.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 ">
                3. ORDER OF VERSES AND CHAPTERS
              </h3>
              <p className="mb-4">
                Qur'an is not revealed chapter by chapter, such as a chapter is
                completed and next to started. Whatever verses revealed, Prophet
                Muhammad{" "}
                <span className={`${amiri.className} text-xl inline`}>
                  ( ﷺ )
                </span>{" "}
                remembered them by heart instantaneously.
              </p>
              <p className="mb-4">
                Thereafter, the Prophet recite new revelation to companions (May
                ALLAH be pleased with them) and telling the chapter and place of
                addition. Those who were appointed to learn by heart, they learn
                it by heart and those designated to write, immediately write the
                new verses. The order and placement of chapters and verses also
                revealed by THE ALMIGHTY ALLAH through Archangel Gabriel (Peace
                be upon Him). A Musnad Ahmed's hadith describes the process
                narrated in under mention hadith of Prophet Muhammad{" "}
                <span className={`${amiri.className} text-xl inline`}>
                  ( ﷺ )
                </span>
                :
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="italic">Interpretation of Hadith:</p>
                <p>
                  Archangel Gabriel (Peace be upon Him) arrived and told me to
                  put this verse in this chapter at that position.
                </p>
              </div>
              <p className="mb-4">
                Moreover, Prophet Muhammad{" "}
                <span className={`${amiri.className} text-xl inline`}>
                  ( ﷺ )
                </span>{" "}
                after writing down of revelation immediately asked to read that
                back, so as to confirm the text is written correctly.
              </p>
              <p className="mb-4">
                During Mecca time before hijra normally besides some others,
                Sayyidina Othman Ghani and Sayyidina Ali ibn Abi Talib (May
                ALLAH be pleased with them) were the designated earliest
                writers.
              </p>
              <p>
                Later then on, after hijra when proper institution of writing
                revelation was established in Madinah Munawara, many officially
                designated companions (May ALLAH be pleased with them) performed
                this duty.
              </p>
              <p>
                The head of this institute was Hanzalah Bin Rabi (May ALLAH be
                pleased with him). Number of other members of institution are
                reported as 42. Never the less, this number used to fluctuate as
                per requirements and availability of Qur'an writers.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                4. COLLECTION OF QUR'AN IN SINGLE BOOK FORM
              </h3>
              <p className="mb-4">
                Qur'an was already available and preserved in the heart of
                thousands of companions (May ALLAH be pleased with them) and in
                written form with institute of companions designated for writing
                down Qur'an during the whole revelation period.
              </p>
              <p className="mb-4">
                During times of first caliph Sayyidina Abu Bakr (May ALLAH be
                pleased with him), in a war against Musaylimah Al-Kazzab The
                False Prophet (a man who claimed to be a partner of the Prophet
                Muhammad in the prophethood during the lifetime of Muhammad),
                around 700 huffaz (plural of hafiz: those who remember Quran by
                heart) martyred. This incident provoked Sayyidina Umer Ibn
                Khattab (May ALLAH be pleased with him) to request first
                righteous caliph to compile the Qur'an in one book form, from
                written manuscript available with companions in the form of
                individual chapters. The caliph constituted a seven members
                committee headed by Zaid Ibn Sabit (May ALLAH be pleased with
                him).
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                5. TERMS FOR REFERENCE FOR COMMITTEE
              </h3>
              <p className="mb-4">
                Sayyidina Abu Bakr (May ALLAH be pleased with him) issued
                following directions:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Firstly, all seven members exchange with each other, the
                  remembered and written Qur'an available with them.
                </li>
                <li>Before writing any verse read it for all of them.</li>
                <li>
                  When agreed unanimously compare it with available written
                  material which had been presented to and authenticated by the
                  Prophet Muhammad{" "}
                  <span className={`${amiri.className} text-xl inline`}>
                    ( ﷺ )
                  </span>{" "}
                  during period of revelation.
                </li>
                <li>
                  Each member shall then bring forward the recorded script and
                  jointly compare the verse for establishing exacting standards
                  of accuracy.
                </li>
                <li>
                  The process provided 14 witness, seven each on the basis of
                  their remembrance (hifz) and production of written record from
                  available treasure of scripts.
                </li>
                <li>
                  After all, 14 witnesses, additional two witnesses for each
                  verse will be taken from people outside the committee.
                </li>
                <li>
                  Two companions should testify each verse that they have
                  listened and remembered as it is being written by the
                  committee.
                </li>
                <li>
                  Thereafter, two written documented evidence shall be produced
                  from written revelation outside of committee for further
                  verification.
                </li>
                <li>
                  Two persons outside of committee shall give witness for such
                  documented verses.
                </li>
                <li>
                  Only after completion of above said process the verse should
                  be written in official book format of Qur'an.
                </li>
                <li>
                  All 114 chapters should be written in one paper size. (Ref:
                  Muhazarat e Qur'ani (Urdu) author Dr. Mehmood Ahmed Ghazi).
                </li>
              </ol>
              <p className="mt-4">
                Many copies of this compiled script were made and kept in Madina
                Munawara and distributed to each governor in all the then Muslim
                world, the caliphate. This process presented Qur'an in a single
                volume in the order of verses and chapters as taught by Prophet
                Muhammad{" "}
                <span className={`${amiri.className} text-xl inline`}>
                  ( ﷺ )
                </span>
                . The same order is still existing.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                6. OLDEST QUR'AN MANUSCRIPT, BIRMINGHAM UNIVERSITY, UK
              </h3>
              <p className="mb-4">
                It is worth mentioning that in 2015, Birmingham University found
                few parchments of Qur'an and upon carbon dating it was
                scientifically proved that parchment belong to an era of 568AD –
                645AD (Carbon dating process does not give exact date and year
                of the parchment but a block period). We know that Prophet
                Muhammad born in 571AD. Prophet Muhammad (Blessings and peace be
                upon him) received first revelation in 610AD and last revelation
                in 632AD before passing away to the eternal world.
              </p>
              <p>
                First caliph Sayyidina Abu Bakr (May ALLAH be pleased with him)
                died in 635AD, so the parchments are in fact from era after the
                completion of revelation. Any reader like to get detail upon it,
                could google search with words "Birmingham Qur'an" and would
                find the details at Birmingham University website.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                7. DIFFERENCE IN RECITATION DIALECT
              </h3>
              <p className="mb-4">
                After 14-15 years of compilation, during the reign of third
                righteous caliph Sayyidina Othman Ghani (May ALLAH be pleased
                with him), the boundaries of caliphate had enormously expanded
                in all directions. All Arabs and millions from non-Arabs
                territories embraced Islam and started reciting Qur'an.
              </p>
              <p className="mb-4">
                A new challenge of difference in dialect, accent and
                pronunciation appeared.
              </p>

              <div className="pl-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    a) Intra Arab differences
                  </h4>
                  <p>
                    As all languages encounter difference and change in accent
                    and dialect with geographical distance, same was existing
                    between geographically segregated and separated Arab tribes
                    and Clans, for example;
                  </p>
                  <ol className="list-[lower-roman] pl-6 space-y-1">
                    <li>
                      Banu Huzail (Hazali tribe) recite alphabet "Ha" as "Aa",
                      such as pronouncing phrase "Hatta Hein" as "Atta Aein".
                    </li>
                    <li>
                      Banu Asad for example recite "Teilamun" instead of
                      "Talamün"
                    </li>
                    <li>
                      Ansar of Madina used to recite word "Taboot" as "Tabüh".
                    </li>
                    <li>Qais tribe replace alphabet "Kaaf" with "Sheen".</li>
                    <li>Tamim tribe pronounce word "Ün" as "A'an".</li>
                    <li>
                      Another tribe used to pronounce alphabet "Seen" as
                      alphabet "Tâ".
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    b) Non-Arab recitation differences
                  </h4>
                  <p>
                    As the difference of dialect and accent among Arabs was big
                    it had been a bigger challenge for non-Arabs to counter.
                    Some areas recite alphabet "Qauf" as "Kha" and some recite
                    it as "Kâ" even the name "Qur'an" is written with the two
                    differences, it would appear as, "Khur'an" or "Kur'an".
                  </p>
                  <p className="mt-2">
                    Hence if each group of people had started writing in their
                    indigenous accents using alphabets of their own, we might
                    have had found thousands of different written/printed
                    Qur'ans now and none of these group of people could be able
                    to recite the copy of Qur'an of any other group.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="font-semibold">Note:</p>
                <p>
                  All material except Paragraph No. 5 & 6 is taken from
                  "Tadween-e-Qur'an" of Mawlana Syed Manazir Ahsan Gilani. The
                  words have been changed at some places for ease of reading.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                8. ADDRESSING THE ISSUE OF DIFFERENCE OF ACCENT AND DIALECT
              </h3>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Some such incidents came into notice of caliphate government
                  that people due to difference in accent and dialect even named
                  each other the kafir (non-believers).
                </li>
                <li>
                  First companion who raised the issue to third righteous caliph
                  was Hudaifa bin Yamaan (May ALLAH be pleased with him).
                </li>
                <li>
                  Sayyidina Othman Ghani (May ALLAH be pleased with him) brought
                  forward the issue in front a board of senior companions (May
                  ALLAH be pleased with them).
                </li>
                <li>
                  Ali ibn Abi Talib (May ALLAH be pleased with him) says that
                  Othman Ghani (May ALLAH be pleased with him) did right, and
                  whatever he decided to address the issue decided with our
                  consent and advice. Caliph Othman Ghani (May ALLAH be pleased
                  with him) asked the board for solution. The Board in turn
                  asked the caliph's opinion. The Caliph said that he believes
                  to bring the people on a standardized script. The board agreed
                  unanimously and caliph Othman Ghani (May ALLAH be pleased with
                  him) constituted a commission under the chairmanship of Zaid
                  bin Sabit (May ALLAH be pleased with him) who was the head of
                  commission for compilation of Qur'an during first caliph
                  times.
                </li>
                <li>
                  Caliph Othman Ghani (May ALLAH be pleased with him) ordered
                  that Qur'an shall be written in accent, dialect and alphabets
                  of tribe of Madhar as it was revealed upon a Madhari Arab (The
                  Prophet Muhammad{" "}
                  <span className={`${amiri.className} text-xl inline`}>
                    ( ﷺ )
                  </span>
                  ).
                </li>
                <li>
                  It is worth mentioning that Arabs at Macro scale were divided
                  as two elementary tribes. Northern 2/3 of Arabs were Madhari
                  and Southern 1/3 was Yamani. The further downward division as
                  Quraish, Thaqif, Hawazin (examples of Madhari such tribes) and
                  Azdi, Dausi (Yamani such tribes) was the sub division of
                  greater Madhari and Yamani tribes.
                </li>
                <li>
                  Finally, the official volume of Qur'an written in the accent
                  and dialect of Prophet Muhammad{" "}
                  <span className={`${amiri.className} text-xl inline`}>
                    ( ﷺ )
                  </span>
                  , completed. Later on, copies of this Qur'an were made and
                  sent to every governorate with instruction to discard all
                  previous copies.
                </li>
                <li>
                  After this Qur'an, up to written script become one and
                  standard, approved and accepted by all companions (May ALLAH
                  be pleased with them) of Prophet Muhammad (Blessings and peace
                  be upon him).
                </li>
                <li>
                  This effort standardized Qur'an as single scripture with fixed
                  alphabet. As we narrated earlier the Qur'an had already been
                  compiled in one volume during first caliph times in order of
                  verses and chapters as described by Prophet Muhammad{" "}
                  <span className={`${amiri.className} text-xl inline`}>
                    ( ﷺ )
                  </span>
                  .
                </li>
              </ol>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-1xl">
                9. CONSTRAINTS OF ACCENT AND DIALECT
              </h3>
              <p className="mb-4">
                Accent and dialect of humankind has limitations and constraints,
                and therefore cannot be avoided. Islam being religion of nature
                (DEEN FITRAH), hence, it encompasses all humanly limitations.
                Similarly, these constraints and limitation has very effectively
                been addressed by the Holy Prophet{" "}
                <span className={`${amiri.className} text-xl inline`}>
                  ( ﷺ )
                </span>{" "}
                in following (Prophetic traditions).
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="italic">Interpretation of Hadith:</p>
                    <p>
                      Qur'an is revealed in seven alphabets (for recitation).
                    </p>
                    <p className="mt-1">
                      Explanation: Apparently it means that every word can be
                      recited in seven accent and dialect.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="italic">Interpretation of Hadith:</p>
                    <p>I repent (astaghfar) daily hundred times.</p>
                    <p className="mt-1">
                      Explanation: Prophet{" "}
                      <span className={`${amiri.className} text-xl inline`}>
                        ( ﷺ )
                      </span>{" "}
                      used to repent a lot.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="italic">Interpretation of Hadith:</p>
                    <p>
                      seventy thousand people from my following (ummah) will
                      enter into paradise without questioning and judgement.
                    </p>
                    <p className="mt-1">
                      Explanation: here also seventy thousand means countless or
                      too many.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="italic">Interpretation of Hadith:</p>
                    <p>
                      Similarly, seven recitation hadith means that Qur'an will
                      be recited in many different accents and dialects.
                    </p>
                  </div>
                </li>
                <li>
                  <p>
                    Hence, Caliph Sayyidina Othman Ghani (May ALLAH be pleased
                    with him) and his advisors, the companion of Holy Prophet
                    successfully brought Qur'an in writing with officially
                    standardized and agreed alphabets.
                  </p>
                  <p className="mt-2">
                    Now even if different people e.g. recite alphabet "Qaf" (ق)
                    as "Kaaf" (ك) or "Khaaf" (خ) but it will be written as "Qaf"
                    (ق). Hence, accent and dialects constraints will remain but
                    will not affect the writing and printing script.
                  </p>
                </li>
              </ol>
            </div>

            {/* Footer */}
            <div className="text-center mt-12 border-t pt-4 ">
              <p className="text-align-center">Muhammad Junaid Khan</p>
              <p className="text-align-center">Email: Junaid.khan1962@gmail.com</p>
              <p className="text-align-center">Cell Phone No. 00923003518567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
