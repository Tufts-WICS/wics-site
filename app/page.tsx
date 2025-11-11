import Link from "next/link";
import { Container, Title, Text, Stack, Card, Button, Group } from "@mantine/core";

export default function Home() {
  return (
    <Container size="lg" py={48}>
      <Stack>
        <Title order={1}>WICS Website - Main Page</Title>
        <Text color="dimmed">Landing page for tickets</Text>

  <Group align="stretch">
          <Card shadow="sm" padding="lg" style={{ flex: 1 }}>
            <Stack>
              <Title order={3}>Sprint 1</Title>
              <Text size="sm">Introduction</Text>
              <Group>
                <Link href="/sprint1">
                  <Button variant="outline">Open Sprint 1</Button>
                </Link>
              </Group>
            </Stack>
          </Card>

          <Card shadow="sm" padding="lg" style={{ flex: 1 }}>
            <Stack>
              <Title order={3}>Sprint 2</Title>
              <Text size="sm">In Progress</Text>
              <Group>
                <Link href="/sprint2">
                  <Button variant="outline">Open Sprint 2</Button>
                </Link>
              </Group>
            </Stack>
          </Card>
        </Group>
      </Stack>
    </Container>
  );
}
