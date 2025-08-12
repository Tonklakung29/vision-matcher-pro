import React from "react";
import Seo from "@/components/Seo";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, BarChart3, Settings as SettingsIcon, CheckCircle2, Calendar, Activity } from "lucide-react";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";

const data = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 18 },
  { name: "Wed", value: 10 },
  { name: "Thu", value: 22 },
  { name: "Fri", value: 17 },
  { name: "Sat", value: 25 },
  { name: "Sun", value: 20 },
];

const Index = () => {
  return (
    <>
      <Seo
        title="แดชบอร์ดทันสมัยพร้อมแท็บ | Modern Tabs Dashboard"
        description="หน้าแดชบอร์ดพร้อมแท็บใช้งานจริง ดีไซน์ทันสมัย รองรับมือถือ มีเอฟเฟกต์และการ์ดสรุปข้อมูล พร้อมกราฟรายงาน."
      />
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
          <nav className="container mx-auto flex items-center justify-between py-4 px-4">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Sparkles className="text-primary" />
              <span>My Modern App</span>
            </a>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">คู่มือ</Button>
              <Button size="sm" className="hover-scale">เริ่มต้นใช้งาน</Button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-10">
          <section className="mb-8 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              แดชบอร์ดพร้อมแท็บใช้งานจริง
            </h1>
            <p className="mt-3 text-muted-foreground">
              จัดการงานของคุณอย่างเป็นระบบ พร้อมรายงานและการตั้งค่าสำคัญในที่เดียว
            </p>
          </section>

          <section aria-labelledby="app-tabs" className="animate-fade-in">
            <h2 id="app-tabs" className="sr-only">เมนูหลักแบบแท็บ</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview" className="hover-scale">
                  <Activity className="mr-2" /> Overview
                </TabsTrigger>
                <TabsTrigger value="reports" className="hover-scale">
                  <BarChart3 className="mr-2" /> Reports
                </TabsTrigger>
                <TabsTrigger value="settings" className="hover-scale">
                  <SettingsIcon className="mr-2" /> Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="hover-scale">
                    <CardHeader>
                      <CardTitle>สรุปเร็ว</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">งานค้าง</p>
                        <p className="text-2xl font-semibold">8</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">เสร็จวันนี้</p>
                        <p className="text-2xl font-semibold">12</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ความคืบหน้า</p>
                        <p className="text-2xl font-semibold">76%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-scale md:col-span-2">
                    <CardHeader>
                      <CardTitle>กิจกรรมล่าสุด</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="text-primary" />
                          อัปเดตสถานะโปรเจกต์เป็น In Review
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="text-primary" />
                          สร้างงานใหม่ “ออกแบบแดชบอร์ด” กำหนดส่ง ศุกร์นี้
                        </li>
                        <li className="flex items-center gap-2">
                          <Activity className="text-primary" />
                          สถิติการใช้งานเพิ่มขึ้น 15% สัปดาห์นี้
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover-scale md:col-span-3">
                    <CardHeader>
                      <CardTitle>เริ่มต้นอย่างรวดเร็ว</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-muted-foreground">
                        ตั้งค่าโครงการ สร้างงาน และเชิญทีมของคุณได้เลย
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline">ดูตัวอย่างโปรเจกต์</Button>
                        <Button>สร้างโปรเจกต์ใหม่</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reports">
                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle>สรุปรายสัปดาห์</CardTitle>
                  </CardHeader>
                  <CardContent style={{ height: 280 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle>การตั้งค่า</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">โหมดมืด</p>
                        <p className="text-sm text-muted-foreground">ปรับธีมให้เหมาะกับสภาพแสง</p>
                      </div>
                      <Button variant="outline" size="sm">สลับธีม</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">การแจ้งเตือน</p>
                        <p className="text-sm text-muted-foreground">เปิด/ปิด การแจ้งเตือนสำคัญ</p>
                      </div>
                      <Button variant="outline" size="sm">จัดการ</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
