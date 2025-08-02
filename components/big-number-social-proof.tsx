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
      setCurrentWord(
        wordsRotation[Math.floor(Math.random() * wordsRotation.length)]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <section className="py-16">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-5xl/tight tracking-tight items-center justify-center font-bold mb-8 relative">
          <motion.span className="inline-block">Migre sua </motion.span>
          <motion.div
            className="inline-flex items-center justify-center ml-2 overflow-clip"
            animate={{
              width: currentWord.containerSize,
              transition: {
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.171,
              },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord.word}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="inline-block"
              >
                {currentWord.word}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <br />
          não importa a
          <span className="text-6xl text-primary bg-clip-text ml-2 italic font-normal tracking-tight font-serif">
            tecnologia
          </span>
        </h2>

        <div className="flex flex-col w-full items-center justify-center sm:flex-row gap-4">
          <Input placeholder="Qual é seu email para contato?" />
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
