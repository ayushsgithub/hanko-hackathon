"use client"
import React from "react";

const Post = () => {
  return (
    <main className="h-[200vh] text-slate-200 pt-10 max-w-5xl mx-auto p-5">
      <h2 className="text-lg font-bold my-3">Create Your Post</h2>
      May not be the best post, but it&apos;s definitely a start!
      <form className="flex flex-col space-y-3 mt-5">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="rounded bg-inherit outline-none border border-green-200 p-1"
        />
        <label>Twitter</label>
        <input
          type="text"
          placeholder="Enter your twitter handle e.g. @ayushisreal"
          className="rounded bg-inherit outline-none border border-green-200 p-1"
        />
        <label>URL</label>
        <input
          type="url"
          placeholder="Enter the url of the image"
          className="rounded bg-inherit outline-none border border-green-200 p-1"
        />
        <button onClick={() => alert("feature not enabled! Sorry for the inconvenience")} className="rounded bg-orange-400 hover:bg-orange-300 p-2  text-black">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Post;
