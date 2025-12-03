import Link from "next/link";
import { Container, Title, Text, Stack, Button } from "@mantine/core";
import MyButton from "../components/Button";

export default function Sprint1() {
  return (
    <Container size="md" py={48}>
      <Stack>
        <Title order={2}>Sprint 1</Title>
        <Text>Put your ticket on this page!</Text>
        {<MyButton />}
        <Link href="/">
          <Button>Back to Sprint Page</Button>
        </Link>
      </Stack>
    </Container>
  );
}
