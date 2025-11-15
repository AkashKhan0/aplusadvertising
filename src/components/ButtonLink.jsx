"use client";
import Link from "next/link";

const ButtonLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className="neu-button">{text}</button>
    </Link>
  );
};

export default ButtonLink;
