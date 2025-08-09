import { AnimatePresence, motion } from "framer-motion";
import { IconCloud } from "./icon-cloud";
import { slugs } from "@/labels/slugs";
import { wordsRotation } from "@/labels/words";
import { useEffect, useState } from "react";
import { Input } from "./common/input/input";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function BigNumberSocialProof() {
  const icons = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/b3d2bc`
  );

  const [currentWord, setCurrentWord] = useState(wordsRotation[0]);
  const isMobile = useIsMobile();

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

  const getResponsiveWidth = () => {
    if (isMobile) {
      const wordLength = currentWord.word.length;
      const baseWidth = Math.max(wordLength * 15.4, 80);
      const maxWidth = 184;
      return Math.min(baseWidth, maxWidth);
    }
    return currentWord.containerSize;
  };

  return (
    <section className="py-36">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl/tight tracking-tight items-center justify-center font-semibold mb-8 relative">
          <div className="inline-flex items-baseline flex-nowrap">
            <motion.span className="inline-block mr-1.5 md:mr-2 whitespace-nowrap">
              Migre sua
            </motion.span>
            <motion.div
              id="text-container"
              className="inline-block items-center max-w-[184px] sm:max-w-full justify-start overflow-clip sm:min-w-0"
              animate={{
                width: getResponsiveWidth(),
                transition: {
                  // ease: [0.25, 0.1, 0.25, 1],
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
                  className="inline-block whitespace-nowrap"
                >
                  {currentWord.word}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
          <br />
          não importa a
          <span className="text-3xl md:text-6xl text-primary bg-clip-text ml-2 italic font-normal tracking-tight font-serif">
            tecnologia
          </span>
        </h2>

        <div className="flex flex-col w-full items-center justify-center sm:flex-row gap-4">
          <Input placeholder="Qual é seu melhor email para contato?" />
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
