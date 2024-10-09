"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

interface Props {
  itemId: string;
}

const EditAction = ({ itemId }: Props) => {
  const router = useRouter();

  const handleEdit = async () => {
    router.push(`/post/edit/${JSON.parse(itemId)}`);
  };

  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      <Image
        src="/icons/edit.svg"
        alt="Edit"
        width={14}
        height={14}
        className="cursor-pointer object-contain"
        onClick={handleEdit}
      />
    </div>
  );
};

export default EditAction;
