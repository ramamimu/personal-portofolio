import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const theTest = [
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
];

export default function Organization() {
  const orgRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [elementScrollY, setElementScrollY] = useState(0);
  const [elementScrollX, setElementScrollX] = useState(0);

  useEffect(() => {
    orgRef.current!.scrollLeft = 2000;
    // console.log(orgRef.current.scrollX);
  }, []);

  useEffect(() => {
    orgRef.current?.addEventListener("scroll", () => {
      setElementScrollX(10);
      // console.log(elementScrollX);
      // console.log("scroll x: ", orgRef.current?.scrollLeft);
      // console.log("height in scroll: ", orgRef.current?.offsetTop);
    });
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      orgRef.current?.removeEventListener("scroll", () => {
        // get scroll x position
        // setElementScrollX(orgRef.current.scrollX.progress);
        // console.log(elementScrollX);
      });
    };
  }, [elementScrollX]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const inWeGo = orgRef.current!.offsetTop - window.innerHeight / 2;
      if (window.scrollY > orgRef.current!.offsetTop - window.innerHeight / 2) {
        // console.log("i am here");
        orgRef.current!.scrollLeft =
          window.scrollY - (orgRef.current!.offsetTop - window.innerHeight / 2);
        // e.preventDefault();
        // window.scrollTo(10, inWeGo);
      }
      setScrollY(window.scrollY);
      // console.log(window.scrollY);
      // console.log("=> ", inWeGo);
      // console.log("in window ", scrollY);
      // console.log("II", orgRef.current!.offsetTop);
      // console.log("III", window.innerHeight / 2);
      // console.log("height screen: ", window.innerHeight);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        // setScrollY(window.scrollY);
        // console.log(scrollY);
      });
    };
  }, [scrollY]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const el = orgRef.current;
  //     setElementScrollY(el.scrollYProgress);
  //     console.log(elementScrollY);
  //   };

  //   const element = orgRef.current;
  //   element.addEventListener("scroll", handleScroll);

  //   return () => {
  //     element.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <motion.section
      id="to-scroll"
      ref={orgRef}
      className="flex overflow-y-auto bg-slate-800"
    >
      <p className="text-slate-100">Hello in my Organization</p>
      {theTest.map((item, index) => (
        <div key={index} className="mx-5 min-w-full border">
          <p className="px-5 text-3xl text-slate-100">{item}</p>
        </div>
      ))}
    </motion.section>
  );
}
