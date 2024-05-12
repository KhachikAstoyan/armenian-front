export interface SummaryResponse {
  image: string;
  summary: string;
  characters: {name: string, summary: string}[];
}

export async function getSummary(text: string) {
  const response = await fetch('https://api-w5vy3m4h2q-uc.a.run.app/summary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text, lang: 'hy' })
  });

  const data: SummaryResponse = await response.json();
  return data;
}