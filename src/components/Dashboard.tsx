import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  BookOpen,
  Award,
  BarChart2,
  FileText,
  Settings,
  LogOut,
  ArrowRight,
} from "lucide-react";
import CourseCard from "./CourseCard";

interface DashboardProps {
  userType?: "commercial" | "technical" | "admin";
  userName?: string;
  userAvatar?: string;
}

const Dashboard = ({
  userType = "commercial",
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const { t } = useTranslation();

  // Mock data for courses
  const commercialCourses = [
    {
      id: 1,
      title: "Formación Técnica en AGV y AMR",
      description:
        "Aprende los fundamentos técnicos de los vehículos guiados automáticamente y robots móviles autónomos.",
      progress: 65,
      estimatedTime: "4 horas",
      thumbnail:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&q=80",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Formación en CRM",
      description:
        "Tutoriales paso a paso y simulaciones interactivas para dominar nuestro sistema CRM.",
      progress: 30,
      estimatedTime: "3 horas",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Preparación de Ofertas Comerciales",
      description:
        "Curso guiado con casos prácticos reales para la preparación efectiva de ofertas.",
      progress: 0,
      estimatedTime: "5 horas",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      status: "not-started",
    },
    {
      id: 4,
      title: "Capacitación en Soluciones y Servicios",
      description:
        "Webinars grabados y fichas interactivas de producto para mejorar tus habilidades de venta.",
      progress: 100,
      estimatedTime: "6 horas",
      thumbnail:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
      status: "completed",
    },
  ];

  const technicalCourses = [
    {
      id: 1,
      title: "Formación Técnica Profunda",
      description:
        "Videos técnicos avanzados y documentación descargable para especialistas.",
      progress: 45,
      estimatedTime: "8 horas",
      thumbnail:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Reparación y Resolución de Problemas",
      description:
        "Talleres en video con ejemplos reales de diagnóstico y reparación.",
      progress: 10,
      estimatedTime: "6 horas",
      thumbnail:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Pedidos de Repuestos",
      description:
        "Catálogo técnico interactivo y video instructivo para gestionar pedidos.",
      progress: 0,
      estimatedTime: "2 horas",
      thumbnail:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&q=80",
      status: "not-started",
    },
  ];

  // Mock data for achievements
  const achievements = [
    { id: 1, title: "Primer Curso Completado", icon: "🏆", date: "15/04/2023" },
    { id: 2, title: "Experto en CRM", icon: "🌟", date: "22/05/2023" },
    { id: 3, title: "Maestro de Ventas", icon: "💼", date: "10/06/2023" },
  ];

  // Mock data for leaderboard
  const leaderboard = [
    {
      id: 1,
      name: "Ana García",
      points: 1250,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    },
    {
      id: 2,
      name: "Carlos López",
      points: 980,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    },
    { id: 3, name: userName, points: 820, avatar: userAvatar },
    {
      id: 4,
      name: "Elena Martínez",
      points: 750,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    },
    {
      id: 5,
      name: "David Sánchez",
      points: 680,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  ];

  // Mock data for resources (technical partners only)
  const resources = [
    {
      id: 1,
      title: "Manual Técnico AGV Serie X",
      type: "PDF",
      size: "4.2 MB",
      date: "10/01/2023",
    },
    {
      id: 2,
      title: "Esquemas Eléctricos AMR-200",
      type: "PDF",
      size: "2.8 MB",
      date: "15/02/2023",
    },
    {
      id: 3,
      title: "Video Tutorial: Calibración de Sensores",
      type: "MP4",
      size: "156 MB",
      date: "05/03/2023",
    },
    {
      id: 4,
      title: "Lista de Chequeo Mantenimiento Preventivo",
      type: "PDF",
      size: "1.5 MB",
      date: "20/03/2023",
    },
    {
      id: 5,
      title: "Guía de Resolución de Errores Comunes",
      type: "PDF",
      size: "3.7 MB",
      date: "12/04/2023",
    },
  ];

  // Mock data for admin content management
  const adminContent = [
    {
      id: 1,
      title: "Formación Técnica en AGV y AMR",
      type: "Course",
      status: "Published",
      users: 45,
      completion: 68,
    },
    {
      id: 2,
      title: "Formación en CRM",
      type: "Course",
      status: "Published",
      users: 38,
      completion: 72,
    },
    {
      id: 3,
      title: "Preparación de Ofertas Comerciales",
      type: "Course",
      status: "Draft",
      users: 0,
      completion: 0,
    },
    {
      id: 4,
      title: "Manual Técnico AGV Serie X",
      type: "Resource",
      status: "Published",
      users: 23,
      completion: 89,
    },
    {
      id: 5,
      title: "Video Tutorial: Calibración de Sensores",
      type: "Resource",
      status: "Published",
      users: 19,
      completion: 45,
    },
  ];

  // Determine which courses to display based on user type
  const courses =
    userType === "commercial" ? commercialCourses : technicalCourses;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border p-4 flex flex-col">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold">Training Platform</h1>
        </div>

        <div className="space-y-1">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            {t("dashboard.overview")}
          </Button>
          <Button
            variant={activeTab === "courses" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("courses")}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            {t("dashboard.courses")}
          </Button>
          <Button
            variant={activeTab === "achievements" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("achievements")}
          >
            <Award className="mr-2 h-4 w-4" />
            {t("dashboard.achievements")}
          </Button>
          {userType === "technical" && (
            <Button
              variant={activeTab === "resources" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("resources")}
            >
              <FileText className="mr-2 h-4 w-4" />
              {t("dashboard.resources")}
            </Button>
          )}
          {userType === "admin" && (
            <Button
              variant={activeTab === "management" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("management")}
            >
              <Settings className="mr-2 h-4 w-4" />
              {t("dashboard.management")}
            </Button>
          )}
        </div>

        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            {t("dashboard.settings")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive"
          >
            <LogOut className="mr-2 h-4 w-4" />
            {t("dashboard.logout")}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-background border-b border-border p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.history.back()}
              >
                <ArrowRight className="h-4 w-4 rotate-180 mr-2" />
                {t("dashboard.back")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = "/")}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                {t("dashboard.home")}
              </Button>
            </div>
            <h1 className="text-2xl font-bold">
              {activeTab === "overview" && t("dashboard.overview.title")}
              {activeTab === "courses" && t("dashboard.courses.title")}
              {activeTab === "achievements" &&
                t("dashboard.achievements.title")}
              {activeTab === "resources" && t("dashboard.resources.title")}
              {activeTab === "management" && t("dashboard.management.title")}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">{userName}</span>
              <Avatar>
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback>
                  {userName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>{t("dashboard.courseProgress")}</CardTitle>
                    <CardDescription>
                      {t("dashboard.courseProgress.desc")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {userType === "commercial" ? "48%" : "35%"}
                    </div>
                    <Progress
                      value={userType === "commercial" ? 48 : 35}
                      className="mt-2"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>{t("dashboard.completedCourses")}</CardTitle>
                    <CardDescription>
                      {t("dashboard.completedCourses.desc")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {userType === "commercial" ? "1/4" : "0/3"}
                    </div>
                    <Progress
                      value={userType === "commercial" ? 25 : 0}
                      className="mt-2"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>{t("dashboard.achievements")}</CardTitle>
                    <CardDescription>
                      {t("dashboard.achievements.desc")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {achievements.length}
                    </div>
                    <div className="flex mt-2">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className="text-2xl mr-2">
                          {achievement.icon}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                {t("dashboard.recommendedCourses")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.slice(0, 3).map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    progress={course.progress}
                    estimatedTime={course.estimatedTime}
                    thumbnail={course.thumbnail}
                    status={course.status}
                  />
                ))}
              </div>

              {userType !== "admin" && (
                <>
                  <h2 className="text-xl font-semibold mt-8 mb-4">
                    {t("dashboard.leaderboard")}
                  </h2>
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y divide-border">
                        {leaderboard.map((user, index) => (
                          <div
                            key={user.id}
                            className={`flex items-center p-4 ${user.name === userName ? "bg-muted" : ""}`}
                          >
                            <div className="flex-shrink-0 mr-4 text-lg font-bold w-6 text-center">
                              {index + 1}
                            </div>
                            <Avatar className="mr-4">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>
                                {user.name.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {user.name === userName
                                  ? t("dashboard.leaderboard.you")
                                  : t("dashboard.leaderboard.teamMember")}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Award className="h-4 w-4 mr-2 text-yellow-500" />
                              <span className="font-semibold">
                                {user.points}{" "}
                                {t("dashboard.leaderboard.points")}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === "courses" && (
            <div className="space-y-6">
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">
                    {t("dashboard.allCourses")}
                  </TabsTrigger>
                  <TabsTrigger value="in-progress">
                    {t("dashboard.inProgress")}
                  </TabsTrigger>
                  <TabsTrigger value="completed">
                    {t("dashboard.completed")}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <CourseCard
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        progress={course.progress}
                        estimatedTime={course.estimatedTime}
                        thumbnail={course.thumbnail}
                        status={course.status}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="in-progress" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses
                      .filter((course) => course.status === "in-progress")
                      .map((course) => (
                        <CourseCard
                          key={course.id}
                          title={course.title}
                          description={course.description}
                          progress={course.progress}
                          estimatedTime={course.estimatedTime}
                          thumbnail={course.thumbnail}
                          status={course.status}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses
                      .filter((course) => course.status === "completed")
                      .map((course) => (
                        <CourseCard
                          key={course.id}
                          title={course.title}
                          description={course.description}
                          progress={course.progress}
                          estimatedTime={course.estimatedTime}
                          thumbnail={course.thumbnail}
                          status={course.status}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <Card key={achievement.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">
                          {achievement.title}
                        </CardTitle>
                        <div className="text-3xl">{achievement.icon}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {t("dashboard.earnedOn")} {achievement.date}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        {t("dashboard.viewCertificate")}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Resources Tab (Technical Partners Only) */}
          {activeTab === "resources" && userType === "technical" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    {t("dashboard.technicalResources")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("dashboard.technicalResources.desc")}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">{t("dashboard.filter")}</Button>
                  <Button>{t("dashboard.search")}</Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-12 p-4 font-medium text-muted-foreground">
                      <div className="col-span-6">
                        {t("dashboard.resource.name")}
                      </div>
                      <div className="col-span-2">
                        {t("dashboard.resource.type")}
                      </div>
                      <div className="col-span-2">
                        {t("dashboard.resource.size")}
                      </div>
                      <div className="col-span-2">
                        {t("dashboard.resource.date")}
                      </div>
                    </div>

                    {resources.map((resource) => (
                      <div
                        key={resource.id}
                        className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors"
                      >
                        <div className="col-span-6 font-medium">
                          {resource.title}
                        </div>
                        <div className="col-span-2">
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <div className="col-span-2 text-muted-foreground">
                          {resource.size}
                        </div>
                        <div className="col-span-2 text-muted-foreground">
                          {resource.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Content Management Tab (Admin Only) */}
          {activeTab === "management" && userType === "admin" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    {t("dashboard.contentManagement")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("dashboard.contentManagement.desc")}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">{t("dashboard.filter")}</Button>
                  <Button>{t("dashboard.addNewContent")}</Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-12 p-4 font-medium text-muted-foreground">
                      <div className="col-span-4">
                        {t("dashboard.content.title")}
                      </div>
                      <div className="col-span-2">
                        {t("dashboard.content.type")}
                      </div>
                      <div className="col-span-2">
                        {t("dashboard.content.status")}
                      </div>
                      <div className="col-span-2">
                        {t("dashboard.content.users")}
                      </div>
                      <div className="col-span-2">
                        {t("dashboard.content.completion")}
                      </div>
                    </div>

                    {adminContent.map((content) => (
                      <div
                        key={content.id}
                        className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors"
                      >
                        <div className="col-span-4 font-medium">
                          {content.title}
                        </div>
                        <div className="col-span-2">
                          <Badge variant="outline">{content.type}</Badge>
                        </div>
                        <div className="col-span-2">
                          <Badge
                            variant={
                              content.status === "Published"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {content.status}
                          </Badge>
                        </div>
                        <div className="col-span-2 text-muted-foreground">
                          {content.users}
                        </div>
                        <div className="col-span-2">
                          <div className="flex items-center">
                            <Progress
                              value={content.completion}
                              className="h-2 mr-2"
                            />
                            <span className="text-sm">
                              {content.completion}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
