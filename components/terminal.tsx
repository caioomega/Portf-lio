"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Terminal() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const commands = [
    "whoami",
    "ls -la skills/",
    "cat about.txt",
    "python --version",
    "git status",
    "npm run dev",
    "figma --projects",
    "php -v",
  ]

  const responses: { [key: string]: string } = {
    whoami: "caio-hilario-mega",
    "ls -la skills/": "python/  php/  figma/  ui-ux/  git/  iot/  frontend/",
    "cat about.txt": "Desenvolvedor em formação | 16 anos | SENAI Student",
    "python --version": "Python 3.11.0 - Curso completo ✓",
    "git status": "On branch main - Learning in progress...",
    "npm run dev": "Starting development server... 🚀",
    "figma --projects": "Alto padrão ✓ | Médio padrão ✓ | Baixo padrão ✓",
    "php -v": "PHP 8.2 - GET/POST, Login Systems, Calculations ✓",
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        const randomCommand = commands[Math.floor(Math.random() * commands.length)]
        typeCommand(randomCommand)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isTyping])

  const typeCommand = async (command: string) => {
    setIsTyping(true)
    setCurrentCommand("")

    // Type command
    for (let i = 0; i <= command.length; i++) {
      setCurrentCommand(command.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    await new Promise((resolve) => setTimeout(resolve, 500))

    // Add to history
    const response = responses[command] || "Command not found"
    setCommandHistory((prev) => [...prev.slice(-4), `$ ${command}`, response])
    setCurrentCommand("")
    setIsTyping(false)
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-xl rounded-xl w-full">
      <CardContent className="p-4 font-mono text-sm w-full">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs">caio@portfolio:~</span>
        </div>
        <div className="space-y-1 min-h-[120px] w-full overflow-hidden">
          {commandHistory.map((line, index) => (
            <div
              key={index}
              className={`${
                line.startsWith("$") ? "text-emerald-400" : "text-gray-300"
              } animate-fade-in-up text-xs sm:text-sm break-words`}
            >
              {line}
            </div>
          ))}
          <div className="text-emerald-400 flex items-center text-xs sm:text-sm">
            $ {currentCommand}
            <span className="ml-1 animate-pulse">|</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
