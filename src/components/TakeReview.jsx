"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/slider.css";
import AnimationWrapper from "./AnimationWrapper";
import AnimatedText from "./AnimatedText";
import Review from "./Review";

export default function TakeReview() {
  const [active, setActive] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [reviews, setReviews] = useState([]);

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/takereview");
      const data = await res.json();
      if (data.success) {
        setReviews(data.reviews);

        // যদি ৩ টার কম থাকে → ১মটা দেখাবে
        // আর যদি ৩ বা তার বেশি থাকে → ৩য়টা দেখাবে
        if (data.reviews.length >= 3) {
          setActive(2);
        } else if (data.reviews.length > 0) {
          setActive(0);
        }
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Slider effect
  useEffect(() => {
    const items = document.querySelectorAll(".sliderr .itemms");
    if (!items || items.length === 0) return;
    if (active >= items.length) return;

    const loadShow = () => {
      let stt = 0;

      // Active item
      if (items[active]) {
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = "none";
        items[active].style.opacity = 1;
      }

      // After active
      for (let i = active + 1; i < items.length; i++) {
        stt++;
        const item = items[i];
        if (!item) continue;
        item.style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      }

      // Before active
      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        const item = items[i];
        if (!item) continue;
        item.style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      }
    };

    loadShow();
  }, [active, reviews]);

  const handleNext = () => {
    setActive((prev) => (prev + 1 < reviews.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  // নতুন review যোগ হলে সাথে সাথে দেখানোর জন্য callback
  const handleReviewAdded = async () => {
    await fetchReviews();

    // সবসময় সর্বশেষ review active হবে
    setActive((prev) => reviews.length); // নতুনটা index = length
  };

  return (
    <div className="w-full universal py-20">
      <div className="fixed_width text-center">
        {/* Slider */}
        <div className="sliderr">
          {reviews.map((review, index) => (
            <div className="itemms text-black p-4" key={index}>
              <Image
                src="/images/happy-client.png"
                alt="review"
                width={112}
                height={112}
                className="w-20 h-20 sm:w-28 sm:h-28 object-cover mb-5 m-auto rounded-full border-2 border-black/20"
              />
              <p className="text-xl my-2">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </p>
              <h1 className="text-base title1 sm:text-lg uppercase font-semibold mb-2">
                {review.name}
              </h1>
              <p className="text-sm sm:text-base font-light">
                {review.message}
              </p>
            </div>
          ))}

          {reviews.length > 1 && (
            <>
              <button id="nextt" onClick={handleNext}>
                {">"}
              </button>
              <button id="prevt" onClick={handlePrev}>
                {"<"}
              </button>
            </>
          )}
        </div>

        {/* review box */}
        <div className="w-full">
          <AnimationWrapper direction="left">
            <h1 className="text-2xl title1 sm:text-3xl md:text-4xl font-bold mt-2">
              <AnimatedText text="Say something about US!" from="right" />
            </h1>
          </AnimationWrapper>

          <div className="w-full my-5">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-[#64646460] text-black px-4 py-2 rounded"
            >
              Review Us!
            </button>

            {showPopup && (
              <Review
                onClose={() => setShowPopup(false)}
                onReviewAdded={handleReviewAdded}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
