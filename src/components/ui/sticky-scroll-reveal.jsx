import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-0"
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10vh 0",
      }}
    >
      <div
        className="div relative flex items-start px-0"
        style={{
          width: "50%",
        }}
      >
        <div
          className="max-w-2xl"
          style={{
            width: "100%",
          }}
        >
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20"
              style={{
                width: "100%",
              }}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
                style={{
                  color: "var(--black)",
                }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
                style={{
                  color: "var(--dark-gray)",
                  textAlign: "justify",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-80 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
        style={{
          width: "30rem",
          height: "20rem",
        }}
      ></motion.div>
    </motion.div>
  );
};
