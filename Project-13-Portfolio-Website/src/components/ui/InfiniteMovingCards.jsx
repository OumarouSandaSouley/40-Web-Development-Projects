import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";
import {
  User,
  Calendar,
  PenTool,
  Code,
  CheckCircle,
  UploadCloud,
  LifeBuoy,
  MessageCircle,
} from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      setDirection();
      setSpeed();
      setStart(true);
    }
  };

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
        case "fast":
        default:
          duration = "20s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const iconMapping = {
    "Requirement Analysis": User,
    Planning: Calendar,
    Design: PenTool,
    Development: Code,
    Testing: CheckCircle,
    Deployment: UploadCloud,
    Maintenance: LifeBuoy,
    "Review and Feedback": MessageCircle,
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          const Icon = iconMapping[item.step] || User;
          return (
            <li
              key={idx}
              className="w-[350px] max-w-full relative rounded-lg shadow-lg border border-gray-200 flex-shrink-0 bg-gradient-to-b from-white to-gray-100 px-8 py-6 md:w-[450px]"
            >
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <Icon className="text-primary w-6 h-6 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.step}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
                <span className="text-xs text-gray-500 mt-4">
                  {item.responsible}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
