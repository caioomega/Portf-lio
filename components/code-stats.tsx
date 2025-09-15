"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, GitBranch, Coffee, Clock } from "lucide-react"

export default function CodeStats() {
  const stats = [
    { label: "Linhas de código", value: "2,847", icon: Code, color: "emerald" },
    { label: "Commits", value: "156", icon: GitBranch, color: "purple" },
    { label: "Projetos", value: "12", icon: Coffee, color: "blue" },
    { label: "Horas codando", value: "340+", icon: Clock, color: "pink" },
  ]

  const languages = [
    { name: "Python", percentage: 65, color: "bg-yellow-500" },
    { name: "HTML/CSS", percentage: 45, color: "bg-orange-500" },
    { name: "PHP", percentage: 35, color: "bg-purple-500" },
    { name: "JavaScript", percentage: 25, color: "bg-blue-500" },
  ]

  return (
    <div className="space-y-6 w-full">
      {/* Stats Cards - Mobile Optimized Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 group rounded-xl w-full"
          >
            <CardContent className="p-3 sm:p-4 text-center w-full">
              <stat.icon
                className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-${stat.color}-400 group-hover:animate-bounce transition-all duration-300`}
              />
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400 leading-tight px-1">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Language Progress - Mobile Optimized */}
      <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl rounded-xl w-full">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            Linguagens de Programação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 sm:p-6 pt-0 w-full">
          {languages.map((lang, index) => (
            <div key={index} className="space-y-2 w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm text-gray-300 font-medium">{lang.name}</span>
                <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                  {lang.percentage}%
                </Badge>
              </div>
              <div className="w-full">
                <Progress value={lang.percentage} className="h-2 w-full" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
