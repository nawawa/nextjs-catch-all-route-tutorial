import { NextPage, GetStaticPaths, GetStaticProps } from "next";

type Props = {
  slug: string | string[] | undefined;
};

const TestPage: NextPage<Props> = ({ slug }) => {
  return <div>{ }</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  console.log(slug)
  return {
    props: { slug },
    revalidate: 60,
  };
};

export default TestPage;
