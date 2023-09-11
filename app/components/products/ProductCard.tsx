import { formatPrice } from "@/app/utils/formatPrice";
import { truncateText } from "@/app/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  data: any;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div>
      <Link href={`/product/${data.id}`} key={data.id}>
        <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-md p-3 transition hover:scale-105 text-center">
          <div className="flex flex-col items-center w-full gap-1">
            {/* img */}
            <div className="relative aspect-square w-2/3 md:w-full overflow-hidden">
              <Image
                src={data.images[0].image}
                alt={data.id}
                fill
                className="w-full h-full object-contain "
              />
            </div>
            {/* text */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="font-semibold">{truncateText(data.name)}</h2>
              <Rating value={productRating} readOnly />
              <p>{data.reviews.length} reviews</p>
              <h3 className="font-semibold">{formatPrice(data.price)}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
