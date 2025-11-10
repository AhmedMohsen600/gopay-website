"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Typography } from "./typography";

interface AccordionItemProps {
  question: string;
  answer: string | ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-[12px] mb-4 last:mb-0 transition-colors duration-300 ",
        isOpen ? "bg-[#e9e9f2]" : "bg-[#fafafa]",
        className
      )}
    >
      <button
        onClick={onToggle}
        type="button"
        className="w-full flex items-center justify-between gap-4 px-3.5 py-3 md:px-4.5 md:py-4 xl:px-5 xl:py-4.5 text-left hover:opacity-80 transition-opacity cursor-pointer"
        {...(isOpen
          ? { "aria-expanded": "true" }
          : { "aria-expanded": "false" })}
      >
        <Typography variant="p18" className=" flex-1">
          {question}
        </Typography>
        <div className="shrink-0">
          <PlusIcon size={16} weight="bold" className="text-text-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
            onClick={onToggle}
          >
            <div className="px-3.5 pb-6 md:px-4.5 xl:px-5">
              <div className="text-text-3 leading-relaxed cursor-pointer [&_a]:text-link [&_a]:underline [&_a]:hover:opacity-80 [&_a]:transition-opacity [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2">
                {typeof answer === "string" ? (
                  <Typography
                    variant="p16"
                    className="text-text-3 leading-relaxed"
                  >
                    {answer}
                  </Typography>
                ) : (
                  <div className="xl:text-base md:text-sm text-xs text-text-3 leading-tighter">
                    {answer}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string | ReactNode }>;
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("w-full whitespace-break-spaces", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
