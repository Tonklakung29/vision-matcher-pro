import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Cameras() {
  return (
    <section>
      <Seo title="Cameras | Vision Matcher Pro" description="จัดการและเชื่อมต่อกล้อง RTSP/ONVIF, Mobile, WebRTC สำหรับระบบ YOLO Matching" />
      <h1 className="text-2xl font-bold mb-4">Cameras</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>เพิ่มกล้องใหม่</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>ชื่อกล้อง</Label>
                <Input placeholder="Entrance Cam" />
              </div>
              <div>
                <Label>โปรโตคอล</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="RTSP / ONVIF / WebRTC" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rtsp">RTSP</SelectItem>
                    <SelectItem value="onvif">ONVIF</SelectItem>
                    <SelectItem value="webrtc">WebRTC</SelectItem>
                    <SelectItem value="ndi">NDI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label>URL / Stream</Label>
                <Input placeholder="rtsp://user:pass@ip:554/stream" />
              </div>
              <div>
                <Label>FPS</Label>
                <Input placeholder="30" type="number" />
              </div>
              <div>
                <Label>ความละเอียด</Label>
                <Input placeholder="1920x1080" />
              </div>
            </div>
            <Button className="w-full">บันทึก</Button>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>สแกนกล้องในเครือข่าย</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">สแกนหาอุปกรณ์ที่รองรับ ONVIF/RTSP บนเครือข่าย และเพิ่มอัตโนมัติ</p>
            <div className="flex gap-2">
              <Input placeholder="CIDR เช่น 192.168.1.0/24" />
              <Button>เริ่มสแกน</Button>
            </div>
            <div className="text-xs text-muted-foreground">ผลลัพธ์จะแสดงที่นี่</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
