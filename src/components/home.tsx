import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  BookOpen,
  Users,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import LanguageSwitcher from "./LanguageSwitcher";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TrainingHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              {t("header.home")}
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary"
            >
              {t("header.about")}
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-primary"
            >
              {t("header.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t("header.signIn")}
            </Button>
            <Button size="sm">{t("header.register")}</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2"
                onClick={() =>
                  document
                    .getElementById("choose-path")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.getStarted")} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                {t("hero.learnMore")}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden rounded-xl bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
              alt="Training Platform"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* User Type Selection */}
      <section id="choose-path" className="container py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t("choosePath.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("choosePath.description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Commercial Team Card */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                {t("commercial.title")}
              </CardTitle>
              <CardDescription>{t("commercial.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("commercial.item1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("commercial.item2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("commercial.item3")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("commercial.item4")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => (window.location.href = "/dashboard/commercial")}
              >
                {t("commercial.button")}
              </Button>
            </CardFooter>
          </Card>

          {/* Technical Partner Card */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                {t("technical.title")}
              </CardTitle>
              <CardDescription>{t("technical.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("technical.item1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("technical.item2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("technical.item3")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("technical.item4")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => (window.location.href = "/dashboard/technical")}
              >
                {t("technical.button")}
              </Button>
            </CardFooter>
          </Card>

          {/* Admin Card */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                {t("admin.title")}
              </CardTitle>
              <CardDescription>{t("admin.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("admin.item1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("admin.item2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("admin.item3")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>{t("admin.item4")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => (window.location.href = "/dashboard/admin")}
              >
                {t("admin.button")}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="container py-12 md:py-24 bg-muted/30 rounded-lg">
        <div className="mx-auto max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">{t("account.title")}</h2>
            <p className="text-muted-foreground">{t("account.description")}</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">{t("account.login")}</TabsTrigger>
              <TabsTrigger value="register">
                {t("account.register")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{t("login.title")}</CardTitle>
                  <CardDescription>{t("login.description")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("login.email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">{t("login.password")}</Label>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{t("login.button")}</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="register" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{t("register.title")}</CardTitle>
                  <CardDescription>{t("register.description")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">
                      {t("register.fullName")}
                    </Label>
                    <Input id="register-name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">
                      {t("register.email")}
                    </Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">
                      {t("register.password")}
                    </Label>
                    <Input id="register-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-type">{t("register.userType")}</Label>
                    <select
                      id="user-type"
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="commercial">
                        {t("register.commercial")}
                      </option>
                      <option value="technical">
                        {t("register.technical")}
                      </option>
                      <option value="admin">{t("register.admin")}</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{t("register.button")}</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">TrainingHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("footer.description")}
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("header.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("header.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("header.contact")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">
                {t("footer.resources")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("footer.blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("footer.documentation")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("footer.support")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">
                {t("footer.legal")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("footer.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("footer.cookies")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              {t("footer.copyright").replace(
                "{year}",
                new Date().getFullYear().toString(),
              )}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
