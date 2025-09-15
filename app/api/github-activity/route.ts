import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Try to fetch from GitHub API without authentication first
    const response = await fetch("https://api.github.com/users/caioomega/events/public?per_page=10", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-Website",
      },
      cache: "no-store", // Don't cache to get fresh data
    })

    // If we get rate limited or unauthorized, return fallback data
    if (!response.ok) {
      console.log(`GitHub API responded with status: ${response.status}`)
      return getFallbackResponse()
    }

    const events = await response.json()

    // Process and filter relevant events
    const processedActivities = events
      .filter((event: any) =>
        ["PushEvent", "CreateEvent", "WatchEvent", "ForkEvent", "IssuesEvent"].includes(event.type),
      )
      .slice(0, 5)
      .map((event: any) => {
        const timeAgo = getTimeAgo(new Date(event.created_at))

        switch (event.type) {
          case "PushEvent":
            const commitMessage = event.payload.commits?.[0]?.message || "Pushed commits"
            return {
              type: "push",
              repo: event.repo.name,
              repoUrl: `https://github.com/${event.repo.name}`,
              message: commitMessage.length > 60 ? commitMessage.substring(0, 60) + "..." : commitMessage,
              commitUrl: `https://github.com/${event.repo.name}/commits/${event.payload.head}`,
              time: timeAgo,
              icon: "GitCommit",
              color: "emerald",
            }
          case "CreateEvent":
            return {
              type: "create",
              repo: event.repo.name,
              repoUrl: `https://github.com/${event.repo.name}`,
              message: `Created ${event.payload.ref_type || "repository"}${event.payload.ref ? ` "${event.payload.ref}"` : ""}`,
              time: timeAgo,
              icon: "GitBranch",
              color: "blue",
            }
          case "WatchEvent":
            return {
              type: "star",
              repo: event.repo.name,
              repoUrl: `https://github.com/${event.repo.name}`,
              message: "Starred repository",
              time: timeAgo,
              icon: "Star",
              color: "yellow",
            }
          case "ForkEvent":
            return {
              type: "fork",
              repo: event.repo.name,
              repoUrl: `https://github.com/${event.repo.name}`,
              message: "Forked repository",
              time: timeAgo,
              icon: "GitBranch",
              color: "purple",
            }
          case "IssuesEvent":
            return {
              type: "issue",
              repo: event.repo.name,
              repoUrl: `https://github.com/${event.repo.name}`,
              message: `${event.payload.action} issue: ${event.payload.issue?.title || "Issue"}`,
              time: timeAgo,
              icon: "GitCommit",
              color: "orange",
            }
          default:
            return null
        }
      })
      .filter(Boolean)

    return NextResponse.json({
      activities: processedActivities,
      success: true,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error fetching GitHub activity:", error)
    return getFallbackResponse()
  }
}

function getFallbackResponse() {
  const fallbackActivities = [
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
    {
      type: "create",
      repo: "new-learning-project",
      repoUrl: "https://github.com/caioomega/new-learning-project",
      message: "Created repository",
      time: "3 dias atrás",
      icon: "GitBranch",
      color: "purple",
    },
    {
      type: "push",
      repo: "senai-exercises",
      repoUrl: "https://github.com/caioomega/senai-exercises",
      message: "Completed IoT sensor integration exercise",
      time: "5 dias atrás",
      icon: "GitCommit",
      color: "emerald",
    },
  ]

  return NextResponse.json({
    activities: fallbackActivities,
    fallback: true,
    error: "Using example data - GitHub API unavailable",
    timestamp: new Date().toISOString(),
  })
}

function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return "agora mesmo"
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutos atrás`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} horas atrás`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} dias atrás`
  return `${Math.floor(diffInSeconds / 2592000)} meses atrás`
}
