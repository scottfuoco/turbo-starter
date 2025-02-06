import { db } from "@packages/db/client";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default async function ExamplePage() {
  const examples = await db.query.example.findMany();
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">Example Database Query</h1>
        <h2 className="text-lg text-foreground mb-8 text-center">Here are some examples of cards being rendered with data from the database</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {examples.map((example) => (
            <Card key={example.id}>
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{example.content}</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Created: {example.createdAt.toLocaleString()}</p>
                  {example.updatedAt && <p>Updated: {example.updatedAt.toLocaleString()}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
