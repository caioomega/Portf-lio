"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Database,
  Cpu,
  GitBranch,
  FileText,
  GraduationCap,
  User,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Shield,
  Brain,
  FileSpreadsheet,
  Leaf,
} from "lucide-react"
import { useEffect, useState } from "react"
import PythonIcon from "@/components/icons/python-icon"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const fullText = "Desenvolvedor em Formação"

  useEffect(() => {
    setIsVisible(true)

    // Typing animation
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-emerald-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
        <div className="stars"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Caio Hilário
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {["Sobre", "Habilidades", "Educação", "Projetos", "Contato"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-emerald-400 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                {["Sobre", "Habilidades", "Educação", "Projetos", "Contato"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-emerald-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/50"
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin-slow hover:animate-bounce transition-all duration-300 shadow-2xl shadow-emerald-500/25">
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-pulse" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Caio Hilário Mega
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 h-6 sm:h-8">
                <span className="border-r-2 border-emerald-400 animate-blink">{typedText}</span>
              </div>
              <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4">
                Estudante de 16 anos apaixonado por tecnologia, cursando técnico no SENAI e sempre em busca de novos
                conhecimentos em desenvolvimento de software.
              </p>
              <div
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up px-4"
                style={{ animationDelay: "0.5s" }}
              >
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/25 w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" />
                  Entre em Contato
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent w-full sm:w-auto"
                  onClick={() => window.open("https://github.com/caioomega", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-12 sm:py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
            Sobre Mim
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-xl hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
              <CardContent className="p-6 sm:p-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 animate-fade-in-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-4">Quem sou eu?</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Sou um jovem desenvolvedor de 16 anos, atualmente cursando o 2º ano do ensino médio e fazendo
                      curso técnico de Análise e Desenvolvimento de Sistemas no SENAI.
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Minha jornada na programação começou com Python, onde desenvolvi uma base sólida em lógica de
                      programação. Agora estou expandindo meus conhecimentos para o frontend e aprendendo sobre
                      versionamento com Git e GitHub.
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Tenho interesse especial em IoT e levantamento de requisitos, sempre buscando entender como a
                      tecnologia pode resolver problemas reais.
                    </p>
                  </div>
                  <div className="space-y-4 animate-fade-in-right">
                    {[
                      { icon: GraduationCap, text: "2º Ano - Ensino Médio" },
                      { icon: Briefcase, text: "Técnico ADS - SENAI" },
                      { icon: MapPin, text: "Brasil" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:translate-x-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <item.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-12 sm:py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up">
            Habilidades & Tecnologias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Code,
                title: "Python",
                desc: "Linguagem Principal",
                detail: "Curso completo em Python com foco em lógica de programação e desenvolvimento de aplicações.",
                color: "emerald",
              },
              {
                icon: Database,
                title: "Frontend",
                desc: "Em Aprendizado",
                detail: "Iniciando estudos em desenvolvimento frontend com HTML, CSS e JavaScript.",
                color: "blue",
              },
              {
                icon: GitBranch,
                title: "Git & GitHub",
                desc: "Versionamento",
                detail: "Aprendendo conceitos de versionamento e colaboração usando Git e GitHub.",
                color: "purple",
              },
              {
                icon: Cpu,
                title: "IoT",
                desc: "Internet das Coisas",
                detail: "Conhecimentos em Internet das Coisas e desenvolvimento de soluções conectadas.",
                color: "pink",
              },
            ].map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-xl hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center p-4 sm:p-6">
                  <skill.icon
                    className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 text-${skill.color}-400 group-hover:animate-bounce transition-all duration-300`}
                  />
                  <CardTitle className="text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {skill.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">{skill.desc}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{skill.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-white mb-6 sm:mb-8">
              Outras Competências
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "Levantamento de Requisitos",
                "Análise de Sistemas",
                "Lógica de Programação",
                "Resolução de Problemas",
                "Trabalho em Equipe",
              ].map((skill, index) => (
                <Badge
                  key={index}
                  className="text-xs sm:text-sm py-2 px-3 sm:px-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-emerald-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill === "Levantamento de Requisitos" && (
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  )}
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educação Section */}
      <section id="educacao" className="py-12 sm:py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
            Educação & Cursos
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* Formação Principal */}
            {[
              {
                title: "Análise e Desenvolvimento de Sistemas",
                institution: "SENAI - Curso Técnico",
                status: "Em Andamento",
                statusColor: "emerald",
                description:
                  "Curso técnico focado em desenvolvimento de software, análise de sistemas, programação e tecnologias modernas.",
                icon: Briefcase,
              },
              {
                title: "Ensino Médio",
                institution: "2º Ano",
                status: "Em Andamento",
                statusColor: "emerald",
                description:
                  "Cursando o 2º ano do ensino médio, mantendo foco nos estudos acadêmicos junto com a formação técnica.",
                icon: GraduationCap,
              },
              {
                title: "Curso de Python",
                institution: "Programação",
                status: "Concluído",
                statusColor: "green",
                description:
                  "Curso completo de Python abordando desde conceitos básicos até desenvolvimento de aplicações mais complexas.",
                icon: Code,
              },
              {
                title: "Curso de Frontend",
                institution: "Desenvolvimento Web",
                status: "Iniciando",
                statusColor: "blue",
                description:
                  "Iniciando estudos em desenvolvimento frontend, aprendendo HTML, CSS, JavaScript e frameworks modernos.",
                icon: Database,
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-xl hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <edu.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-base sm:text-lg md:text-xl text-white hover:text-emerald-400 transition-colors duration-300">
                          {edu.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base md:text-lg text-gray-400">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge
                      className={`bg-${edu.statusColor}-900/50 text-${edu.statusColor}-400 border-${edu.statusColor}-500 animate-pulse text-xs sm:text-sm flex-shrink-0`}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Cursos EaD */}
            <div className="mt-8 sm:mt-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-white mb-6 sm:mb-8">
                Cursos EaD Concluídos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: "Lógica de Programação",
                    icon: Code,
                    color: "emerald",
                  },
                  {
                    title: "Ética na Inteligência Artificial",
                    icon: Brain,
                    color: "purple",
                  },
                  {
                    title: "Fundamentos da Inteligência Artificial",
                    icon: Brain,
                    color: "blue",
                  },
                  {
                    title: "Excel Básico",
                    icon: FileSpreadsheet,
                    color: "green",
                  },
                  {
                    title: "Segurança no Trabalho",
                    icon: Shield,
                    color: "yellow",
                  },
                  {
                    title: "Segurança Cibernética",
                    icon: Shield,
                    color: "red",
                  },
                  {
                    title: "Desvendando a Descarbonização",
                    icon: Leaf,
                    color: "emerald",
                  },
                ].map((course, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800 backdrop-blur-xl hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 hover:shadow-lg group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 sm:p-6 text-center">
                      <course.icon
                        className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-${course.color}-400 group-hover:animate-bounce transition-all duration-300`}
                      />
                      <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {course.title}
                      </h4>
                      <Badge className="mt-2 bg-green-900/50 text-green-400 border-green-500 text-xs">Concluído</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-12 sm:py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
            Projetos & Experiências
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: PythonIcon,
                title: "Atividades Python - SENAI",
                desc: "Repositório GitHub",
                detail:
                  "Repositório completo com todas as atividades desenvolvidas durante o curso de Python no SENAI 2025, incluindo exercícios, projetos e soluções práticas.",
                badges: ["Python", "SENAI 2025", "Exercícios"],
                color: "yellow",
              },
              {
                icon: Cpu,
                title: "Projetos IoT",
                desc: "Internet das Coisas",
                detail:
                  "Experiências práticas com IoT, desenvolvendo soluções conectadas e explorando sensores e dispositivos.",
                badges: ["IoT", "Sensores"],
                color: "blue",
              },
              {
                icon: FileText,
                title: "Análise de Requisitos",
                desc: "Documentação de Sistemas",
                detail: "Experiência em levantamento e análise de requisitos para desenvolvimento de sistemas.",
                badges: ["Requisitos", "Documentação"],
                color: "purple",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-xl hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors duration-300">
                    <project.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 text-${project.color}-400 group-hover:animate-bounce flex-shrink-0`}
                    />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">{project.desc}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.detail}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  {index === 0 && ( // Only show for Python project
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold transform hover:scale-105 transition-all duration-300 text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open("https://github.com/caioomega/Atividades-Senai-2025-python", "_blank")
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver mais
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-12 sm:py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
            Entre em Contato
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up px-4"
              style={{ animationDelay: "0.2s" }}
            >
              Estou sempre aberto a novas oportunidades de aprendizado e colaboração. Vamos conversar sobre tecnologia e
              projetos!
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up px-4"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 bg-transparent w-full sm:w-auto"
                onClick={() => window.open("https://github.com/caioomega", "_blank")}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 bg-transparent w-full sm:w-auto"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-gray-900/50 backdrop-blur-xl border-t border-gray-800 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400 animate-fade-in-up">
            © 2025 Caio Hilário Mega. Desenvolvedor em formação apaixonado por tecnologia.
          </p>
        </div>
      </footer>
    </div>
  )
}
