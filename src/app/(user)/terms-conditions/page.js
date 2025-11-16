import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
export default function Page() {
  return (
    <>
      <div className="universal mb-[50px]">
        <div className="fixed_width px-5 my-5">
          <div className="flex items-center justify-center">
            <AnimationWrapper direction="left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <AnimatedText text="Terms & Conditions" from="right" />
              </h1>
            </AnimationWrapper>
          </div>
          {/* english part */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                1. General Policy
              </h2>
              <p>
                <strong>A Plus Advertising Limited</strong> (“we”, “our”, “the
                company”) is a professional digital advertising and branding
                agency based in Bangladesh. By using our services, you
                (“client”, “customer”) agree to comply with the following terms
                and conditions. All agreements, services, payments, and
                communications between the client and the company are governed
                by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                2. Service Policy
              </h2>
              <p>We provide the following services:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Digital Marketing (Facebook, Instagram, Google Ads, YouTube,
                  etc.)
                </li>
                <li>Website & E-Commerce Development</li>
                <li>Branding, Logo & Graphic Design</li>
                <li>Video Production & Content Promotion</li>
                <li>Social Media Management</li>
              </ul>
              <p className="mt-3">
                <strong>Conditions:</strong> Each service will be provided based
                on an approved project quotation and agreement. Work will begin
                only after official confirmation and advance payment. Any
                changes in project scope, delivery timeline, or features must be
                approved in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                3. Payment Policy
              </h2>
              <p>
                An advance payment is mandatory for all projects. The remaining
                balance must be paid upon project completion. Digital expenses
                (such as ad spend, boost budget, etc.) are non-refundable.
                Payments may be made via cash, bank transfer, mobile banking, or
                other approved methods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                4. Project Delivery & Revisions
              </h2>
              <p>
                Delivery timelines will follow the agreed project contract.
                Clients are entitled to 1–2 free revisions after delivery.
                Additional revisions will incur extra charges. Any feedback or
                correction requests must be submitted within 7 working days of
                project delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                5. Advertising Management
              </h2>
              <p>
                Clients are responsible for providing correct access to their ad
                account, payment card, or business page. A Plus Advertising
                Limited is not liable for account suspension or restrictions due
                to incorrect information, prohibited content, or violations of
                Facebook/Google policies. The ad budget belongs solely to the
                client; the company provides only ad management services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                6. Copyright & Ownership
              </h2>
              <p>
                All designs, codes, content, and marketing materials remain the
                property of A Plus Advertising Limited until full payment is
                received. After full payment, ownership is transferred to the
                client. If third-party assets (images, videos, fonts, etc.) are
                used, the client must ensure proper licensing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                7. Confidentiality
              </h2>
              <p>
                We value and protect all client data, business information, and
                credentials. No confidential information will be shared with
                third parties without the client’s consent, except when required
                by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                8. Limitation of Liability
              </h2>
              <p>
                A Plus Advertising Limited shall not be held responsible for any
                financial losses arising from technical errors, ad suspensions,
                or project issues. We have no control over third-party services
                such as Facebook, Google, hosting providers, domains, or payment
                gateways.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                9. Service Cancellation & Refund Policy
              </h2>
              <p>
                Advance payments are non-refundable if the client cancels the
                service. If a project is canceled after commencement, charges
                will be deducted for the work completed. Once a service is fully
                delivered, no refunds will be issued.
              </p>
              <p className="mt-2">
                To know more, please visit our{" "}
                <a
                  href="/refund-policy"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  Refund Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                10. Legal Jurisdiction
              </h2>
              <p>
                These terms and conditions are governed by the laws of
                Bangladesh. Any disputes shall be resolved under the
                jurisdiction of the Dhaka District Court.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                11. Right to Modification
              </h2>
              <p>
                A Plus Advertising Limited reserves the right to modify or
                update these Terms & Conditions at any time. The latest version
                will always be available on our official website.
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
            </section>
          </div>

          {/* bangla part */}
          <div className="flex items-center justify-center mt-20 mb-10">
            <AnimationWrapper direction="left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                শর্তাবলি ও নীতিমালা
              </h1>
            </AnimationWrapper>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ১. সাধারণ নীতিমালা
              </h2>
              <p>
                <strong>A Plus Advertising Limited</strong> (“আমরা”, “আমাদের”,
                “কোম্পানি”) বাংলাদেশের একটি পেশাদার ডিজিটাল বিজ্ঞাপন ও
                ব্র্যান্ডিং এজেন্সি। আমাদের সেবা ব্যবহার করার মাধ্যমে আপনি
                (“গ্রাহক”, “ক্লায়েন্ট”) নিম্নলিখিত শর্তাবলির সাথে একমত হচ্ছেন।
                আমাদের সকল চুক্তি, সেবা, পেমেন্ট এবং যোগাযোগ এই শর্তাবলির আওতায়
                পরিচালিত হবে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ২. সেবা সংক্রান্ত নীতি
              </h2>
              <p>আমরা নিম্নলিখিত সেবা প্রদান করি:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  ডিজিটাল মার্কেটিং (Facebook, Instagram, Google Ads, YouTube
                  ইত্যাদি)
                </li>
                <li>ওয়েবসাইট ও ই-কমার্স ডেভেলপমেন্ট</li>
                <li>ব্র্যান্ডিং, লোগো ও গ্রাফিক ডিজাইন</li>
                <li>ভিডিও ও কন্টেন্ট প্রমোশন</li>
                <li>সোশ্যাল মিডিয়া ম্যানেজমেন্ট</li>
              </ul>
              <p className="mt-3">
                <strong>শর্ত:</strong> প্রতিটি সেবা নির্দিষ্ট প্রজেক্ট চুক্তি ও
                কোটেশন অনুসারে প্রদান করা হবে। প্রজেক্টের কাজ শুরু হবে
                কনফার্মেশন ও অগ্রিম অর্থপ্রদানের পর। সেবার সময়কাল, ডেলিভারি
                টাইম এবং ফিচার পরিবর্তন কেবলমাত্র লিখিতভাবে অনুমোদিত হলে কার্যকর
                হবে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৩. পেমেন্ট নীতিমালা
              </h2>
              <p>
                সব প্রজেক্টের জন্য নির্ধারিত অগ্রিম প্রদান আবশ্যক। প্রজেক্ট
                সম্পন্ন হওয়ার পর অবশিষ্ট টাকা পরিশোধ করতে হবে। ডিজিটাল সেবা
                (যেমন বিজ্ঞাপন ব্যয়, বুস্ট বাজেট ইত্যাদি) অফেরতযোগ্য
                (non-refundable)। পেমেন্ট নগদ, ব্যাংক ট্রান্সফার, মোবাইল
                ব্যাংকিং বা অনুমোদিত মাধ্যমে গ্রহণ করা হবে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৪. প্রজেক্ট ডেলিভারি ও সংশোধন
              </h2>
              <p>
                প্রজেক্টের ডেলিভারি সময় চুক্তিতে নির্ধারিত অনুযায়ী হবে।
                ডেলিভারি পর ক্লায়েন্টের মতামতের ভিত্তিতে ১–২টি রিভিশন ফ্রি, এর
                বেশি হলে অতিরিক্ত চার্জ প্রযোজ্য। কাজ ডেলিভারির পর কোনো ত্রুটি
                বা পরিবর্তনের অনুরোধ ৭ কর্মদিবসের মধ্যে জানাতে হবে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৫. বিজ্ঞাপন ব্যবস্থাপনা
              </h2>
              <p>
                ক্লায়েন্টের বিজ্ঞাপন অ্যাকাউন্ট, পেমেন্ট কার্ড, বা পেজের
                অ্যাক্সেস সঠিকভাবে প্রদানের দায়িত্ব ক্লায়েন্টের। ভুল তথ্য,
                নিষিদ্ধ কনটেন্ট বা Facebook/Google নীতিমালা লঙ্ঘনজনিত অ্যাকাউন্ট
                ব্লক হলে <strong>A Plus Advertising Limited</strong> দায়ী থাকবে
                না। বিজ্ঞাপন ব্যয় গ্রাহকের নিজস্ব, কোম্পানি শুধুমাত্র
                ম্যানেজমেন্ট সার্ভিস প্রদান করে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৬. কপিরাইট ও মালিকানা
              </h2>
              <p>
                ডিজাইন, কোড, কনটেন্ট ও মার্কেটিং ম্যাটেরিয়াল ক্লায়েন্টের জন্য
                তৈরি হলেও, সম্পূর্ণ পেমেন্টের আগে কোম্পানির মালিকানাধীন থাকবে।
                সম্পূর্ণ পরিশোধের পর ক্লায়েন্ট তা নিজের নামে ব্যবহার করতে
                পারবেন। তৃতীয় পক্ষের কোনো উপকরণ (ছবি, ভিডিও, ফন্ট ইত্যাদি)
                ব্যবহৃত হলে, তার লাইসেন্স ক্লায়েন্টকে নিশ্চিত করতে হবে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৭. গোপনীয়তা নীতি (Confidentiality)
              </h2>
              <p>
                আমরা ক্লায়েন্টের ব্যবসায়িক তথ্য, ডেটা ও পাসওয়ার্ড
                সম্পূর্ণভাবে গোপন রাখি। তবে ক্লায়েন্টের অনুমতি ছাড়া কোনো তথ্য
                তৃতীয় পক্ষের কাছে হস্তান্তর করা হবে না, যদি না আইনগত
                বাধ্যবাধকতা থাকে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৮. দায়-দায়িত্ব সীমাবদ্ধতা (Liability)
              </h2>
              <p>
                প্রজেক্টে ত্রুটি, বিজ্ঞাপন স্থগিত, বা টেকনিক্যাল সমস্যার কারণে
                কোনো আর্থিক ক্ষতি হলে কোম্পানি দায়ী নয়। তৃতীয় পক্ষের সেবা
                (যেমন Facebook, Google, Server, Domain, Payment Gateway)
                সংক্রান্ত সমস্যায় কোম্পানির কোনো নিয়ন্ত্রণ নেই।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ৯. সেবা বাতিল ও রিফান্ড নীতি
              </h2>
              <p>
                ক্লায়েন্ট কর্তৃক সেবা বাতিলের ক্ষেত্রে অগ্রিম অর্থ ফেরতযোগ্য
                নয়। প্রজেক্ট শুরু হওয়ার পর বাতিল হলে, করা কাজের অনুপাতে মূল্য
                কেটে রাখা হবে। কোনো সেবা সম্পন্ন ও ডেলিভারি হওয়ার পর রিফান্ড
                প্রযোজ্য নয়।
              </p>
              <p className="mt-2">
                আরও জানতে ভিজিট করুন আমাদের
                <a
                  href="/refund-policy"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  রিফান্ড পলিসি
                </a>
                পেজে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ১০. আইনগত বিষয়
              </h2>
              <p>
                এই শর্তাবলি বাংলাদেশের প্রচলিত আইন দ্বারা নিয়ন্ত্রিত হবে।
                যেকোনো বিরোধ বা আইনি জটিলতা ঢাকা জেলার আদালতে নিষ্পত্তি হবে।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 my-2">
                ১১. পরিবর্তনের অধিকার
              </h2>
              <p>
                <strong>A Plus Advertising Limited</strong> যেকোনো সময় প্রয়োজন
                অনুসারে এই Terms & Conditions পরিবর্তন বা আপডেট করতে পারে।
                সর্বশেষ আপডেট কোম্পানির ওয়েবসাইটে প্রকাশ করা হবে।
              </p>
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
