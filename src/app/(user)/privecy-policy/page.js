import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import { FaPhoneAlt, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div className="universal mb-[50px]">
        <div className="fixed_width px-5">
          <div className="flex flex-col w-full items-center justify-center">
            <AnimationWrapper direction="left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <AnimatedText text="Privacy Policy" from="right" />
              </h1>
            </AnimationWrapper>
            <div className="w-fit">
              <AnimationWrapper direction="left">
                <h1 className="text-base sm:text-xl md:text-xl font-bold">
                  <AnimatedText
                    text="Publisher: A Plus Advertising Limited"
                    from="right"
                  />
                </h1>
              </AnimationWrapper>
              <AnimationWrapper direction="left">
                <h1 className="text-base sm:text-xl md:text-xl font-bold">
                  <AnimatedText
                    text="Services: Website Design, Web Development, SEO, Content Writing, Digital Marketing"
                    from="right"
                  />
                </h1>
              </AnimationWrapper>
              <AnimationWrapper direction="left">
                <h1 className="text-base sm:text-xl md:text-xl font-bold">
                  <AnimatedText
                    text="Effective Date: December 27, 2024"
                    from="right"
                  />
                </h1>
              </AnimationWrapper>
            </div>

            {/* English Section */}
            <div className="">
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                1. Our Commitment
              </h2>
              <p>
                We, <strong>A Plus Advertising Limited</strong>, are dedicated
                to protecting every client’s personal and business information
                with the highest level of confidentiality and data security.
                Your trust is our greatest asset.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                2. Data Collection & Usage
              </h2>
              <p>
                We collect only the necessary information required to complete
                your project — such as name, email, phone number, business type,
                and website details. This information is used solely for project
                execution, client communication, and service improvement. We
                never sell or share data with third parties.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                3. Data Security
              </h2>
              <p>
                We use modern encryption, secure servers, and advanced
                cybersecurity tools to ensure your data remains protected. Only
                authorized team members have limited access under strict
                confidentiality agreements.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                4. Project Delivery & Access Control
              </h2>
              <p>
                After project completion, we hand over all admin panels, login
                credentials, and email access to the client. For maximum
                security, clients must change all passwords immediately after
                delivery. After delivery, A Plus Advertising Limited is not
                responsible for any further access, misuse, or data issues.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                5. Payment Policy
              </h2>
              <p>
                All payments must be made as per agreed milestones or project
                terms. Once payment is made, it is non-refundable unless a
                verified technical fault is found. In the case of fraud or
                non-payment issues, A Plus Advertising Limited reserves the
                right to take legal action under the laws of Bangladesh.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                6. Documentation & Extra Work
              </h2>
              <p>
                We require proper documentation or clear project guidelines
                before starting any project. Any tasks or requests outside of
                the agreed scope will incur extra charges.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                7. Service Guarantee & Support
              </h2>
              <p>
                We provide 30 days of free technical support after project
                delivery to ensure smooth and stable performance.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                8. Third-Party Services
              </h2>
              <p>
                If any third-party API, plugin, or external tool is used, its
                own privacy policy will apply. We are not liable for issues
                caused by third-party services.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                9. Intellectual Property
              </h2>
              <p>
                All design, code, and content become the client’s property after
                full payment is received.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                10. Policy Updates
              </h2>
              <p>
                We reserve the right to modify or update this Privacy Policy and
                Terms of Service at any time. Updated versions will be published
                on our official website.
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                11. Contact Information
              </h2>
              <div className="space-y-1 ml-2">
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-indigo-600" /> WhatsApp: +880
                  1850219432
                </p>
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-indigo-600" /> Website:
                  <a
                    href="https://aplusadvertisinglimited.com"
                    target="_blank"
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
            </div>

            {/* Divider */}
            <div className="my-12 border-t border-gray-200"></div>

            {/* Bangla Section */}
            <AnimationWrapper direction="left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-5">
                গোপনীয়তা নীতি
              </h1>
            </AnimationWrapper>
            <div className="w-fit">
              <p>
                <strong>প্রকাশক:</strong> A Plus Advertising Limited
              </p>
              <p>
                <strong>সেবা ক্ষেত্র:</strong> ওয়েবসাইট ডিজাইন, ওয়েব
                ডেভেলপমেন্ট, SEO, কনটেন্ট রাইটিং, ডিজিটাল মার্কেটিং
              </p>
              <p>
                <strong>কার্যকর তারিখ:</strong> ২৭ ডিসেম্বর, ২০২৪
              </p>
            </div>

            <div className="">
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ১. আমাদের অঙ্গীকার
              </h2>
              <p>
                আমরা, <strong>A Plus Advertising Limited</strong>, প্রতিটি
                ক্লায়েন্টের তথ্য, প্রজেক্ট ডেটা এবং ব্যবসায়িক তথ্যকে সর্বোচ্চ
                গোপনীয়তা ও নিরাপত্তার সঙ্গে সংরক্ষণ করি। আপনার বিশ্বাসই আমাদের
                সবচেয়ে বড় সম্পদ।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ২. তথ্য সংগ্রহ ও ব্যবহার
              </h2>
              <p>
                আমরা শুধুমাত্র প্রজেক্টের কাজ সম্পন্ন করার জন্য প্রয়োজনীয় তথ্য
                সংগ্রহ করি, যেমন: নাম, ইমেইল, ফোন নম্বর, ব্যবসার ধরন এবং
                ওয়েবসাইট সম্পর্কিত তথ্য। এই তথ্য শুধুমাত্র প্রজেক্ট বাস্তবায়ন,
                ক্লায়েন্টের সাথে যোগাযোগ এবং সার্ভিস উন্নত করার উদ্দেশ্যে
                ব্যবহৃত হয়। কোনো তৃতীয় পক্ষের সঙ্গে তথ্য বিক্রি বা শেয়ার করা হয়
                না।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৩. ডেটা নিরাপত্তা
              </h2>
              <p>
                আমরা আধুনিক সাইবার সিকিউরিটি ব্যবস্থা, সার্ভার প্রটেকশন ও
                এনক্রিপশন ব্যবহার করে আপনার সমস্ত ডেটা সুরক্ষিত রাখি। অনুমোদিত
                টিম সদস্য ছাড়া অন্য কেউ আপনার ডেটায় প্রবেশ করতে পারে না।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৪. প্রোজেক্ট ডেলিভারি ও অ্যাক্সেস নিয়ন্ত্রণ
              </h2>
              <p>
                প্রোজেক্ট ডেলিভারি সম্পন্ন হওয়ার পর আমরা ক্লায়েন্টকে অ্যাডমিন
                প্যানেল, লগইন ও ইমেইল অ্যাক্সেস হস্তান্তর করি। এরপর ক্লায়েন্ট
                নিজে পাসওয়ার্ড পরিবর্তন করবেন নিজের নিরাপত্তার স্বার্থে।
                ডেলিভারির পর <strong>A Plus Advertising Limited</strong> আর কোনো
                ডেটা বা অ্যাক্সেসের জন্য দায়ী থাকবে না।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৫. পেমেন্ট নীতি
              </h2>
              <p>
                সমস্ত পেমেন্ট নির্ধারিত শর্ত অনুযায়ী করতে হবে। একবার পরিশোধিত
                পেমেন্ট ফেরতযোগ্য নয়, যদি না প্রমাণিত টেকনিক্যাল সমস্যা দেখা
                দেয়। যদি কোনো প্রতারণামূলক বা জাল পেমেন্টের ঘটনা ঘটে, তবে{" "}
                <strong>A Plus Advertising Limited</strong> বাংলাদেশ সরকারের আইন
                অনুযায়ী আইনি ব্যবস্থা নিতে বাধ্য থাকবে।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৬. প্রোজেক্ট গাইডলাইন ও অতিরিক্ত কাজের চার্জ
              </h2>
              <p>
                আমরা শুধুমাত্র স্পষ্ট ডকুমেন্টেশন বা গাইডলাইন অনুযায়ী কাজ করি।
                যদি প্রোজেক্ট চলাকালে ক্লায়েন্ট নতুন কোনো পরিবর্তন বা স্কোপের
                বাইরে কিছু চান, তবে তার জন্য অতিরিক্ত চার্জ প্রযোজ্য হবে।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৭. সার্ভিস সাপোর্ট
              </h2>
              <p>
                আমরা প্রতিটি প্রোজেক্টের জন্য ৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট
                প্রদান করি, যাতে ওয়েবসাইট বা সিস্টেম ঠিকভাবে কাজ করে।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৮. তৃতীয় পক্ষের সেবা
              </h2>
              <p>
                যদি কোনো থার্ড-পার্টি API, প্লাগইন বা সার্ভিস ব্যবহার করা হয়,
                তার দায়িত্ব সংশ্লিষ্ট প্রোভাইডারের।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৯. মেধাস্বত্ব
              </h2>
              <p>
                সম্পূর্ণ পেমেন্টের পর ডিজাইন, কোড ও কনটেন্ট ক্লায়েন্টের
                মালিকানায় হস্তান্তর করা হবে।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ১০. নীতিমালা পরিবর্তন
              </h2>
              <p>
                আমরা সময়ের প্রয়োজনে এই নীতিমালা পরিবর্তন করতে পারি এবং
                পরিবর্তনের পর তা ওয়েবসাইটে প্রকাশ করা হবে।
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ১১. যোগাযোগ
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
