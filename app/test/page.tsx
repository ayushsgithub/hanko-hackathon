import React from "react";
import supabase from "../utils/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";

type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};

const page = async () => {
  
  const { data: images } = await supabase.from("image-gallery").select("id, username, imageURL");
    if (!images) {
      return <div>not found</div>
    }
    console.log(images);

  return (
    // <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //   <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //     {images.map((image) => (
    //       // <BlurImage key={image.id} image={image.imageURL} />
    //       <div>{image.id}
    //       <p>{image.username}</p>
    //       <p>{image.imageURL}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <pre>{JSON.stringify(images, null, 2)}</pre>
  );
};

export default page;

function BlurImage({ image }: { image: Image }) {

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  );
}

// <div>
//   <h1>Test Page</h1>
//   <div className="bg-blue-600 w-fit mx-auto p-2 rounded-lg">
//     <LogoutBtn />
//   </div>
//   <Link
//     className="bg-green-600 w-fit mx-auto p-2 rounded-lg flex"
//     href="dashboard"
//   >
//     Go to Profile
//   </Link>
// </div>
