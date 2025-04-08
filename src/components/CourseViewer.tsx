import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  MessageSquare,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CourseViewerProps {
  courseId?: string;
  title?: string;
  description?: string;
  modules?: {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
    content: {
      type: "video" | "document" | "quiz";
      title: string;
      source?: string;
      questions?: {
        id: string;
        question: string;
        options: string[];
        correctAnswer: number;
      }[];
    }[];
  }[];
  progress?: number;
  onBack?: () => void;
}

const CourseViewer = ({
  courseId = "1",
  title = "Formación Técnica en AGV y AMR",
  description = "Curso completo sobre los fundamentos técnicos de los vehículos de guiado automático (AGV) y robots móviles autónomos (AMR).",
  modules = [
    {
      id: "1",
      title: "Introducción a los AGV",
      duration: "45 min",
      completed: true,
      content: [
        {
          type: "video",
          title: "Fundamentos de los AGV",
          source: "https://example.com/video1.mp4",
        },
        {
          type: "document",
          title: "Especificaciones técnicas",
          source: "https://example.com/doc1.pdf",
        },
      ],
    },
    {
      id: "2",
      title: "Sistemas de navegación",
      duration: "60 min",
      completed: false,
      content: [
        {
          type: "video",
          title: "Tecnologías de navegación",
          source: "https://example.com/video2.mp4",
        },
        {
          type: "quiz",
          title: "Evaluación de conocimientos",
          questions: [
            {
              id: "q1",
              question:
                "¿Cuál es la principal ventaja de la navegación por láser?",
              options: [
                "Menor costo de implementación",
                "Mayor precisión en entornos dinámicos",
                "Facilidad de instalación",
                "Menor consumo de energía",
              ],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
    {
      id: "3",
      title: "Integración de sistemas",
      duration: "55 min",
      completed: false,
      content: [
        {
          type: "video",
          title: "Protocolos de comunicación",
          source: "https://example.com/video3.mp4",
        },
      ],
    },
  ],
  progress = 35,
  onBack = () => {},
}: CourseViewerProps) => {
  const { t } = useTranslation();
  const [activeModule, setActiveModule] = useState(modules[0]);
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [showResults, setShowResults] = useState(false);

  const activeContent = activeModule.content[activeContentIndex];

  const handleNextContent = () => {
    if (activeContentIndex < activeModule.content.length - 1) {
      setActiveContentIndex(activeContentIndex + 1);
    } else {
      const currentModuleIndex = modules.findIndex(
        (m) => m.id === activeModule.id,
      );
      if (currentModuleIndex < modules.length - 1) {
        setActiveModule(modules[currentModuleIndex + 1]);
        setActiveContentIndex(0);
      }
    }
  };

  const handlePrevContent = () => {
    if (activeContentIndex > 0) {
      setActiveContentIndex(activeContentIndex - 1);
    } else {
      const currentModuleIndex = modules.findIndex(
        (m) => m.id === activeModule.id,
      );
      if (currentModuleIndex > 0) {
        setActiveModule(modules[currentModuleIndex - 1]);
        setActiveContentIndex(
          modules[currentModuleIndex - 1].content.length - 1,
        );
      }
    }
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    });
  };

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const renderContent = () => {
    switch (activeContent.type) {
      case "video":
        return (
          <div className="flex flex-col items-center space-y-4 bg-black rounded-lg">
            <div className="relative w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 px-2 py-1 rounded text-sm">
                {activeModule.title} - {activeContent.title}
              </div>
            </div>
            <div className="w-full px-4 py-2 bg-gray-800 text-white">
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-white">
                    <ChevronLeft className="mr-1 h-4 w-4" /> 10s
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white">
                    10s <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <Button variant="ghost" size="sm" className="text-white">
                    <Download className="mr-1 h-4 w-4" />{" "}
                    {t("courseViewer.download")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      case "document":
        return (
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-blue-600" />
                  <h3 className="text-lg font-medium">{activeContent.title}</h3>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-1 h-4 w-4" />{" "}
                  {t("courseViewer.download")} PDF
                </Button>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200 min-h-[400px] flex items-center justify-center">
                <p className="text-gray-500">
                  {t("courseViewer.previewNotAvailable")}
                </p>
              </div>
            </div>
          </div>
        );
      case "quiz":
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              {activeContent.title}
            </h3>
            {activeContent.questions?.map((question, qIndex) => (
              <div key={question.id} className="mb-6 last:mb-0">
                <p className="font-medium mb-3">
                  {qIndex + 1}. {question.question}
                </p>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <div
                      key={oIndex}
                      className={`p-3 rounded-md border cursor-pointer transition-colors ${
                        selectedAnswers[question.id] === oIndex
                          ? "border-primary bg-primary/10"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      } ${
                        showResults && oIndex === question.correctAnswer
                          ? "border-green-500 bg-green-50"
                          : ""
                      } ${
                        showResults &&
                        selectedAnswers[question.id] === oIndex &&
                        oIndex !== question.correctAnswer
                          ? "border-red-500 bg-red-50"
                          : ""
                      }`}
                      onClick={() =>
                        !showResults && handleAnswerSelect(question.id, oIndex)
                      }
                    >
                      <div className="flex items-start">
                        <div
                          className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${
                            selectedAnswers[question.id] === oIndex
                              ? "border-primary bg-primary text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedAnswers[question.id] === oIndex && (
                            <CheckCircle className="h-4 w-4" />
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {showResults && (
                  <div className="mt-3 text-sm">
                    {selectedAnswers[question.id] === question.correctAnswer ? (
                      <p className="text-green-600">
                        {t("courseViewer.correct")}
                      </p>
                    ) : (
                      <p className="text-red-600">
                        {t("courseViewer.incorrect")}{" "}
                        {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
            {!showResults && (
              <div className="mt-6">
                <Button onClick={handleQuizSubmit}>
                  {t("courseViewer.submitAnswers")}
                </Button>
              </div>
            )}
            {showResults && (
              <div className="mt-6">
                <Button onClick={handleNextContent}>
                  {t("courseViewer.continue")}
                </Button>
              </div>
            )}
          </div>
        );
      default:
        return <div>Contenido no disponible</div>;
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />{" "}
            {t("courseViewer.backToDashboard")}
          </Button>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              {t("courseViewer.courseProgress")}: {progress}%
            </div>
            <Progress value={progress} className="w-32" />
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 border-r bg-muted/20 overflow-hidden flex flex-col">
          <div className="p-4 font-medium">Contenido del curso</div>
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
              {modules.map((module, index) => (
                <Card
                  key={module.id}
                  className={`overflow-hidden ${activeModule.id === module.id ? "border-primary" : ""}`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`p-3 cursor-pointer ${activeModule.id === module.id ? "bg-primary/10" : ""}`}
                      onClick={() => {
                        setActiveModule(module);
                        setActiveContentIndex(0);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{module.title}</div>
                          <div className="text-xs text-muted-foreground flex items-center mt-1">
                            <BookOpen className="h-3 w-3 mr-1" />{" "}
                            {module.duration}
                          </div>
                        </div>
                        {module.completed && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    </div>
                    {activeModule.id === module.id && (
                      <div className="bg-background border-t">
                        {module.content.map((content, cIndex) => (
                          <div
                            key={`${module.id}-${cIndex}`}
                            className={`p-2 pl-6 text-sm border-b last:border-b-0 cursor-pointer hover:bg-muted/50 ${activeContentIndex === cIndex ? "bg-muted/50 font-medium" : ""}`}
                            onClick={() => setActiveContentIndex(cIndex)}
                          >
                            <div className="flex items-center">
                              {content.type === "video" && (
                                <PlayCircle className="h-3 w-3 mr-2" />
                              )}
                              {content.type === "document" && (
                                <FileText className="h-3 w-3 mr-2" />
                              )}
                              {content.type === "quiz" && (
                                <MessageSquare className="h-3 w-3 mr-2" />
                              )}
                              {content.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-auto">
          <Tabs defaultValue="content" className="h-full flex flex-col">
            <div className="border-b px-4">
              <TabsList>
                <TabsTrigger value="content">
                  {t("courseViewer.content")}
                </TabsTrigger>
                <TabsTrigger value="notes">
                  {t("courseViewer.myNotes")}
                </TabsTrigger>
                <TabsTrigger value="resources">
                  {t("courseViewer.resources")}
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="content" className="flex-1 p-6 overflow-auto">
              <div className="max-w-4xl mx-auto">
                {renderContent()}

                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevContent}
                    disabled={
                      activeContentIndex === 0 &&
                      modules.findIndex((m) => m.id === activeModule.id) === 0
                    }
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />{" "}
                    {t("courseViewer.previous")}
                  </Button>

                  {!(activeContent.type === "quiz" && !showResults) && (
                    <Button
                      onClick={handleNextContent}
                      disabled={
                        activeContentIndex ===
                          activeModule.content.length - 1 &&
                        modules.findIndex((m) => m.id === activeModule.id) ===
                          modules.length - 1
                      }
                    >
                      {t("courseViewer.next")}{" "}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="notes" className="flex-1 p-6 overflow-auto">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-lg font-medium mb-4">
                  {t("courseViewer.myNotesFor")}: {activeModule.title}
                </h3>
                <Textarea
                  placeholder={t("courseViewer.writeNotesHere")}
                  className="min-h-[300px]"
                />
                <div className="mt-4 flex justify-end">
                  <Button>{t("courseViewer.saveNotes")}</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="flex-1 p-6 overflow-auto">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-lg font-medium mb-4">
                  {t("courseViewer.additionalResources")}
                </h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <div className="font-medium">
                              Manual técnico completo
                            </div>
                            <div className="text-xs text-muted-foreground">
                              PDF - 4.2 MB
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-1 h-4 w-4" />{" "}
                          {t("courseViewer.download")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <div className="font-medium">
                              Guía de resolución de problemas
                            </div>
                            <div className="text-xs text-muted-foreground">
                              PDF - 2.8 MB
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-1 h-4 w-4" />{" "}
                          {t("courseViewer.download")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <div className="font-medium">
                              Esquemas eléctricos
                            </div>
                            <div className="text-xs text-muted-foreground">
                              ZIP - 8.5 MB
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-1 h-4 w-4" />{" "}
                          {t("courseViewer.download")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CourseViewer;
