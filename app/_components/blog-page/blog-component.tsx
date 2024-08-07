import { usePathname } from "next/navigation";

interface Props {
  author: string;
  title: string;
  content: string;
  image: string;
}

const BlogComponent = ({ author, title, content, image }: Props) => {
  const pathname = usePathname();
  return <div>Enter</div>;
};

export default BlogComponent;
