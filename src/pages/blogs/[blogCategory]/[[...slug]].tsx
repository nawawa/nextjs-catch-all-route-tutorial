import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

type Props = {
  category: string[];
  slug: string[];
};

const TestPage: NextPage<Props> = ({ category, slug }) => {
  return (
    <div>
      <span>
        {category.map((c) => (
          <h2 key={c}>{c}</h2>
        ))}
      </span>
      <span>
        {slug.map((s) => (
          (<p key={s}>{s}</p>)
        ))}
      </span>
      <Link href="/blogs/archive/2022/3/page/1">
        <button>archive/2022/3/page/1</button>
      </Link>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.blogCategory;
  const slug = context.params?.slug;

  return {
    props: {
      category: Array.isArray(category) ? category : [category],
      slug: Array.isArray(slug) ? slug : [slug],
    },
    revalidate: 60,
  };
};

export default TestPage;
