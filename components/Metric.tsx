import Image from "next/image";
import React from "react";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}
export const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    // fragments
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${alt === "user" ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles}flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
