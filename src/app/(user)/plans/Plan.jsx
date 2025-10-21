"use client";
import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import { useState } from "react";

export default function Plan() {
  const [form, setForm] = useState({
    technology: [],
    websiteType: "",
    pages: [],
    features: [],
    paymentMethods: [],
    others: "",
    email: "",
  });

  const [customInputs, setCustomInputs] = useState({
    technology: "",
    websiteType: "",
    pages: "",
    features: "",
    paymentMethods: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  // 🔹 Toggle selection
  const toggle = (field, value, isRadio = false) => {
    setForm((prev) => {
      if (isRadio || field === "websiteType") {
        return { ...prev, [field]: value };
      }
      const list = prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value];
      return { ...prev, [field]: list };
    });
  };

  // 🔹 Handle Others input
  const handleOthersInput = (field, val) => {
    setCustomInputs({ ...customInputs, [field]: val });

    setForm((prev) => {
      const othersValue = val ? `Others: ${val}` : "";
      if (field === "websiteType") {
        return { ...prev, [field]: othersValue };
      } else {
        const filtered = prev[field].filter((v) => !v.startsWith("Others:"));
        return {
          ...prev,
          [field]: [...filtered, ...(othersValue ? [othersValue] : [])],
        };
      }
    });
  };

  // 🔹 Handle Others toggle
  const toggleOthers = (field) => {
    setForm((prev) => {
      if (field === "websiteType") {
        if (prev.websiteType.startsWith("Others:")) {
          return { ...prev, websiteType: "" };
        } else {
          return { ...prev, websiteType: "Others:" };
        }
      } else {
        const hasOthers = prev[field].some((v) => v.startsWith("Others:"));
        if (hasOthers) {
          const filtered = prev[field].filter((v) => !v.startsWith("Others:"));
          return { ...prev, [field]: filtered };
        } else {
          return { ...prev, [field]: [...prev[field], "Others:"] };
        }
      }
    });
  };

  // 🔹 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting..." });

    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "✅ Plan submitted successfully!",
        });
        setForm({
          technology: [],
          websiteType: "",
          pages: [],
          features: [],
          paymentMethods: [],
          others: "",
          email: "",
        });
        setCustomInputs({
          technology: "",
          websiteType: "",
          pages: "",
          features: "",
          paymentMethods: "",
        });
      } else {
        setStatus({ type: "error", message: "❌ " + data.error });
      }
    } catch (err) {
      setStatus({ type: "error", message: "❌ Something went wrong!" });
    }
  };

  return (
    <div className="universal mb-[50px]">
      <div className="fixed_width px-5 sm:px-2 md:px-2">
        <div className="w-full flex flex-col items-center justify-center my-5 p-5">
          <AnimationWrapper direction="left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              <AnimatedText text="Customize Your Website Plan" from="right" />
            </h1>
          </AnimationWrapper>
          <p className="text-lg">
            Submit your customized plan, and our team will reach out shortly to
            discuss the details and bring your perfect project to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-5">
          {/* LEFT SIDE (Scrollable) */}
          <div className="overflow-y-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Category
                title="Technology"
                options={["WordPress", "Next.js", "React.js", "HTML/CSS/JS"]}
                field="technology"
                form={form}
                toggle={toggle}
                customInputs={customInputs}
                handleOthersInput={handleOthersInput}
                toggleOthers={toggleOthers}
              />

              <Category
                title="Website Type"
                options={[
                  "Portfolio",
                  "Business",
                  "E-commerce",
                  "Blog",
                  "Landing Page",
                ]}
                type="radio"
                field="websiteType"
                form={form}
                toggle={toggle}
                customInputs={customInputs}
                handleOthersInput={handleOthersInput}
                toggleOthers={toggleOthers}
              />

              <Category
                title="Pages"
                options={[
                  "Home",
                  "About",
                  "Services",
                  "Contact",
                  "Blog",
                  "Products",
                  "Gallery",
                ]}
                field="pages"
                form={form}
                toggle={toggle}
                customInputs={customInputs}
                handleOthersInput={handleOthersInput}
                toggleOthers={toggleOthers}
              />

              <Category
                title="Features"
                options={[
                  "SEO Optimization",
                  "Contact Form",
                  "Newsletter",
                  "Dashboard",
                  "Payment Gateway",
                  "User Authentication",
                ]}
                field="features"
                form={form}
                toggle={toggle}
                customInputs={customInputs}
                handleOthersInput={handleOthersInput}
                toggleOthers={toggleOthers}
              />

              <Category
                title="Payment Methods"
                options={[
                  "Stripe",
                  "PayPal",
                  "SSLCOMMERZ",
                  "Bkash",
                  "Nagad",
                  "Rocket",
                ]}
                field="paymentMethods"
                form={form}
                toggle={toggle}
                customInputs={customInputs}
                handleOthersInput={handleOthersInput}
                toggleOthers={toggleOthers}
              />

              <div>
                <h3 className="font-semibold text-lg">Additional Notes</h3>
                <textarea
                  className="w-full border p-2 rounded"
                  rows="3"
                  placeholder="Write any other custom request..."
                  value={form.others}
                  onChange={(e) => setForm({ ...form, others: e.target.value })}
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Your Email</h3>
                <input
                  type="email"
                  className="w-full border p-2 rounded"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition mt-5"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Submitting..." : "Submit Plan"}
              </button>

              {status.message && (
                <p
                  className={`text-center mt-2 ${
                    status.type === "success"
                      ? "text-green-600"
                      : status.type === "error"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
          {/* RIGHT SIDE (Sticky Summary Panel) */}
          <div className="md:sticky md:top-6 self-start p-4 rounded overflow-y-auto">
            <h3 className="text-2xl font-bold mb-2 text-center">
              Your Website Plan
            </h3>
            <p className="text-gray-600 mb-4 text-base text-center">
              Select all the necessary features, pages, and options for your
              website. Your selections will appear here in real time.
            </p>

            <ul className="space-y-2 text-base">
              <li>
                <b>Technology:</b> {form.technology.join(", ")}
              </li>
              <li>
                <b>Type:</b> {form.websiteType}
              </li>
              <li>
                <b>Pages:</b> {form.pages.join(", ")}
              </li>
              <li>
                <b>Features:</b> {form.features.join(", ")}
              </li>
              <li>
                <b>Payment:</b> {form.paymentMethods.join(", ")}
              </li>
              <li>
                <b>Additional Notes:</b> {form.others}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// 🔹 Category Component
function Category({
  title,
  options,
  type = "checkbox",
  field,
  form,
  toggle,
  customInputs,
  handleOthersInput,
  toggleOthers,
}) {
  const othersSelected =
    field === "websiteType"
      ? form.websiteType.startsWith("Others:")
      : form[field].some((v) => v.startsWith("Others:"));

  return (
    <div className="universal mb-[50px]">
      <div className="fixed_width px-5 sm:px-2 md:px-2">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          {options.map((item) => (
            <label key={item} className="block">
              <input
                type={type}
                name={field}
                checked={form[field].includes?.(item) || form[field] === item}
                onChange={() => toggle(field, item, type === "radio")}
              />{" "}
              {item}
            </label>
          ))}

          <label className="block mt-1">
            <input
              type={type}
              name={field}
              checked={othersSelected}
              onChange={() => toggleOthers(field)}
            />{" "}
            Others
          </label>

          {othersSelected && (
            <input
              type="text"
              placeholder={`Custom ${title.toLowerCase()}...`}
              value={customInputs[field]}
              onChange={(e) => handleOthersInput(field, e.target.value)}
              className="mt-1 w-full border rounded p-2 text-sm"
            />
          )}
        </div>
      </div>
    </div>
  );
}
