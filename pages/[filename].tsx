import { getStaticPropsForTina, staticRequest } from "tinacms";
import { Blocks } from "../components/blocks";
import { layoutQueryFragment } from "../components/layout";
import type { PagesDocument } from "../.tina/__generated__/types";
import FourOhFour from "./404";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  if (props.data && props.data.getPagesDocument) {
  return <Blocks {...props.data.getPagesDocument.data} />
  }
  return <FourOhFour />;
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query ContentQuery($relativePath: String!) {
        # "index.md" is _relative_ to the "Pages" path property in your schema definition
        # you can inspect this file at "content/pages/index.md"
        ${layoutQueryFragment}
        getPagesDocument(relativePath: $relativePath) {
          data {
            __typename
            blocks {
              __typename
              ... on PagesBlocksFeatures {
                color
                items {
                  icon {
                    name
                    color
                    style
                  }
                  image
                  title
                  text
                  tags
                  actions {
                  label
                  type
                  icon
                  link
                }
                }
              }
              ... on PagesBlocksContent {
                body
                color
              }
              ... on PagesBlocksTestimonial {
                quote
                author
                color
              }
              ... on PagesBlocksHero {
                tagline
                headline
                text
                actions {
                  label
                  type
                  icon
                  link
                }
                color
                image {
                  src
                  alt
                }
              }
            }
          }
        }
      }
  `,
    variables: { relativePath: `${params.filename}.md` },
  })) as { data: { getPagesDocument: PagesDocument } };

  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const pagesListData = (await staticRequest({
    query: `#graphql
      {
        getPagesList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })) as any;
  return {
    paths: pagesListData.getPagesList.edges.map((page) => ({
      params: { filename: page.node.sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
