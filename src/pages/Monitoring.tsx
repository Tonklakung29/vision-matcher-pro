import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Monitoring() {
  return (
    <section>
      <Seo title="Monitoring | Vision Matcher Pro" description="สถิติระบบและการมอนิเตอร์ด้วย Prometheus/Grafana (placeholder)" />
      <h1 className="text-2xl font-bold mb-4">Monitoring</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {["CPU", "GPU", "Memory"].map((m) => (
          <Card key={m}>
            <CardHeader>
              <CardTitle>{m}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-24 rounded-md bg-muted" />
              <div className="mt-2 text-xs text-muted-foreground">กราฟ {m} (placeholder)</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
