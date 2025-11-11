import Link from "next/link";
import { Container, Title, Text, Stack, Button } from "@mantine/core";

export default function Sprint2() {
  return (
    <Container size="md" py={48}>
      <Stack>
        <Title order={2}>Sprint 2</Title>
        <Text>Put your ticket here</Text>
        {/* Ticket Component */}
        <Link href="/">
          <Button>Back to Sprint Page</Button>
        </Link>
      </Stack>
    </Container>
  );
}
