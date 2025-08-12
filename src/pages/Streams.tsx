import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Streams() {
  return (
    <section>
      <Seo title="Streams | Vision Matcher Pro" description="แสดงตัวอย่างสตรีมแบบ Real-time และตั้งค่าการรับภาพสำหรับ YOLO" />
      <h1 className="text-2xl font-bold mb-4">Streams</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {[1,2,3,4].map((i) => (
          <Card key={i} className="hover-scale">
            <CardHeader>
              <CardTitle>Stream #{i}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-md bg-muted" />
              <div className="mt-2 text-xs text-muted-foreground">สถานะ: Offline (placeholder)</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
