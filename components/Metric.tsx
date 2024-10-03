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
    <div className="flex justify-center items-center">
      <Image
        src={imgUrl}
        width={25}
        height={25}
        alt={alt}
        className={`object-contain ${alt === "user" ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} items-center gap-1`}>
        {value}
        <span
          className={`font-normal leading-[15.6px] line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </div>
  );

  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
