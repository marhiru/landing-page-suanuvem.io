import { AnimatePresence, motion } from "framer-motion";
import { IconCloud } from "./icon-cloud";
import { slugs } from "@/labels/slugs";
import { wordsRotation } from "@/labels/words";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./common/input/input";

export default function BigNumberSocialProof() {
  const icons = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/b3d2bc`
  );

  const [currentWord, setCurrentWord] = useState(wordsRotation[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(wordsRotation[Math.floor(Math.random() * wordsRotation.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="py-16">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-5xl/tight tracking-tight items-center justify-center font-bold mb-8 relative">
          {/* <AnimateSharedLayout> */}
          <motion.span layout className="inline-block">
            Migre sua{" "}
          </motion.span>
          <motion.div
            layout
            className="inline-flex items-center justify-center ml-2 overflow-clip"
            transition={{
              layout: {
                type: "spring",
                stiffness: 280,
                damping: 18,
                mass: 1
              },
              width: {
                type: "spring",
                stiffness: 280,
                damping: 18,
                mass: 1
              }
            }}
            animate={{
              width: currentWord.containerSize,
              transition: { 
                delay: 0.2, 
                type: "spring",
                stiffness: 280,
                damping: 18,
                mass: 1
              }
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord.word}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ 
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                  mass: 1
                }}
                className="inline-block"
                layout
              >
                {currentWord.word}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          {/* </Animatel> */}
          <br />
          não importa a
          <span className="text-6xl text-primary  bg-clip-text ml-2 italic font-normal tracking-tight font-serif">
            tecnologia
          </span>
        </h2>

        <div className="flex flex-col w-full items-center justify-center sm:flex-row gap-4">
          {/* <Button
            size={"lg"}
            className="bg-primary h-12 flex items-center justify-center text-base text-primary-foreground gap-2 group/button-main"
          >
            PRIMARY OPTION
            <div className="bg-input/20 size-6 text-primary-foreground justify-center items-center flex overflow-clip relative rounded-full p-1">
              <ArrowUpRight className="size-5 absolute -translate-x-3.5 translate-y-3.5 group-hover/button-main:translate-0 duration-200 ease-in-out transition-transform" />
              <ArrowUpRight className="size-5 absolute group-hover/button-main:translate-x-3.5 group-hover/button-main:-translate-y-3.5 duration-200 ease-in-out transition-transform" />
            </div>
          </Button>
          <Button size={"lg"} className="text-base h-12" variant="outline">
            SECOND OPTION
          </Button> */}
          <Input />
        </div>

        <div className="flex w-full gap-12 items-center justify-center mt-12 relative">
          <AnimatePresence mode="wait">
            <IconCloud images={icons} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
