/* eslint-disable react/no-unescaped-entities */
import MainHeading from "@/components/Headings/MainHeading";
import styles from "@/styles/missionStyle.module.css";
import { Amiri } from "next/font/google";

// const ESignatureComponent = dynamic(() => import("@modules/filemanager/Esignature/"), {
//   ssr: false,
// });

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
const SpritualInfulence = () => {
  return (
    <div className="max-w-8xl mx-auto py-10 px-5 mt-8 text-xl">
      <div className="lg:p-6 pt-2 space-y-6 w-full lg:w-[85%] mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
          <MainHeading />
          <div className={`text-center mb-12 ${styles.textStyle} relative`}>
            {/* QURAN COMPILATION AND COLLATION.pdf */}
            <h1
              className=" font-bold md:mb-2
                  sm:text-xl 
              md:text-1xl 
              lg:text-3xl 
              xl:text-3xl
                  "
            >
              Spiritual Infulence

            </h1>
            <h2
              className="mb-2
                   sm:text-xl 
              md:text-1xl 
              lg:text-3xl 
              xl:text-3xl"
            >
              From The Scared Sunnah of Prophet Muhammad &#xFDFA;
            </h2>
            {/* <DownloadButton url="https://raw.githubusercontent.com/Meraj-Tarique/azdiyasufipracties/2937bfbe97a97556cf7cbbfb2732f85712830bff/QURAN%20COMPILATION%20AND%20COLLATION.pdf" /> */}
          </div>
          <div className="max-w-4xl mx-auto md:p-6 bg-white text-slate-800 font-sans">
            {/* Section 1 */}
            <div className="mb-8 mt-8">

              <div className="md:pl-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 inline">1.</h3>
                  <p className="mt-2 ml-4 inline">
                    In the Qur'an, Allah Almighty has mentioned three
                    duties of Prophet Muhammad   <span className={`${amiri.className} text-xl inline`}>
                      ( ﷺ )
                    </span>{" "} The Quran:
                    <div className="bg-gray-100 p-4 rounded-lg mb-6 mt-4">
                      <p className="italic">
                        Allah has surely conferred favor on the believers
                        when He raised in their midst a messenger from
                        among themselves who recites to them His verses
                        and makes them pure and teaches them the Book
                        and the Wisdom, while earlier, they were in open
                        error.
                      </p>
                      <p>Surah Al-Imran, Ch.3 verse 164, translation, Mufti Taqi Usmani.</p>
                    </div>
                    Earlier in Chapter 2 (Surah Al-Baqra') Verse 129, Allah
                    Almighty mentions the supplication of Ibrahim and
                    Ismael as under; The Qur'an:

                    <div className="bg-gray-100 p-4 rounded-lg mb-4 mt-3">
                      <p className="italic p-2">
                        "And, our lord, raise in their midst, a Messenger
                        from among them, who should recite to them
                        Your verses and teach them the Book and the
                        wisdom, and cleanse them of all impurities.
                        Indeed You and You alone, are the All-Mighty
                        and All-Wise.
                      </p>
                      <p>Surah Al-Baqra', Ch.2 verse 129, translation, Mufti Taqi Usmani.</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                2. Three Prophetic Duties
              </h3>
              <p className="mb-4">
                Prophet Muhammad صلى الله عليه وسلم, The Best of Creation, The Last
                and Final Messenger of Almighty Allah SWT,
                discharged His divine duties by:
              </p>
              <div className="pl-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    a) Recitation of verses:
                  </h4>
                  <p>
                    The word Qur'an literally means, 'The Recitation'. Here
                    in this Qur'anic context, it means, the recitation of
                    revealed Verses and communicating the divine
                    Message/Command contained in revelation. Prophet
                    صلى الله عليه وسلم recited the Qur'an, and communicated It's Message to
                    both, the believers and disbelievers, through His own
                    sacred example i.e.
                  </p>
                  <ol className="list-[lower-roman] pl-6 space-y-1 mt-2">
                    <li>
                      The Sunnah; the Prophetic way of Life, and,
                    </li>
                    <li>
                      .Hadith; the Sayings, Actions and Silent Agreement
                      of Prophet صلى الله عليه وسلم upon acts of Companions in His exalted
                      presence, throughout the Prophetic Mission.
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    b) Tazkiyah:
                  </h4>
                  <p>
                    Prophet Muhammad صلى الله عليه وسلم practically demonstrated the
                    excellent habits, behaviour, values in His sacred worldly
                    life and; purified the souls, by identifying and removing
                    the ill behaviours and diseases of the soul, such as,
                    arrogance, wonder, shyness, anger and stinginess, etc..
                    and by inculcating rightful behaviours and values such as piety, truthfulness, trustworthiness, generosity,
                    bravery, patience etc.. to attain peace of Mind, Body and
                    Soul, needed for success in both, this worldly life and
                    hereafter.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    c) Teaching of the Book and Wisdom:
                  </h4>
                  <p>
                    Explaining to every follower, the knowledge and the
                    wisdom contained in the Holy Qur'an through the
                    Sunnah and Hadiths, according to each individual's
                    intellect, capacity and ability.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 ">
                3. The Prophetic Mission in General
              </h3>
              <p className="mb-4">
                Allah Almighty gives his Messengers and Prophets All
                the required knowledge and ability to discharge above
                mentioned three divine responsibilities. Whatever
                knowledge Allah Almighty gives to the Prophets is a
                trust unto Them for their Ummah (the nation/followers
                of the Prophet), and the Prophets are the ones who
                convey the best trusts. After the demise of Prophets, The
                Prophetic Mission is taken over by the Successors from
                Ummah, i.e. The Rulers, Government officials, Scholars
                of Divine Book and Prophetic Traditions, Theologians
                and the Jurists.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl">
                4.  Prophetic Mission after Prophet
                Muhammad صلى الله عليه وسلم
              </h3>
              <div className="pl-6 space-y-4">
                <div>
                  <p>
                    <h4 className="font-semibold mb-2 text-1xl inline">
                      a).
                    </h4> After the departure of Prophet Muhammad صلى الله عليه وسلم from
                    this mortal world, the above mentioned three
                    Responsibilities of Prophetic Mission transferred to the
                    Muslim Rulers, Government officials, Scholars and
                    Shaykhs, and to those whom Allah Almighty has given
                    superiority over the common people in many respects.
                    They are obliged to fulfill these three responsibilities
                    with sincerity and every possible effort, under the
                    guidance available from the Qur'an, the Sunnah of the
                    Prophet Muhammad صلى الله عليه وسلم, the Way of Companions and
                    Prophetic Family (Ahl Al-Bait) all of these blessed men
                    and women are Imitable and their lives are exemplary
                    for all future generations till the Doomsday.
                  </p>
                </div>

                <div>
                  <p>
                    <h4 className="font-semibold mb-2 text-1xl inline">
                      b).
                    </h4> Qur'an scholars ('Mufassir', meaning Commentators),
                    Qur'an Reciters (Qur'aa, Singular; Qari), Qur'an
                    Memorisers (Huffaz, Singular Hafiz), Jurists (Fuq'ha
                    Singular; Faqih), Hadith Scholars (Mohadiths),
                    Theologians (Mutakal'lims) bear the burden of the First
                    and Third responsibility mentioned above. The Shaykhs
                    of the Tariqah/Tasawwuf/Sufism (Mysticism, though
                    word Mysticism doesn't correctly define the meaning of
                    Sufism), the Sufis, are responsible for the purification and cleansing of the Inner-Self of individual Soul. Sufis
                    mentor common Muslims to achieve the "Quality of
                    Goodness" in the acts of worship, as mentioned and
                    desired in the Hadith of Gabriel. (Ref: Hadith # 10,
                    Kitab Al-Iman, Sahih Muslim, Hadith # 50, Kitab Al-
                    Iman, Sahih Al-Bukhari)
                  </p>
                </div>
                <div>
                  <p>
                    <h4 className="font-semibold mb-2 text-1xl inline">
                      c).
                    </h4> Purpose of this paper is to explain that the Tariqah,
                    Tasawwuf and Sufism, is the Prophetic way of
                    "Tazkiyah". Thus, The mentoring by and companionship
                    of the Shaykh/Sufi of Tariqah/Tasawwuf is a Prophetic
                    Heritage in the same way as the sciences of the Qur'an,
                    Hadith, Sunnah, Aqeedah (Theology, Beliefs and
                    Creeds) and Jurisprudence, in the case of Mufass'sirs,
                    Muhadiths, Mutakal'lims (Theologians) and Fuq'ha, etc..
                  </p>
                </div>
                <div>
                  <p>
                    <h4 className="font-semibold mb-2 text-1xl inline">
                      d).
                    </h4> For the Companions of the Prophet Muhammad صلى الله عليه وسلم
                    just one glance The Chosen One, was enough to purify
                    and cleanse the souls. The reward of this glance and
                    status of "Companion" (Sahabi, plural; Sahaba) is so
                    high, unique that the Title can't be given to any future
                    great Scholar, Saint, or a righteous and steadfast
                    muslim. This is the belief of the Ahl Al-Sunnah Wal
                    Jama'ah.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-2xl inline ">
                5. The Spiritual Influence of Prophet صلى الله عليه وسلم
              </h3>
              <p className="mb-4 mt-3">
                The Spiritual Influence of Prophet صلى الله عليه وسلم For Tazkiyah of
                individuals. Here are some events from the blessed and
                sacred life of the Prophet صلى الله عليه وسلم which show the
                demonstration of Spiritual Influence by The Prophet
                صلى الله عليه وسلم upon Companions and others.
              </p>
              <div className="pl-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    a) Umar bin Al-Khattab:
                  </h4>
                  <p>
                    Once, Sayyedna Umar bin Khattab was sitting in the
                    presence of the Holy Prophet صلى الله عليه وسلم, when the Holy Prophet
                    (صلى الله عليه وسلم) asked:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "O Messenger of Allah صلى الله عليه وسلم, I love you more than
                    anything else, but sometimes I feel that the love of
                    my children is a little more than your love."
                  </p>

                  <p>
                    The Holy Prophet صلى الله عليه وسلم said:
                  </p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    "O Umar! If this is the case, then your faith is not
                    yet complete."
                  </p>

                  <p>
                    After this statement, the heart of Umar bin Khattab
                    changed, until the love of the Holy Prophet صلى الله عليه وسلم prevailed
                    over all other loves in his heart and he spontaneously
                    exclaimed: By the Lord of Glory! Now the love of the
                    Holy Prophet صلى الله عليه وسلم is more than my own life and it will
                    never decrease until the day I die. Then the Prophet صلى الله عليه وسلم took Umar by the hand and said: "Now your faith is
                    complete".(3)
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    (3) Sahih Bukhari, Kitab Al-Iman 6: Hadith 2445</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    b) Fadala bin Umair:
                  </h4>
                  <p>
                    Fadala bin Umair bin Maluh Laithi was one of the
                    fiercest enemies of the Messenger of Allah صلى الله عليه وسلم. When the
                    Prophet صلى الله عليه وسلم was staying in Mecca at the time of the
                    Conquest of Mecca, Fadala apparently accepted Islam,
                    but he planned to kill the Messenger of Allah صلى الله عليه وسلم
                    whenever he got the chance. Even if there were a few
                    people around; they would not be many. He hid the
                    sword in his clothes and waited for the time when
                    Prophet صلى الله عليه وسلم was performing Tawaf (Circumambulation of
                    Holy Ka'ba). One day Fadala got an opportunity, he saw
                    that Prophet صلى الله عليه وسلم was performing Tawaf. He also started
                    performing Tawaf. He was looking for an opportunity to
                    attack Him. During the Tawaf, he came close to greet
                    Him. The Messenger of Allah صلى الله عليه وسلم called him and said:
                  </p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    "Are you Fadala?"
                    <br />
                    He said:
                    <br />
                    Messenger of Allah صلى الله عليه وسلم yes! I am Fadala.
                    The Messenger of Allah صلى الله عليه وسلم said:
                    "What were you thinking in your heart?"
                    <br />
                    <br />

                  </p>

                  <p className="mt-2">He said:
                    Nothing. I was remembering Allah Almighty.
                    The Messenger of Allah صلى الله عليه وسلم smiled when he heard
                    Fadala's words. Prophet صلى الله عليه وسلم said:
                    Fadala! Seek forgiveness from Allah.
                    And at the same time, He placed His blessed hand on his
                    chest. Fadala's heart became calm and free from
                    conspiratorial thoughts. Fadala later on said: The
                    moment Prophet صلى الله عليه وسلم placed His blessed and merciful
                    hand on my chest, the state of my heart changed
                    completely. By Allah! Prophet صلى الله عليه وسلم had not lifted His
                    blessed hand from my chest until I didn't find any one
                    (4)
                    more beloved to me on the face of than Him.</p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    (4) Al-Asaba by Ibn Hajr Asqalani, Golden Stories of the Prophetic
                    Ethics (Urdu Book), by Abdul Malik Mujahid, Dar-ul-Salam
                    Publishers, Pakistan
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    c)  Shaybah bin Usman:
                  </h4>
                  <p>
                    Shaybah bin Usman (a newly converted Muslim after
                    the conquest of Mecca, who joined Prophet صلى الله عليه وسلم for battle
                    of Hunayn few days after conquest of Mecca) says that I
                    intended to go to Battle of Hunayn with the Prophet صلى الله عليه وسلم
                    and if I got the chance, I would kill Muhammad صلى الله عليه وسلم in
                    exchange for the blood of the Quraysh. He added that at
                    that time I was the only one who wanted to avenge the
                    blood of all the Quraysh. Shaybah bin Usman further said, I had the strong intention in my heart, that even if
                    all the Arabs and non-Arabs followed Muhammad صلى الله عليه وسلم I
                    would never follow Him. After that, when I set out with
                    everyone, I remained in my thoughts and my intention
                    became stronger. Even when the people scattered, I took
                    out my sword and went towards the Messenger of Allah
                    صلى الله عليه وسلم and even raised the sword, then suddenly a wave of
                    fire appeared between me and the Messenger of Allah
                    صلى الله عليه وسلم, like lightning, seeing this, my condition deteriorated
                    with fear. I placed both hands over my eyes in fear. In
                    this situation, the Messenger of Allah صلى الله عليه وسلم called out to
                    me. I approached him, He said, "Come closer," I
                    approached him and He placed His blessed hand on my
                    chest. At that moment, a great change occurred in my
                    intention and I felt that the love of the Messenger of
                    Allah صلى الله عليه وسلم was greater in my heart than my hearing and
                    sight, and even more than my own life. The Messenger
                    of Allah صلى الله عليه وسلم then said:
                  </p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    "Come closer and fight the enemies."
                  </p>
                  <p>
                    I stood up and started wielding my sword. God knows,
                    after that, my only desire was to protect the Messenger
                    of Allah صلى الله عليه وسلم in every possible way by sacrificing my life
                    and everything I had. My feelings of love were so
                    intense that if my father had been alive and had come
                    forward at that time, I would have fought him with my sword. When I returned to the tent after the battle, I
                    went to the tent of the Messenger of Allah صلى الله عليه وسلم out of
                    longing to see him. At that time, the Messenger of Allah
                    صلى الله عليه وسلم was alone. He said, "O Shaybah!" What Allah has
                    chosen for you is better than what you have desired, and
                    the Holy Prophet صلى الله عليه وسلم expressed the thoughts that I had
                    intended. I said:
                  </p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    "I bear witness that there is no God but Allah, and
                    I bear witness that You are the Messenger of
                    Allah."
                  </p>
                  <p>
                    Then I said:
                  </p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    "O' Messenger of Allah صلى الله عليه وسلم pray for my forgiveness."
                    He said:
                    "Allah has forgiven you.
                  </p>
                  <p className="mt-2">
                    "Allah has forgiven you."
                  </p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    Ref: Ma'arif al-Quran by Mufti Muhammad Shafi, Surah At-
                    Tawbah, verse 25. And Ashah al-Sier by Abu al-Barakat Abdul Rauf,
                    Dana Puri, Published by, Mir Muhammad Publishers, Karachi.
                  </p>

                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    d) Nadr bin Harith:
                  </h4>

                  <p>
                    A similar incident happened to Nadr bin Harith who also
                    went to Hunayn with the same intention. Upon reaching
                    there, Allah Almighty instilled in his heart the innocence
                    and love of the Holy Prophet صلى الله عليه وسلم. Later on he became a man of sword who clashed with
                    the enemy ranks with utmost bravery.
                  </p>
                  <p className="mt-2 italic bg-slate-200 p-2">
                    Ref: Tafsir Ma'rif al-Quran, Mufti Muhammad Shafi, Surah At-
                    Tawbah verse 25.
                  </p>

                  <p className="mt-2 font-semibold">
                    Second narration:
                  </p>

                  <p>
                    Muhammad bin Umar narrated from Nadr bin Harith, that
                    he used to say: All praise is due to Allah, Who has
                    bestowed upon us a pure religion like Islam and bestowed
                    upon us a Prophet like Muhammad صلى الله عليه وسلم, and we did not die on the evil belief that our
                    forefathers died on. The narrator has narrated a long
                    hadith. Nadr said: I was with the Quraysh and I was still
                    on their beliefs. During the Battle of Hunayn, Abu
                    Sufyan bin Harb, Sufyan bin Umayyah and Suhayl bin Amr
                    did not believe in Islam completely yet. Our intention
                    was that if Muhammad صلى الله عليه وسلم was defeated, we would attack
                    Muhammad صلى الله عليه وسلم.
                  </p>

                  <p>
                    When the two groups came face to face, Hawazin attacked
                    at once. We wanted the good of the polytheists at that
                    time. We thought that the Muslims would not be able to
                    withstand this powerful attack and we were with them and
                    I had a bad intention, so I went ahead, intending to
                    attack Prophet صلى الله عليه وسلم. Prophet صلى الله عليه وسلم was riding a long-eared mule right
                    in front of the polytheists, and men with white faces
                    were standing around Him. I approached Him. The white-
                    faced men said in a loud voice:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "Go away, go away."
                  </p>

                  <p>
                    My heart was filled with fear and my limbs trembled. I
                    said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "This is what happened on the day of Badr."
                  </p>

                  <p>
                    Recalling the appearance of Angels in support of Muslim
                    troops during the Battle of Badr, I said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "This man (Prophet صلى الله عليه وسلم) is certainly on the truth
                    and he is protected by the unseen."
                  </p>
                  <p>
                    Meanwhile, Allah Almighty instilled the love of Islam in
                    my heart, and whatever evil intentions I had, Allah
                    Almighty changed everything, meaning the heart suddenly
                    and completely changed due to the closeness and attention
                    of the Messenger of Allah صلى الله عليه وسلم. Had the presence of Angels been the reason,
                    there were 5000 Angels in Badr witnessed by 1000
                    polytheists through their physical eyes, yet their hearts
                    did not turn towards Islam. This was spiritual influence
                    upon a single man.
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    Ref: Tafsir Mazhari by Qadi Sanaullah Panipati, Vol. 4
                  </p>
                  <p className="mt-2 font-semibold">
                    Note:
                  </p>

                  <p>
                    This Companion, Nadr bin Harith, is different from Nadr
                    bin Harith bin Alqamah bin Kildah bin Abd Manaf, who was
                    the foul-mouthed, arrogant poet and storyteller, an
                    enemy of Prophet صلى الله عليه وسلم and Islam, who was captured in the Battle of
                    Badr and killed by Ali ibn Abi Talib in compliance with
                    the order from the Messenger of Allah صلى الله عليه وسلم due to his habit of mocking
                    the Holy Quran and Islam.
                  </p>

                  <p className="mt-2">
                    I have written this incident here because it is
                    mentioned in Tafsir Mazhari. I have quoted it from
                    there, and it is also found in Tafsir Ma'arif al-Quran
                    with reference to Tafsir Mazhari, and it has also been
                    quoted specifically from Ma'arif al-Quran. But no
                    explanation was found about the name of Nadr bin Harith,
                    and no satisfactory explanation could be found in Asad
                    al-Ghabah, Al-Asaba fi Tamayyiz al-Sahaba, and Al-
                    Bidaya wal-Nihaya.
                  </p>

                  <p className="mt-2">
                    However, the famous wretched and arrogant Nadr bin
                    Harith bin Alqamah is different. While this companion
                    Nadr bin Harith is different, he is undoubtedly a
                    Companion and among the converts who embraced Islam
                    after the conquest of Mecca or around the Battle of
                    Hunayn.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    e) Abu Quhafa, the respected father of Abu Bakr Siddiq:
                  </h4>

                  <p>
                    Real name: Uthman bin Amir. The respected father of
                    Abu Bakr Siddiq did not embrace Islam until the conquest
                    of Mecca.
                  </p>

                  <p>
                    Ibn Ishaq in his Book of Maghazi has narrated with a
                    sound chain of transmission on the authority of Asma
                    bint Abi Bakr, who said: When the Messenger of Allah
                    صلى الله عليه وسلم entered the Mosque (Masjid al-Haram), Abu Bakr
                    holding his father’s hand came to the Prophet صلى الله عليه وسلم.
                  </p>

                  <p>
                    When the Messenger of Allah صلى الله عليه وسلم saw his old age, He said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "The elder man should have stayed at home, I would have
                    come to him myself."
                  </p>

                  <p>
                    To which Abu Bakr Siddiq replied:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "O Messenger of Allah صلى الله عليه وسلم, his coming to You walking
                    is better than Your going to him walking."
                  </p>

                  <p>
                    The Prophet صلى الله عليه وسلم made Abu Quhafa sit in front of Him and
                    touched his chest. Then the Prophet صلى الله عليه وسلم said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "Accept Islam and you will be safe (from the fire of Hell)."
                  </p>

                  <p className="mt-2">
                    Then Abu Bakr Siddiq stood up.
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    Ref 1: Hadith, Ibn Ishaq from Sahih Ibn Hibban <br />
                    Ref 2: Al-Asaba fi al-Tamiyyiz al-Sahaba, by Ibn Hajr Al-Asqalani
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-1xl">
                    f) Ubayy ibn Ka'b:
                  </h4>

                  <p>
                    (One of the best reciters of the Qur'an among the
                    Companions during the blessed time of the Prophet صلى الله عليه وسلم).
                  </p>

                  <p>
                    Abdullah ibn Numayr said: Ismail ibn Abi Khalid narrated
                    to us, he narrated from Abdullah ibn Isa ibn Abd al-
                    Rahman ibn Abi Ya'la, he narrated from his grandfather
                    (Abd al-Rahman), and he narrated from Ubayy ibn Ka'b,
                    who said:
                  </p>

                  <p>
                    I was in the mosque when a man entered and began to
                    pray, and I declared the way he recited as unacceptable.
                    Then another man came and he recited in a way that was
                    different from the way his companion (the first man)
                    recited. When we finished the prayer, we all came to the
                    Messenger of Allah صلى الله عليه وسلم. I said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "This man recited in a way that I rejected in front of him,
                    and the second came and recited differently from his
                    companion."
                  </p>

                  <p>
                    So the Messenger of Allah صلى الله عليه وسلم ordered them, and they
                    both recited. The Prophet صلى الله عليه وسلم praised the manner of both
                    of them, and my heart was filled with denial of the
                    Prophet صلى الله عليه وسلم with a force even greater than it had been
                    during the pre-Islamic period.
                  </p>

                  <p>
                    When the Messenger of Allah صلى الله عليه وسلم saw this situation that
                    had befallen me, he struck me on the chest, causing me
                    to sweat profusely, as if I were looking at Allah in
                    fear. The Prophet صلى الله عليه وسلم said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "I have been commanded to recite the Qur'an in one
                    letter (a form of recitation). So I requested: Make it
                    easy for my nation."
                  </p>

                  <p>
                    Then He (Allah Almighty) replied:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "Recite it in two letters."
                  </p>

                  <p>
                    I asked again:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "Make it easy for my nation."
                  </p>

                  <p>
                    Then it was said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "Recite it in seven letters."
                  </p>

                  <p>
                    (Allah Almighty responded) And for every answer I gave,
                    there is a supplication that you may ask of Me. I said:
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    "O Allah! Forgive my nation."
                  </p>

                  <p>
                    And I have postponed the third supplication until the Day
                    when all creations, even Abraham, will turn to me.
                  </p>

                  <p className="mt-2 italic bg-slate-200 p-2">
                    Ref: Sahih Muslim, Hadith No: 1904) (Book: Virtues of the Qur'an
                    and Related Matters, Chapter 48: Explanation of the Qur'an's descent
                    into seven letters and its meaning
                  </p>
                </div>
                <div className="">
                  <h2 className="font-semibold mb-2 text-3xl mt-[40px]">
                    Conclusion:
                  </h2>

                  <p className="mt-2">
                    <span className="font-semibold">i).</span> The above few events show that the Holy Prophet صلى الله عليه وسلم used His
                    "Spiritual Influence" and "Focus" as and when needed, to perfect the faith of Muslims, convert
                    non-Muslims to Islam, and purify the inner selves of Muslims at any stage of their lives. This
                    spiritual influence is considered one of the sciences from the Prophet صلى الله عليه وسلم, similar to
                    Commentary on the Qur'an, Sciences of Hadith, Jurisprudence, Theology, and others, which were
                    transmitted through the Companions of the Prophet صلى الله عليه وسلم and Ahl al-Bayt (the Prophetic Family).
                  </p>

                  <p className="mt-2">
                    <span className="font-semibold">ii).</span> There was no clear demarcation between Qur'an commentators, Hadith scholars,
                    Aqeedah (theology, beliefs, and creeds) scholars, Tazkiyah Shaykhs, and Fiqh (jurisprudence)
                    scholars during the time of the Prophet صلى الله عليه وسلم, the Companions, and the students of the
                    Companions (Tabi'on — the second generation after the Prophet صلى الله عليه وسلم). However, during
                    the later period of the Tabi'on, and especially in the era of the Taba' Tabi'on (third generation),
                    distinctions among scholars of different Islamic sciences began to appear.
                  </p>

                  <p className="mt-2">
                    <span className="font-semibold">iii).</span> Sufism, or the Sufi science with the specific name "Tasawwuf", was not
                    formally present until the late third century Hijrah. However, titles such as Zahid (one who is
                    steadfast in practicing Islam) and Abid (one devoted to voluntary worship like prayers, fasting,
                    charity, pilgrimage, and remembrance of Allah) were common since the time of the Tabi'on. These
                    Zuhaad (plural of Zahid) and Ubaad (plural of Abid) were known to use "Spiritual Influence" for
                    the purification (Tazkiyah) of people. From the third century Hijrah onwards, the term "Sufi"
                    replaced the earlier titles like Zahid and Abid for scholars and Shaykhs who focused on spiritual
                    purification through influence and guidance.
                  </p>

                  <p className="mt-2">
                    <span className="font-semibold">iv).</span> Just as principles of jurisprudence and terminologies of Qur'anic
                    interpretation and Hadith sciences were developed by scholars to meet specific needs, Sufi
                    scholars established the concept of "Tariqah" (the spiritual path) for the purification (Tazkiyah)
                    of the soul in a structured manner.
                  </p>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className="text-center mt-12 border-t pt-4 ">
              <p className="text-align-center">Muhammad Junaid Khan</p>
              <p className="text-align-center">
                Email: Junaid.khan1962@gmail.com
              </p>
              <p className="text-align-center">Cell Phone No. +923003518567</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SpritualInfulence;

