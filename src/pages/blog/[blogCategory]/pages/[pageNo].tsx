import { NextPage, GetStaticPaths, GetStaticProps } from "next";

type Props = {
  slug: string | string[];
};

const TestPage: NextPage<Props> = ({ slug }) => {
  return (
    <div>
      <div>{Array.isArray(slug) && slug.map((s) => <p key={s}>{s}</p>)}</div>
      <div>{!Array.isArray(slug) && <p>{ slug}</p>}</div>
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
  console.log(context)
  const slug = context.params?.slug
  return {
    props: { slug: slug ? slug : "" },
    revalidate: 60,
  };
};

export default TestPage;
