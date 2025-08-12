import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <section>
      <Seo title="Settings | Vision Matcher Pro" description="ตั้งค่าระบบ กล้อง การสตรีม ความปลอดภัย และรูปแบบเอาต์พุต" />
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>ทั่วไป</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="darkmode">Dark mode</Label>
            <Switch id="darkmode" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="alerts">เปิดการแจ้งเตือน</Label>
            <Switch id="alerts" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
