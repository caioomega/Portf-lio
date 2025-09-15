"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Star, GitCommit, ExternalLink, Calendar, RefreshCw, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface GitHubActivity {
  type: string
  repo: string
  repoUrl: string
  message: string
  commitUrl?: string
  time: string
  icon: string
  color: string
}

interface GitHubResponse {
  activities: GitHubActivity[]
  fallback?: boolean
  error?: string
  success?: boolean
  timestamp?: string
}

export default function GitHubActivity() {
  const [activities, setActivities] = useState<GitHubActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFallback, setIsFallback] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  const fetchGitHubActivity = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/github-activity", {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: GitHubResponse = await response.json()

      setActivities(data.activities)
      setIsFallback(data.fallback || false)
      setLastUpdated(data.timestamp || null)

      if (data.error) {
        setError(data.error)
      }
    } catch (err) {
      console.error("Error fetching GitHub activity:", err)
      setError("Conexão com GitHub indisponível")

      // Enhanced fallback data
      setActivities([
        {
          type: "push",
          repo: "Atividades-Senai-2025-python",
          repoUrl: "https://github.com/caioomega/Atividades-Senai-2025-python",
          message: "Adicionado exercício de estruturas de dados",
          commitUrl: "https://github.com/caioomega/Atividades-Senai-2025-python",
          time: "2 horas atrás",
          icon: "GitCommit",
          color: "emerald",
        },
        {
          type: "push",
          repo: "portfolio-website",
          repoUrl: "https://github.com/caioomega/portfolio-website",
          message: "Implementado design responsivo",
          time: "1 dia atrás",
          icon: "GitBranch",
          color: "blue",
        },
        {
          type: "star",
          repo: "awesome-python-projects",
          repoUrl: "https://github.com/awesome-python-projects",
          message: "Starred repository",
          time: "2 dias atrás",
          icon: "Star",
          color: "yellow",
        },
      ])
      setIsFallback(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGitHubActivity()
  }, [])

  const handleActivityClick = (activity: GitHubActivity) => {
    const url = activity.commitUrl || activity.repoUrl
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GitCommit":
        return GitCommit
      case "GitBranch":
        return GitBranch
      case "Star":
        return Star
      default:
        return GitCommit
    }
  }

  const handleRefresh = () => {
    fetchGitHubActivity()
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "push":
        return "commit"
      case "create":
        return "create"
      case "star":
        return "star"
      case "fork":
        return "fork"
      case "issue":
        return "issue"
      default:
        return type
    }
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl rounded-xl w-full">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
            <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            <span className="truncate">Atividade Recente no GitHub</span>
            {isFallback && (
              <Badge
                variant="outline"
                className="text-xs text-yellow-400 border-yellow-400 flex items-center gap-1 ml-2"
              >
                <AlertCircle className="w-3 h-3" />
                <span className="hidden sm:inline">Dados de exemplo</span>
              </Badge>
            )}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={loading}
            className="text-gray-400 hover:text-emerald-400 p-2 flex-shrink-0"
            title="Atualizar atividades"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </div>
        {lastUpdated && !isFallback && (
          <p className="text-xs text-gray-500">
            Última atualização: {new Date(lastUpdated).toLocaleTimeString("pt-BR")}
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-3 p-4 sm:p-6 pt-0 w-full">
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30">
                  <div className="w-4 h-4 bg-gray-700 rounded mt-1 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2 mb-1"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {activities.map((activity, index) => {
              const IconComponent = getIcon(activity.icon)
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group hover:scale-[1.02] hover:shadow-lg w-full"
                  onClick={() => handleActivityClick(activity)}
                >
                  <IconComponent
                    className={`w-4 h-4 text-${activity.color}-400 mt-1 flex-shrink-0 group-hover:animate-pulse`}
                  />
                  <div className="flex-1 min-w-0 w-full">
                    <div className="flex items-center gap-2 mb-1 w-full">
                      <span className="text-sm font-medium text-white truncate group-hover:text-emerald-400 transition-colors flex-1">
                        {activity.repo}
                      </span>
                      <Badge variant="outline" className="text-xs flex-shrink-0">
                        {getTypeLabel(activity.type)}
                      </Badge>
                      <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-gray-300 mb-1 group-hover:text-white transition-colors break-words">
                      {activity.message}
                    </p>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        )}

        {activities.length === 0 && !loading && (
          <div className="text-center py-6">
            <GitBranch className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Nenhuma atividade recente encontrada</p>
          </div>
        )}

        <div className="pt-2 border-t border-gray-800/50 w-full">
          <button
            onClick={() => window.open("https://github.com/caioomega", "_blank")}
            className="w-full text-center text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-300 py-2 hover:bg-gray-800/30 rounded-lg flex items-center justify-center gap-2"
          >
            Ver perfil completo no GitHub
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
