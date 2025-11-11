"use client";
import Link from "next/link";

const ButtonLink = ({ href, text }) => {
  return (
    <Link href={href}>
      {/* <div className="baton relative inline-block">
        <div className="bordersy absolute top-0 left-0"></div>
        <div className="bordersy absolute bottom-0 left-0"></div>
        <div className="bordersx absolute top-0 left-0"></div>
        <div className="bordersx absolute bottom-0 left-0"></div>

        <div className="bordersy absolute top-0 right-0"></div>
        <div className="bordersy absolute bottom-0 right-0"></div>
        <div className="bordersx absolute top-0 right-0"></div>
        <div className="bordersx absolute bottom-0 right-0"></div>

        <button>{text}</button>
      </div> */}

<button className="neu-button">{text}</button>

    </Link>
  );
};

export default ButtonLink;
