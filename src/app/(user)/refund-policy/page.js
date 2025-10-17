import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
export default function Page() {
  return (
    <>
      <div className="universal mb-[50px]">
        <div className="fixed_width px-5 sm:px-2 md:px-2 my-5">
          <div className="flex items-center justify-center">
            <AnimationWrapper direction="left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <AnimatedText text="Refund Policy" from="right" />
              </h1>
            </AnimationWrapper>
          </div>
          {/* english part */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <p className="text-lg font-medium">
                A Plus Advertising Limited is committed to providing its clients
                with the highest quality services. We adhere to professionalism,
                responsibility, and transparency in every project.
              </p>
              <p className="text-lg font-medium">
                However, due to the nature of digital services, certain
                conditions related to refunds apply.
              </p>
              <p className="text-lg font-medium my-2">
                <strong>Below is our comprehensive Refund Policy:</strong>
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                1. Project Confirmation & Advance Payment
              </h2>
              <p>
                Before starting any project, clients are required to make a
                specified advance payment, which confirms the project. Work will
                not commence without this advance payment. The advance payment
                is non-refundable, as it covers project planning, resource
                setup, design processes, project management, and other initial
                costs. If a client requests changes or cancels after confirming
                the project, the advance payment will not be refunded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                2. Cancellation During Project
              </h2>
              <p>
                If a client wishes to stop work after the project has started,
                the cost will be calculated based on the amount of work
                completed and time spent. The company reserves the right to
                deduct appropriate charges for the work completed. Cancellation
                requests must be submitted in writing (via email or official
                message). Verbal requests are not accepted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                3. After Completion & Delivery
              </h2>
              <p>
                Once the project is fully delivered or final files, videos,
                designs, or website have been handed over, no refunds are
                applicable. Post-delivery revisions or modifications will only
                be made within the company’s specified limits. If a client
                alters, deletes, or misuses the files after delivery, the
                company will not be liable for any refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                4. Digital Marketing & Ad Budget
              </h2>
              <p>
                Advertising expenses (Ad Budget) for Facebook, Google, YouTube,
                TikTok, or other platforms are separate from the company’s
                service fee. The ad budget is the client’s responsibility and is
                non-refundable. The company is not responsible for policy
                changes, account suspensions, or payment failures by any
                advertising platform. We provide management and monitoring
                services only; the effectiveness and expenditure of the ad
                budget are solely the client’s responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                5. Third-Party Issues
              </h2>
              <p>
                The company is not responsible for refunds due to technical
                issues or policy changes by servers, domains, hosting providers,
                payment gateways, social media platforms, or other third-party
                services. Any delays, errors, or failures caused by third-party
                services are beyond the company’s control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                6. Billing Errors & Special Cases
              </h2>
              <p>
                If a client accidentally makes a duplicate payment or overpays,
                they must submit a written refund request. The company will
                verify the claim, and if deemed valid, the refund process will
                be initiated. Refunds (if applicable) will be returned via the
                same payment method, and the process may take{" "}
                <strong>7–15 business days</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                7. Service Modification or Discontinuation
              </h2>
              <p>
                If any service is modified or discontinued due to internal
                reasons, alternative solutions will be provided in consultation
                with the client. Instead of a refund, a credit balance or
                adjustment towards future projects may be offered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                8. Final Decision on Refunds
              </h2>
              <p>
                A Plus Advertising Limited reserves the right to approve or
                reject any refund request. The company’s decision will be final
                and binding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                9. Legal Jurisdiction & Court Authority
              </h2>
              <p>
                This Refund Policy and A Plus Advertising Limited’s Terms &
                Conditions are governed by the laws of Bangladesh. Any dispute
                or complaint related to refunds will be resolved under the
                jurisdiction of the courts of Dhaka. Both the client and the
                company may exercise their legal rights through the courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                📞 Contact Us
              </h2>
              <div className="space-y-1 ml-2">
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-indigo-600" /> WhatsApp: +880
                  1850219432
                </p>
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-indigo-600" /> Website:{" "}
                  <a
                    href="https://aplusadvertisinglimited.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    aplusadvertisinglimited.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-600" /> Email:
                  aplusadvertisinglimited@gmail.com
                </p>
              </div>
            </section>
          </div>



          {/* bangla part */}
          <div className="flex items-center justify-center mt-20 mb-10">
            <AnimationWrapper direction="left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                ফেরত নীতিমালা
              </h1>
            </AnimationWrapper>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <p className="text-lg font-medium">
                A Plus Advertising Limited সর্বদা তার ক্লায়েন্টদের সর্বোচ্চ মানের সেবা দেওয়ার জন্য প্রতিশ্রুতিবদ্ধ। আমরা প্রত্যেক প্রজেক্টে পেশাদারিত্ব, দায়িত্বশীলতা এবং স্বচ্ছতার নীতি মেনে কাজ করি।
              </p>
              <p className="text-lg font-medium">
                তবুও, ডিজিটাল সার্ভিসের প্রকৃতিগত কারণে রিফান্ড (ফেরত) সম্পর্কিত কিছু নির্দিষ্ট শর্তাবলি প্রযোজ্য।
              </p>
              <p className="text-lg font-medium my-2">
                <strong>নিচে আমাদের সম্পূর্ণ রিফান্ড নীতিমালা বিস্তারিতভাবে উল্লেখ করা হলো:</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ১. প্রজেক্ট কনফার্মেশন ও অগ্রিম প্রদান (Advance Payment & Project Confirmation)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  কোনো প্রজেক্ট শুরু হওয়ার আগে ক্লায়েন্টকে নির্ধারিত অগ্রিম টাকা (advance payment) প্রদান করতে হবে, যা প্রজেক্ট কনফার্মেশনের অংশ হিসেবে গণ্য হবে।
                </li>
                <li>অগ্রিম প্রদান না হলে কোনো প্রজেক্টে কাজ শুরু করা হবে না।</li>
                <li>এই অগ্রিম অর্থ অফেরতযোগ্য (Non-refundable), কারণ এটি প্রজেক্ট পরিকল্পনা, রিসোর্স সেটআপ, ডিজাইন প্রক্রিয়া, প্রজেক্ট ম্যানেজমেন্ট এবং অন্যান্য প্রাথমিক খরচে ব্যয় হয়।</li>
                <li>যদি কোনো কারণে ক্লায়েন্ট প্রজেক্ট কনফার্ম করার পর মত পরিবর্তন করেন, তাহলেও অগ্রিম অর্থ ফেরত দেওয়া হবে না।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ২. প্রজেক্ট চলাকালীন বাতিল (Cancellation During Project)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  প্রজেক্ট শুরু হওয়ার পর কোনো কারণে ক্লায়েন্ট কাজ বন্ধ করতে চাইলে, ইতিমধ্যে সম্পন্ন হওয়া কাজের পরিমাণ ও সময় ব্যয়ের ভিত্তিতে মূল্য নির্ধারণ করা হবে।
                </li>
                <li>সম্পন্ন কাজের জন্য কোম্পানি উপযুক্ত চার্জ কেটে রাখার অধিকার সংরক্ষণ করে।</li>
                <li>কাজ বন্ধের সিদ্ধান্ত শুধুমাত্র লিখিতভাবে (ই-মেইল বা অফিসিয়াল মেসেজে) জানাতে হবে। মৌখিকভাবে জানানো বাতিলের অনুরোধ গ্রহণযোগ্য নয়।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৩. প্রজেক্ট সম্পন্ন ও ডেলিভারি-পরবর্তী নীতি (After Completion & Delivery)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  প্রজেক্ট সম্পূর্ণ ডেলিভারি হয়ে গেলে, বা চূড়ান্ত ফাইল, ভিডিও, ডিজাইন বা ওয়েবসাইট হস্তান্তর সম্পন্ন হলে কোনো রিফান্ড প্রযোজ্য নয়।
                </li>
                <li>ডেলিভারি সম্পন্ন হওয়ার পর ক্লায়েন্টের চাহিদা অনুযায়ী রিভিশন বা পরিবর্তন কেবল কোম্পানির নির্ধারিত সীমার মধ্যে করা হবে।</li>
                <li>ক্লায়েন্ট যদি নিজে থেকে কাজের ফাইল পরিবর্তন, মুছে ফেলা বা ভুলভাবে ব্যবহার করেন, সেই অবস্থায় কোম্পানি কোনো প্রকার দায় নেবে না বা রিফান্ড দেবে না।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৪. ডিজিটাল মার্কেটিং ও বিজ্ঞাপন বাজেট (Ad Spend / Marketing Budget)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Facebook, Google, YouTube, TikTok বা অন্যান্য বিজ্ঞাপন প্ল্যাটফর্মে ব্যবহৃত বিজ্ঞাপন ব্যয় (Ad Budget) কোম্পানির সার্ভিস ফি থেকে সম্পূর্ণ আলাদা।
                </li>
                <li>বিজ্ঞাপন বাজেট ক্লায়েন্টের নিজস্ব দায়িত্বে ব্যবহৃত হবে এবং এটি অফেরতযোগ্য (non-refundable)।</li>
                <li>যদি বিজ্ঞাপন প্ল্যাটফর্মের (Facebook, Google ইত্যাদি) নীতিমালা পরিবর্তন, অ্যাকাউন্ট সাসপেনশন, বা পেমেন্ট ফেইলিউর হয়, সেই অবস্থায় কোম্পানি রিফান্ড দিতে বাধ্য নয়।</li>
                <li>আমরা শুধুমাত্র বিজ্ঞাপন ব্যবস্থাপনা ও মনিটরিং সেবা প্রদান করি, বাজেটের কার্যকর ব্যবহারের দায় সম্পূর্ণরূপে ক্লায়েন্টের।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৫. তৃতীয় পক্ষের সমস্যা (Third-Party Issues)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  সার্ভার, ডোমেইন, হোস্টিং, পেমেন্ট গেটওয়ে, সোশ্যাল মিডিয়া প্ল্যাটফর্ম বা থার্ড-পার্টি সফটওয়্যারের টেকনিক্যাল সমস্যা বা পলিসি পরিবর্তনের কারণে কোম্পানি রিফান্ড দিতে বাধ্য নয়।
                </li>
                <li>যেকোনো থার্ড-পার্টি সার্ভিসে বিলম্ব, ত্রুটি, বা ব্যর্থতা কোম্পানির নিয়ন্ত্রণের বাইরে।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৬. বিলিং ত্রুটি ও বিশেষ পরিস্থিতি (Billing Errors & Special Cases)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  যদি কোনো ক্লায়েন্ট ভুলবশত ডুপ্লিকেট পেমেন্ট করেন বা ভুলভাবে অতিরিক্ত অর্থ প্রদান করেন, তাহলে ক্লায়েন্টকে লিখিতভাবে রিফান্ড আবেদন করতে হবে।
                </li>
                <li>কোম্পানি যাচাই-বাছাইয়ের পর উপযুক্ত মনে করলে রিফান্ড প্রক্রিয়া শুরু করবে।</li>
                <li>রিফান্ড (যদি প্রযোজ্য হয়) একই পেমেন্ট মাধ্যমেই ফেরত দেওয়া হবে এবং প্রক্রিয়া সম্পন্ন হতে ৭–১৫ কর্মদিবস সময় লাগতে পারে।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
               ৭. সার্ভিস পরিবর্তন বা বন্ধ হওয়া (Service Modification or Discontinuation)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  কোনো সার্ভিস কোম্পানির অভ্যন্তরীণ কারণে পরিবর্তিত বা বন্ধ হলে, ক্লায়েন্টের সাথে পরামর্শক্রমে বিকল্প সমাধান দেওয়া হবে।
                </li>
                <li>রিফান্ডের পরিবর্তে ক্রেডিট ব্যালেন্স বা ভবিষ্যৎ প্রজেক্টে অ্যাডজাস্টমেন্ট দেওয়া হতে পারে।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৮. রিফান্ড সিদ্ধান্তের চূড়ান্ততা (Final Decision)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  রিফান্ড অনুমোদন বা প্রত্যাখ্যান করার পূর্ণ অধিকার A Plus Advertising Limited কর্তৃক সংরক্ষিত।
                </li>
                <li>কোম্পানির সিদ্ধান্তই চূড়ান্ত ও বাধ্যতামূলক বলে গণ্য হবে।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৯. আইনগত নিয়ন্ত্রণ ও আদালতের অধিকার (Legal Jurisdiction & Court Authority)
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  এই রিফান্ড নীতিমালা এবং A Plus Advertising Limited-এর Terms & Conditions বাংলাদেশের প্রচলিত আইন অনুযায়ী পরিচালিত হবে।
                </li>
                <li>যেকোনো বিরোধ, বিতর্ক বা রিফান্ড সংক্রান্ত অভিযোগের ক্ষেত্রে ঢাকা জেলার আদালত-এর সিদ্ধান্ত চূড়ান্ত ও বাধ্যতামূলক হবে।</li>
                <li>ক্লায়েন্ট বা কোম্পানি উভয় পক্ষ আদালতের মাধ্যমে আইনগত অধিকার প্রয়োগ করতে পারবেন।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                📞 যোগাযোগ করুন
              </h2>
              <div className="space-y-1 ml-2">
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-indigo-600" /> WhatsApp: +880
                  1850219432
                </p>
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-indigo-600" /> ওয়েবসাইট:
                  <a
                    href="https://aplusadvertisinglimited.com"
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    aplusadvertisinglimited.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-600" /> ইমেইল:
                  aplusadvertisinglimited@gmail.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
