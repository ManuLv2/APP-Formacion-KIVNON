import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, PlayCircle, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  progress?: number;
  estimatedTime?: string;
  category?: string;
  status?: "not-started" | "in-progress" | "completed";
  onClick?: () => void;
}

const CourseCard = ({
  id = "course-1",
  title = "Introduction to AGV Technology",
  description = "Learn the fundamentals of Automated Guided Vehicles and their applications in modern logistics.",
  thumbnail = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  progress = 0,
  estimatedTime = "2h 30m",
  category = "Technical",
  status = "not-started",
  onClick = () => console.log("Course card clicked"),
}: CourseCardProps) => {
  const { t } = useTranslation();
  return (
    <Card className="w-[350px] h-[280px] overflow-hidden flex flex-col bg-white">
      <div className="relative h-32 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge
          className="absolute top-2 right-2"
          variant={category === "Technical" ? "default" : "secondary"}
        >
          {category}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Clock className="h-4 w-4 mr-1" />
          <span>{estimatedTime}</span>
        </div>

        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1">
            <span>{t("courseCard.progress")}</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onClick}
          className="w-full"
          variant={status === "completed" ? "outline" : "default"}
        >
          {status === "not-started" && (
            <>
              <PlayCircle className="mr-2 h-4 w-4" />
              {t("courseCard.startCourse")}
            </>
          )}
          {status === "in-progress" && (
            <>
              <PlayCircle className="mr-2 h-4 w-4" />
              {t("courseCard.continue")}
            </>
          )}
          {status === "completed" && (
            <>
              <RotateCcw className="mr-2 h-4 w-4" />
              {t("courseCard.review")}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
