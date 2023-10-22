import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Card from "../components/card/card";
import Header from "../components/header/header";

const page = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: images } = await supabase.from("gallery").select("*");
  if (!images) {
    return <div>No data found</div>;
  }
  // console.log(images);

  return (
    <div className="bg-gradient-to-br from-[#040c25] to-[#230430]">
      <div className="pt-3 sticky top-0 z-10">
        <Header />
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <Card
              key={image.id}
              id={image.id}
              source={image.source}
              url={image.imageURL}
              created_at={image.created_at}
              username={image.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
