import React from "react";
import clsx from "clsx";

/**
 * Container
 * Backbone layout wrapper for consistent horizontal spacing.
 * Controls ONLY horizontal padding + max width.
 */
export default function Container({ children, className = "" }) {
  return (
    <div
      className={clsx(
        "w-full max-w-[1200px] mx-auto",
        "px-4 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}