import { BlogDataProvider } from "../_context/blog-context";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BlogDataProvider>
      <div>{children}</div>
    </BlogDataProvider>
  );
};

export default BlogLayout;
