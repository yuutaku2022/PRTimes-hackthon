import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const contentObj = {
    blocks: [
      { type: 'paragraph', text: 'これはモックデータです。APIが利用できない場合の代替表示です。' },
    ],
  };

  const mock = {
    id,
    title: `モックプレスリリース #${id}`,
    // フロント側が `JSON.parse(data.content)` しているため、文字列を返す
    content: JSON.stringify(contentObj),
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(mock);
}
