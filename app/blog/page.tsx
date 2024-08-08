"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import classNames from "classnames";
import parse, { domToReact } from "html-react-parser";

import { BlogDataContext } from "../_context/blog-context";
import Button from "../_components/button";

const Blog = () => {
  const { data, loading } = useContext(BlogDataContext);
  const [featuredMediaUrls, setFeaturedMediaUrls] = useState<{
    [key: number]: string;
  }>({});
  const [authorNames, setAuthorNames] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchMediaAndAuthor = async () => {
      const urls: { [key: string]: string } = {};
      const authors: { [key: string]: string } = {};
      for (const post of data) {
        if (post.author) {
          const authorResponse = await fetch(
            `https://blog.monksmedical.com/wp-json/wp/v2/users/${post.author}`,
            {
              next: { revalidate: 604800000 },
            }
          );
          const authorData = await authorResponse.json();
          authors[post.author] = authorData.name;
        }
        if (post.featured_media) {
          const response = await fetch(
            `https://blog.monksmedical.com/wp-json/wp/v2/media/${post.featured_media}`,
            {
              next: { revalidate: 604800000 },
            }
          );
          const mediaData = await response.json();
          urls[post.id] = mediaData.source_url;
        }
      }
      setFeaturedMediaUrls(urls);
      setAuthorNames(authors);
    };

    fetchMediaAndAuthor();
  }, [data]);

  const transform = (node: any) => {
    if (node.type === "tag" && node.name === "p") {
      return (
        <p className="tabletLarge:text-left">{domToReact(node.children)}</p>
      );
    }
  };

  return (
    <main className="mt-20">
      <h1 className="mb-15">Blog</h1>
      <ul>
        {loading ? (
          <div className="spinner-large"></div>
        ) : (
          data.map(
            ({ id, title, author, excerpt, slug, featured_media }, index) => (
              <li
                key={index}
                className={classNames("grid gap-10", {
                  "border-b-[1px] border-black/25 pb-15 mb-15":
                    index !== data.length - 1,
                  "tabletLarge:grid-cols-2": featured_media,
                })}
              >
                {featured_media && featuredMediaUrls[id] ? (
                  <Image
                    src={featuredMediaUrls[id]}
                    alt={title.rendered}
                    width={200}
                    height={200}
                    className="object-cover aspect-video tabletLarge:max-h-[300px]"
                  />
                ) : (
                  <div className="aspect-video w-full h-full bg-brown/50 drop-shadow-default rounded-lg animate-pulse tabletLarge:aspect-auto" />
                )}
                <div className="flex flex-col gap-5">
                  <h2 className="text-subheading tabletLarge:text-left">
                    {title.rendered}
                  </h2>
                  {parse(excerpt.rendered, { replace: transform })}
                  <h3 className="text-paragraph">
                    By:{" "}
                    {typeof authorNames[author] === "number"
                      ? null
                      : authorNames[author]?.replace("and", "&")}
                  </h3>
                  <Button
                    ariaLabel="Read more"
                    link={`/blog/${slug}`}
                    cssClasses="hidden tabletLarge:block tabletLarge:mr-auto tabletLarge:mt-auto"
                  >
                    Read More
                  </Button>
                </div>
                <Button
                  ariaLabel="Read more"
                  link={`/blog/${slug}`}
                  cssClasses="order-last tabletLarge:hidden"
                >
                  Read More
                </Button>
              </li>
            )
          )
        )}
      </ul>
    </main>
  );
};

export default Blog;
