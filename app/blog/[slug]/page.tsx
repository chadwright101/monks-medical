"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import parse, { domToReact } from "html-react-parser";

import { BlogDataContext } from "@/app/_context/blog-context";
import Button from "@/app/_components/button";

const BlogPage = ({ params }: { params: any }) => {
  const [featuredMediaUrls, setFeaturedMediaUrls] = useState<{
    [key: number]: string;
  }>({});
  const { data, loading } = useContext(BlogDataContext);

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchMediaAndAuthor = async () => {
      const urls: { [key: string]: string } = {};
      if (data) {
        const filteredPost = data.find(
          (post: any) => post.slug === params.slug
        );
        setPost(filteredPost);

        if (filteredPost && filteredPost.author) {
          try {
            const response = await fetch(
              `https://blog.monksmedical.com/wp-json/wp/v2/users/${filteredPost.author}`
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const authorData = await response.json();
            setPost((prevPost: any) => ({
              ...prevPost,
              author: authorData.name,
            }));
          } catch (error) {
            console.error("Failed to fetch author:", error);
          }
        }

        for (const post of data) {
          if (post.featured_media) {
            try {
              const response = await fetch(
                `https://blog.monksmedical.com/wp-json/wp/v2/media/${post.featured_media}`
              );
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const mediaData = await response.json();
              urls[post.id] = mediaData.source_url;
            } catch (error) {
              console.error("Failed to fetch featured media:", error);
            }
          }
        }
        setFeaturedMediaUrls(urls);
      }
    };

    fetchMediaAndAuthor();
  }, [data, params.slug]);

  const transform = (node: any) => {
    const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
    if (node.type === "tag" && headingTags.includes(node.name)) {
      return <h2 className="text-subheading">{domToReact(node.children)}</h2>;
    }
    if (node.type === "tag" && node.name === "ol") {
      return (
        <ol className="list-decimal text-left pl-10 text-paragraph">
          {domToReact(node.children)}
        </ol>
      );
    }
    if (node.type === "tag" && node.name === "ul") {
      return (
        <ul className="list-disc text-left text-paragraph pl-10">
          {domToReact(node.children)}
        </ul>
      );
    }
    if (node.type === "tag" && node.name === "p") {
      return <p className="text-paragraph">{domToReact(node.children)}</p>;
    }
    if (node.type === "tag" && node.name === "blockquote") {
      return (
        <blockquote className="p-4 bg-lightBrown/25 italic text-center grid gap-2">
          {domToReact(node.children)}
        </blockquote>
      );
    }
  };

  return (
    <main className="mt-20 grid gap-10">
      {!loading && post ? (
        <>
          <div>
            <h1 className="mb-2">{post.title.rendered}</h1>
            <h2 className="text-paragraph">
              By:{" "}
              {typeof post.author === "number"
                ? null
                : post.author.replace("and", "&")}
            </h2>
          </div>
          {post.featured_media && featuredMediaUrls[post.id] ? (
            <Image
              src={featuredMediaUrls[post.id]}
              alt={post.title.rendered}
              width={200}
              height={200}
              className="object-cover aspect-video tabletLarge:max-h-[500px]"
            />
          ) : (
            <div className="aspect-video w-full h-full bg-brown/50 drop-shadow-default rounded-lg animate-pulse tabletLarge:max-h-[500px]" />
          )}
          <div className="grid gap-5">
            {parse(post.content.rendered, { replace: transform })}
          </div>
        </>
      ) : (
        <div className="spinner-large"></div>
      )}
      <Button
        cssClasses="desktopSmall:mr-auto"
        link="/blog"
        ariaLabel="Back to Blog Page"
      >
        Back
      </Button>
    </main>
  );
};

export default BlogPage;
