import React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { SortPopup } from "./sort-popup";
import { Categories } from "./categories";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories ,className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className,
      )}
    >
      <Container className="flex items-center justify-between py-8">
        <Categories items={categories}/>
        <SortPopup />
      </Container>
    </div>
  );
};
