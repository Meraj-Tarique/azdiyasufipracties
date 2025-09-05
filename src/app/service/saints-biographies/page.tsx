/* eslint-disable react/no-unescaped-entities */

import MainHeading from "@/components/Headings/MainHeading";
import Link from "next/link";

const SaintsBiographic = () => {
  return (
    <div className="max-w-8xl mx-auto py-6 px-5 mt-4 text-xl">
      <div className="lg:p-4 pt-2 space-y-6 w-full lg:w-[85%] mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
          <MainHeading />

          {/* Coming Soon Section */}
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
                Saint's Biographies
              </h2>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-4">
             <Link href="/service/saints-biographies/Hazrat Hamid Hasan Alawi?name=Hazrat Hamid Hasan Alawi (R.A)"> 1. Hazrat Hamid Hasan Alawi (R.A)</Link>
            </h2>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-4">
             <Link href="/service/saints-biographies/Syed Abdul Bari Shah?name=Syed Abdul Bari Shah (R.A)"> 2. Syed Abdul Bari Shah (R.A) </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaintsBiographic;
