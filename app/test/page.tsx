import React from "react";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { LogoutBtn } from "../components/hanko/Logout";
import Link from "next/link";

type Image = {
  id: number;
  created_at: string;
  username: string;
  source: string;
  imageURL: string;
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const page = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: images } = await supabase.from("gallery").select("*");
  if (!images) {
    return <div>not found</div>;
  }
  // console.log(images);

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="p-2 bg-red-400 w-20">
        <LogoutBtn />
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          // <BlurImage key={image.id} image={image} />
          <Link key={image.id} href={image.source} className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image
              alt=""
              src={image.imageURL}
              width={300}
              height={300}
              // layout="fill"
              // objectFit="cover"
              // placeholder="blur"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{image.created_at}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default page;

function BlurImage({ image }: { image: Image }) {
  return (
    <Link href={image.imageURL} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageURL}
          width={300}
          height={300}
          // layout="fill"
          // objectFit="cover"
          // placeholder="blur"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.created_at}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </Link>
  );
}
