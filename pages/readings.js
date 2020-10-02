import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { Heading, Box, Button, Text } from "@chakra-ui/core";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Readings({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Heading mb={4}>Readings</Heading>
      <p>My thoughts and ideas written down.</p>
      <Box>
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <Box key={id}>
            <Button variant="link" my={2}>
              <Heading as="h3" size="lg" fontWeight="bold">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </Heading>
            </Button>
            <br />
            <Text fontSize="sm" color="gray.500">
              <Date dateString={date} />
            </Text>
            <Text>{excerpt}</Text>
          </Box>
        ))}
      </Box>
    </Layout>
  );
}
