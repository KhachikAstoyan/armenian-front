import { Card, Skeleton, Text, Title } from "@mantine/core";
import React, { useEffect } from "react";

interface Summary {
  name: string;
  summary: string;
}

export const CharacterSummary: React.FC<Summary> = ({name, summary}) => {
  const [translatedSummary, setTranslatedSummary] = React.useState<Summary | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getTranslation = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:8080/character/summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ summary, name, lang: 'hy' })
    });

    const data: Summary = await response.json();
    setTranslatedSummary(data);
    setLoading(false);
  }

  useEffect(() => {
    getTranslation();
  }, []);

  return (
    <Skeleton mih={loading ? 100 : undefined} visible={loading} mb="lg" style={{ width: '100%' }}>
      <Card shadow="sm">
        <Title order={3} w={700}>{translatedSummary?.name}</Title>
        <Text size="lg">{translatedSummary?.summary}</Text>
      </Card>
    </Skeleton>
  )
}
