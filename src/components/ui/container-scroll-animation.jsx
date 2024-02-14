"use client";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef.current,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] flex items-center justify-center relative p-20"
      ref={containerRef}
      style={{
        width: "90%",
      }}
    >
      <div
        className="py-40 w-full relative"
        style={{
          perspective: "1000px",
          width: "100%",
          height: "100%",
          padding: "0rem",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale} />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, translate }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000029, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[45rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div
        className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4"
        style={{
          padding: "0rem",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/image/3d-map.png"
          alt=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "0%",
            left: "50%",
            transform: "translate(-50%,0%)",
            width: "100%",
            height: "40%",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
            zIndex: 1,
          }}
        ></span>
        <div
          style={{
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "#fff",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            Les Cottages
          </h1>
          <small
            style={{
              color: "#fff",
              zIndex: 2,
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "1rem",
            }}
          >
            Belvédère
          </small>
        </div>
        <a
          href="https://sae501-belvedere.vercel.app/"
          target="blank"
          style={{
            zIndex: 1,
            padding: "0.5rem 2rem",
            backgroundColor: "var(--blue)",
            color: "var(--white)",
            borderRadius: "30px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Découvrir
        </a>
      </div>
    </motion.div>
  );
};
