/* eslint-disable react/no-unescaped-entities */
import DownloadButton from "@/components/DownloadButton";
import styles from "@/styles/missionStyle.module.css";

export const metadata = {
  title: "Sunnah Page",
  description: "This is about Sunnah.",
};
const BlogDetailPage = () => {
  return (
    <div className="max-w-8xl mx-auto py-10 px-5 mt-8 text-xl">
      <div className="lg:p-6 pt-2 space-y-6 w-full lg:w-[85%] mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
          <div className="bg-white-600 text-white p-6 items-center flex-col flex justify-center mb-8">
            <h1
              className="  text-center 
              sm:text-3xl   
               md:text-3xl 
               lg:text-4xl 
               xl:text-5xl 
               2xl:text-6xl font-bold italic text-slate-800"
            >
              In the Name of ALLAH, the Beneficent, the Merciful
            </h1>
          </div>
          <div className={`text-center mb-12 ${styles.textStyle} relative`}>
            <h1
              className=" font-bold md:mb-2
                 sm:text-1xl 
               md:text-2xl 
               lg:text-3xl 
               xl:text-4xl 
               2xl:text-5xl
                "
            >
              SUNNAH/HADITH
            </h1>
            <h2
              className="font-bold md:mb-2
                 sm:text-1xl 
               md:text-2xl 
               lg:text-3xl 
               xl:text-4xl 
               2xl:text-5xl"
            >
              BRIEF INTRODUCTION TO THE SCIENCE OF HADITH
            </h2>
            <DownloadButton url="https://raw.githubusercontent.com/Meraj-Tarique/azdiyasufipracties/ebe1a2a173aef33d75e2cbd4d4e13161ffe43eec/Sunnah%20Hadith.pdf" />
          </div>
          <div className="max-w-4xl mx-auto md:p-6 bg-white text-slate-800 font-sans">
            {/* Cover Page */}

            {/* Reference Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-center">REFERENCE</h2>
              <div className="overflow-x-auto">
                <table className=" text-sm min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2">S/N</th>
                      <th className="border border-gray-300 p-2">DETAIL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">01</td>
                      <td className="border border-gray-300 p-2">
                        Tadween Hadith (Urdu Book) by Syed Manazir Ahsan Gilani,
                        Published by: Majlis Nashriyat Islam, Karachi, Pakistan.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">02</td>
                      <td className="border border-gray-300 p-2">
                        Tas'hel Usul Hadith (Urdu Book) by Mufti Fida Muhammad,
                        Published by: Maktaba Rehmania, Lahore, Pakistan.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">03</td>
                      <td className="border border-gray-300 p-2">
                        Mo'ha'draat Hadith, (Urdu Book) by Dr. Mehmood Ahmed
                        Ghazi, Published by: Al-Faisal, Nashran Books, Lahore,
                        Pakistan.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8">
              {/* Preface */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Preface:
                </h3>
                <p className="mb-4">
                  QURAN, the revelation from Almighty Allah, is the first
                  primary source of Sharī'ah to be Compiled. Hadith and Sunnah
                  (Prophetic Traditions) from Prophet Muhammad (صلى الله عليه
                  وسلم) is the second primary source to understand and follow
                  the Devine Commands. There are secondary sources as well, like
                  al Ijma (Consensus), al Qiyas (Legal Analogy), which are parts
                  of Fiqh (Jurisprudence) but not our subject here.
                </p>
                <p className="mb-4">
                  How this tradition has been preserved and researched to use in
                  every walk of life is an example in itself, as no other
                  religion can produce such work as their Prophetic traditions.
                  Consequently, a lot of stuff available not only for Scholars
                  (Ul'ama, Orientalists) but for general reader as well.
                  Following is a brief introduction to the Science of Hadith,
                  it's Principles and Terminologies etc.
                </p>
              </div>

              {/* All Sections */}
              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    1. MEANING OF ARABIC WORD HADITH:
                  </h4>
                  <p>
                    Literal meaning of Arabic word "Hadith" is; Narration,
                    Discussion, Speech, Small Talk or Report.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    2. HADITH OF PROPHET MUHAMMAD (صلى الله عليه وسلم):
                  </h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      Sayings of Prophet صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ
                      (Arabic; Hadith Qauli).
                    </li>
                    <li>
                      Actions of Prophet صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ
                      (Arabic; Hadith Fe'a'll).
                    </li>
                    <li>
                      Silent agreement of Prophet صَلَّى اللهُ عَلَيْهِ وَآلِهِ
                      وَسَلَّمَ (Arabic; Hadith Taqreri). The kind of Hadith in
                      which the silence of the Prophet صَلَّى اللهُ عَلَيْهِ
                      وَآلِهِ وَسَلَّمَ is mentioned when Companions did
                      something in Prophet's presence or even in Prophet's
                      absence but later on brought in the notice and Prophet
                      صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ did not refrain
                      them.
                    </li>
                  </ol>
                </div>

                {/* Section 3 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    3. CATEGORIES AND TYPES OF HADITHS:
                  </h4>
                  <p>
                    Hadith Scholars (Mo'hadi'theen) have formulated different
                    categories and types with respect to number of narrators
                    (Ravi) in each era/generation, level of authenticity etc.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    4. FOLLOWING ARE CATEGORIES OF HADITH WITH RESPECT TO NUMBER
                    OF NARRATORS:
                  </h4>
                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold">
                        a. Mu'tawa'tar (Extensively Reported / Narrated):
                      </h5>
                      <p>
                        Mu'ta'wa'tar are such Hadiths which are narrated by a
                        large number of narrators, atleast more than Ten (10)
                        narrators in each era/generation i.e. Ten or more
                        Companions of Prophet (صلى الله عليه وسلم) Then Ten or
                        more students of Companions (Ta'bi'i) and down the line
                        in each era/generation upto Hadith Scholars, Compilers
                        of early Hadith Books.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">
                        b. Khabar Wa'hid (Single Narration / Report):
                      </h5>
                      <p>
                        According to Arabic Dictionary "Khabar Wa'hid" means
                        only one narrator in all era/generations, but in Hadith
                        terminology khabar Wa'hid means, the Hadith which does
                        not meet the criteria for Mu'tawa'tar with respect to
                        number of narrators in each era/generation. Hence,
                        Single Narration has further been divided into three
                        undermentioned categories.
                      </p>
                      <ol className="list-[lower-roman] pl-8 space-y-2 mt-2">
                        <li>
                          <span className="font-medium">
                            Mash'hor (Widely Known) Narrated by a reasonable
                            number of Narrators:
                          </span>
                          <p>
                            Number of Narrators is not less than three but not
                            equal to a number so as to qualify as Mu'tawa'tar,
                            in each era / generation of narrators.
                          </p>
                        </li>
                        <li>
                          <span className="font-medium">
                            Nadir / Qa'lei (Less known):
                          </span>
                          <p>
                            Number of narrators not less than two in each
                            era/generation.
                          </p>
                        </li>
                        <li>
                          <span className="font-medium">Ghareb (Rare):</span>
                          <p>Only one narrator in each era/generation.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    5. CLASSIFICATION OF HADITH WITH RESPECT TO CHARACTERISTICS
                    OF HADITH NARRATORS:
                  </h4>
                  <p className="mb-4">
                    Before explaining this classification, it is worth
                    mentioning that Hadith Scholars while compiling Hadith
                    collection invented "Ilm al Asma al Rijaal" (The Science of
                    the Names of Hadith Narrators) addressing the good,
                    acceptable and rejectable sides of personal character of
                    narrators which may affect the acceptance of text of Hadith
                    for use as support in extracting or elaborating Islamic
                    Creeds and Belief, primary Sharī'ah commands and subsequent
                    Jurisprudence.
                  </p>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h5 className="font-bold mb-2">
                      Appreciation of The Ilm Asma' Al Rijal (Science of the
                      Names of Person)
                    </h5>
                    <p className="mb-2">
                      The names collected, in the 'Science of the names' books
                      were studied by Muslims and non-Muslims as well. A famous
                      western Orientalists, Dr. Springer, says that 'no nation
                      in the world can compete with the Muslims in their respect
                      that they have an art like Al Asma' Al Rijal, There has
                      never been existed such an art in any nation in the past,
                      nor is there any possibility of it in the future, It is
                      such knowledge that the mention of five to six hundred
                      thousand persons comes before us and on the basis of this
                      Data of persons we can say with certainty that the
                      statement made by a person about the Holy Prophet (PBUH)
                      is Authentic or Good, Exalted or Halted, Extensively
                      reported, Widely known or Rear.
                    </p>
                    <p>
                      Another English writer Bosworth has written in one of his
                      books that with the help of this science, every aspect of
                      the Prophet's life, every word of his, and every act of
                      his are as clear as it is exposed to sunlight and there is
                      no doubt as to what it is. However, this is something that
                      even non-Muslims have acknowledged.
                    </p>
                  </div>

                  <p className="mb-4">
                    This "Science of the Names" contains catalogue data of more
                    than Five Hundred Thousand individual containing all
                    necessary details of their personal life in respect of each
                    individual, which may affect the use of Hadith. Now coming
                    back to the subject, following are classes of Hadith with
                    respect to characteristics of Narrator(s).
                  </p>

                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold">
                        a. Sahih Hadith (Authentic Hadith):
                      </h5>
                      <p>Standards for Sahih Hadith, are;</p>
                      <ol className="list-[upper-roman] pl-6 space-y-1">
                        <li>
                          Continuity and proven link between narrators in a
                          chain of Narrators.
                        </li>
                        <li>
                          All narrator are reported. "Aadil" (means, just,
                          pious, truthful) by the Scholars of al Asma al Rijaal.
                        </li>
                        <li>
                          Ability of Narrator for preserving what he heard and
                          onward reproducing correctly.
                        </li>
                        <li>
                          No compelling cause (ii'lal) in the chain of narrators
                          or the text.
                        </li>
                        <li>
                          Uniquity (Arabic: Shadhodh, from word Shaadh): Chain
                          of Narrators and/or Text has nothing uniquely
                          different to widely known standards of Hadith and/or
                          other Islamic Sciences.
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-semibold">
                        b. Hasan Hadith (Sound Hadith):
                      </h5>
                      <p>
                        The Hadith which has all required characteristics of
                        Authentic Hadith (Sahih). But one of the narrators is
                        known for weakness in remembering and correctly
                        reporting.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">
                        c. Da'if Hadith (Weak Hadith):
                      </h5>
                      <p>
                        A Hadith which does not fulfill the criteria for
                        Authentic or Good categories of Hadith. Scholars have
                        difference of opinion about practical use of Weak Hadith
                        in Islamic Sciences, but majority agrees that Weak
                        Hadith can be suggested for augmenting non-obligatory
                        prayers, worship and non-obligatory good deeds, provided
                        that weakness is not of high degree. Secondly, the Weak
                        Hadith is a subsidiary of proven and authentic practice
                        and intention should not be of considering Weak Hadith a
                        Sunnah (The practice of Prophet صلى الله عليه وسلم) but
                        intention should be of just practicing with caution.
                        Nevertheless, a Weak Hadith which is narrated through
                        many other chains of narrators, and the weakness (Do'af)
                        is not due to any narrator's non-piety or his general
                        attitude of falsehood, is elevated as Good Hadith,
                        because of many ways (Arabic: Tur'q, singular is Tareed)
                        of narration. It is worth mentioning that Weak Hadith
                        does not mean fabricated or concocted Hadith, likewise,
                        weak narrator does not mean a Liar.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">
                        d. Mau'Du Hadith (Fabricated):
                      </h5>
                      <p>
                        Fabricated Hadith is the made-up and false saying
                        promulgated with false reference to Prophet صلى الله
                        عليه وسلم. There are various ways of identifying and
                        separating this trash from collection of Hadith such as,
                        checking the data of narrators in Asma Al Rijal Books,
                        if a narrator is narrating from a previous narrator who
                        had died even before this Liar narrator was born, or the
                        narrator is proven Shia and text he is narrating is
                        concerning the highness of Ah'al Bai'at (The respected
                        family of Prophet صلى الله عليه وسلم) or the text is
                        contradictory to Qur'an, or a common understanding of
                        Hadith text. Another sign of Fabricated is that, the
                        text shows very high rewards against one small Practices
                        and deeds, (Allah Almighty knows better).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    6. CLASSIFICATION ON THE BASIS OF CHAIN OF NARRATORS:
                  </h4>
                  <p className="mb-4">
                    In this classification chain of narration is seen with
                    respect to its upward end, with respect to the text: - This
                    has following types.
                  </p>

                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold">
                        a. Mar'fu Hadith (Exalted):
                      </h5>
                      <p>
                        In this class, the chain reaches upto companion of
                        Prophet صلى الله عليه وسلم and Companion says as:
                      </p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>"Prophet صلى الله عليه وسلم Said this"</li>
                        <li>"Prophet صلى الله عليه وسلم did this act"</li>
                        <li>
                          "Such and such act were done in presence of Prophet
                          صلى الله عليه وسلم or done in the absence of Prophet
                          صلى الله عليه وسلم, but later on, reported to Prophet
                          صلى الله عليه وسلم and Prophet صلى الله عليه وسلم did
                          not refrain us".
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-semibold">
                        b. Mau'Quof Hadith (Halted):
                      </h5>
                      <p>
                        Text of Hadith (including saying and any act) referred
                        to and ending at a companion or group of companions.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">
                        c. Maq'tou Hadith (Cut by):
                      </h5>
                      <p>
                        Text of Hadith (including saying and any act) referred
                        to and ending at Ta'bi'i (Student of Companions) or
                        Ta'ba Ta'bi'i (Student of Ta'bi'i).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    7. CLASSIFICATION WITH RESPECT TO CONTINUITY IN THE CHAIN OF
                    NARRATORS:
                  </h4>
                  <p className="mb-4">
                    With respect to missing or falling of a narrator the Khabar
                    Wahid is sub-divide in seven types. Following commonly known
                    three types are the major portion of Hadith collection.
                  </p>

                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold">
                        a. Al Musnad (Connected):
                      </h5>
                      <p>
                        The Chain of narrators is unbroken and text refers to
                        Prophet صلى الله عليه وسلم means a Mar'Fu Hadith with
                        unbroken chain.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">
                        b. Al Mut'ta'sal/ Al Mau'sul (adjoined):
                      </h5>
                      <p>
                        The Chain is unbroken irrespective of Hadith is Mar'fou
                        or Mau'qouf.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">
                        c. Al Mursal (Sent / Transmitted):
                      </h5>
                      <p>
                        Ta'bi'i is narrating and referring to Prophet صلى الله
                        عليه وسلم, without mentioning any Companion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 8 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    8. TYPES OF BOOKS/ COLLECTIONS OF HADITH WITH RESPECT TO
                    CONTENT / CHAPTERS:
                  </h4>

                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold">
                        a. Al-Ja'maiy (Comprehensive):
                      </h5>
                      <p>
                        It contains Hadith on all eight topics of Islamic
                        sciences, such as,
                      </p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>
                          Seir, The biography of sacred life of Prophet صلى الله
                          عليه وسلم
                        </li>
                        <li>Aa'dah (Social Practices)</li>
                        <li>Tafsir (Commentary upon Qur'an text)</li>
                        <li>Aa'quaid (Creeds and Beliefs)</li>
                        <li>
                          Fi'tan (Prophecies regarding future events adversely
                          affecting believers)
                        </li>
                        <li>
                          Ash'raat (Prophecies/Sign of the day of judgement)
                        </li>
                        <li>Eh'kaam (Commands Concerning Jurisprudence)</li>
                        <li>
                          Ma'na'qib (Characteristics of; Ah! Al Bai'it,
                          Companions, different Arab tribes and different parts
                          of society).
                        </li>
                      </ol>
                      <p className="mt-2">
                        Few such Books are; Al-Jam'maey Al-Sahi'h Al-Bukhari,
                        Al-Ja'maey Al Sunan Al-Trmidhi.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">b. Sunan:</h5>
                      <p>
                        Books containing Hadiths regarding jurisprudence (Fiqh)
                        such as, Sunan Abi Dawood, Sunan Ibn Maja.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">c. Musnad:</h5>
                      <p>
                        Hadith books containing all Hadiths narrated by each
                        companion formatted in Alphabetical order of the names.
                        Most famous such book is Musnad Imam Ahmed Ibn Hanbal.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">d. Mustadrak:</h5>
                      <p>
                        Any Hadith not mentioned by earlier Scholars but meet
                        their standard for collection. Such as Imam Bukhari
                        might not found a Hadith with respect to his "Sahih
                        Standards", but later on found by the scholars and that
                        Hadith meet the standards of Imam Bukhari for his al
                        Sahih, are collected, and collection is named Mustadrak.
                        Mustadrak Hakim is most famous such book.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">e. Mo'ajjam:</h5>
                      <p>
                        Contain Hadith arranged in the order of first alphabet
                        (Arabic) of first word of Hadith. Most famous such book
                        is Moajjam Al-Tibrani.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 9 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    9. LEVEL OF HADITH BOOKS / COLLECTIONS:
                  </h4>

                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold">
                        a. First Level Al-Sahih:
                      </h5>
                      <p>
                        All hadiths contained in such Books meet the standard
                        for "Sa'hih" (authentic), e.g. Sahih Al Bukhari, Sahih
                        Muslim, Sahih Ibn Khozaima etc.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">b. Second Level:</h5>
                      <p>
                        Book which contains Sahih and Hasan Hadiths, e.g., Sunan
                        Na'sai, Sunan Abu Dawood.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">c. Third Level:</h5>
                      <p>
                        Such books which contain Sahih and Hasan Hadiths largely
                        but some Da'if and rejected Hadith are also included.
                        Sunan Ibn Maja even included in "Sahah Sitta" (Six most
                        authentic Hadith books) also falls at this level due to
                        few Da'if and rejected Hadiths. Particular examples are,
                        Sunan Dar Qu'tani, Sunan Kubra by Bayha'qui etc.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">d. Fourth Level:</h5>
                      <p>
                        Such books which are compiled of mostly from Da'if
                        Hadiths e.g Musnad Al Firdous by Allama Delami, Nawdir
                        Al Asool Fil Hadith al Rasool صلى الله عليه وسلم by
                        Hakeem Tirmidhi and few others. In fact, these books are
                        written to document information upon such narrators who
                        are famous for weakness (Du'af: weakness of narrators),
                        hence, most of their narrations are obviously weak. It
                        is reiterated that Weak Hadith does not mean fabricated
                        or concocted Hadith, likewise, weak narrator does not
                        mean a Liar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 10 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    10. NUMBER OF PROPHETIC HADITHS:
                  </h4>

                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold inline-block">a.</h5>
                      <p>
                        Hadith Books are compiled in the form of chapters upon
                        specific areas of Islamic sciences. Sometime a single
                        Hadith text falls under more than one subject,
                        consequently, it is mentioned in all such relevant
                        chapters. This resulted in a lot of needed and necessary
                        repetitions. Great Hadith scholar and commentator of
                        Sahih Bukhari, Hafiz Ibn Hajar Al Asqalani says that
                        Sahih Bukhari has 9082 Hadiths, this includes
                        repetitions, suspensions, observations, and evidences.
                        If the repetitions are removed and only those hadiths
                        that have been narrated directly from the Messenger of
                        Allah (صلى الله عليه وسلم) with complete chain of
                        transmission, then there are Two Thousand Six Hundred
                        (2,602) Hadiths. Similarly, Sahih Muslim has 7500
                        Hadiths and without repetition the number is 3033.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">b.</h5>
                      <p>
                        What is the total number of hadiths in all major Hadith
                        Collections? It is very difficult to say anything about
                        it. But a general estimate is that the total number of
                        texts after removing the repetitions between Forty to
                        Fifty thousand.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 11 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    11. THE NUMBER OF HADITHS:
                  </h4>

                  <div className="pl-6 space-y-4">
                    <div>
                      <h5 className="font-semibold">a.</h5>
                      <p>
                        You must have heard that Imam Bukhari complied his book
                        Sahih Bukhari from six hundred thousand Hadiths. Sahih
                        Bukhari has about twenty-six hundred Hadiths without
                        repetition. So, where did those remaining four to five
                        hundred thousand hadiths gone? Or Imam Ahmad narrated
                        40,000 out of 7,500,00, where the remaining Hadiths
                        gone? Answer to this question is as follows;
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">b.</h5>
                      <p>
                        When a Mo'had'dith says that he has one hundred thousand
                        hadiths, here one hundred thousand hadiths doesn't mean
                        one hundred thousand texts, rather he means, for
                        example, he went to 20 people and researched on a single
                        text of Hadith, listened the same single text but having
                        20 different Chains of Narrators. Now Mo'had'dith says
                        that he has received 20 Hadiths from 20 different Chains
                        of Narrations.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">c.</h5>
                      <p>
                        Some of the sayings of Holy Prophet (PBUH) are such that
                        if all their ways and traditions are collected, the
                        number reaches to hundreds for one single Tradition. The
                        famous hadith (Annamaal – A'amal Bin'niyyat), all its
                        Ways and Chains of Narrations if collected are around
                        seven hundred and fifty. Now, the Mo'had'dith will say
                        that he has seven hundred fifty hadiths with text
                        (Annamaal – Aamal Bin'niyyat), but actually the Hadith
                        is the same one text.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold">d.</h5>
                      <p>
                        Imam Bukhari did this by going to dozens of men to
                        confirm and re-confirm and verify and re-verify and
                        re-re-re-verify each hadith. By going to hundreds of
                        teachers, the same hadith is every time new additional,
                        having different number to distinguish with each other
                        in his collation. Then the best among the collection
                        Imam Bukhari has recorded his book Al-Ja'maly Al-Sahih
                        Al Bukhari. If he had quoted one hadith with all the
                        entire Chains of Transmission, perhaps the entire Sahih
                        Bukhari would have been hundred times thicker than the
                        existing book. Hence, when Imam Bukhari says that he has
                        chosen Hadiths for Sahih Bukhari from among four hundred
                        thousand hadiths, it means, that he has verified each
                        hadith hundreds of times, from dozens of Sheikhs, and
                        then the chain of transmission he found to be the best
                        among them is adopted. Rest of the collection has been
                        ignored.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 12 */}
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    12. AL-SAHAH AL-SIT'TA (SIX SOUND BOOKS OF HADITH):
                  </h4>
                  <p className="mb-4">
                    Scholars in majority accept the following order of Six Sound
                    Book:
                  </p>
                  <ol className="list-decimal pl-6 space-y-1" type="i">
                    <li> Sahih Bukhari</li>
                    <li>Sahih Muslim</li>
                    <li>Sunan Na'sai</li>
                    <li>Sunan Abu Dawood</li>
                    <li>Sunan Tirmidhi</li>
                    <li>Sunan Ibn Maja</li>
                  </ol>
                  <p className="mt-4">
                    Nevertheless, a large number of scholars exclude Sunan ibn
                    Maja because it contains 21 or 25 weak (Da'if) and / or
                    Rejected (Mun'kar) Hadiths. Hence, some scholar included
                    Ma'wat'ta Imam Malik and few included Musnad Darmi in place
                    of Sunan Ibn Maja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
