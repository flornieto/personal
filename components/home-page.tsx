"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Heart, Sparkles, Palette, ArrowRight, Calendar, Tag, Eye } from "lucide-react"
import type { ProjectData, BlogData, AboutData } from "@/lib/markdown"

interface HomePageProps {
  projects: ProjectData[]
  blogPosts: BlogData[]
  aboutData: AboutData
}

export default function HomePage({ projects, blogPosts, aboutData }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPost, setSelectedPost] = useState<BlogData | null>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [showFullPost, setShowFullPost] = useState(false)
  const [showFullProject, setShowFullProject] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleReadMore = (post: BlogData) => {
    setSelectedPost(post)
    setShowFullPost(true)
  }

  const handleViewProject = (project: ProjectData) => {
    setSelectedProject(project)
    setShowFullProject(true)
  }

  const closeFullPost = () => {
    setShowFullPost(false)
    setSelectedPost(null)
  }

  const closeFullProject = () => {
    setShowFullProject(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-rose-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Florencia
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-rose-600 hover:text-rose-800 transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("trabajos")}
                className="text-rose-600 hover:text-rose-800 transition-colors font-medium"
              >
                Trabajos
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-rose-600 hover:text-rose-800 transition-colors font-medium"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-rose-600 hover:text-rose-800 transition-colors font-medium"
              >
                Sobre Mí
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-20">
        <div
          className={`text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-xl">
              <Palette className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              ¡Hola, soy Florencia!
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-rose-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            {aboutData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("trabajos")}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              Ver mis trabajos
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 font-medium"
            >
              Leer mi blog
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-rose-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="trabajos" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
              Mis Trabajos
            </h2>
            <p className="text-xl text-rose-700 max-w-2xl mx-auto">
              Una colección de mis proyectos más queridos, donde cada pieza cuenta una historia única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleViewProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=400"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-rose-600 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Tag className="w-3 h-3" />
                        <span>{project.category}</span>
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-rose-500 text-white p-2 rounded-full">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-rose-800 group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.date && <span className="text-sm text-rose-500">{project.date}</span>}
                  </div>
                  <p className="text-rose-600 leading-relaxed mb-4">{project.excerpt}</p>
                  {project.materials && project.materials.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.materials.slice(0, 3).map((material, idx) => (
                        <span key={idx} className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                          {material}
                        </span>
                      ))}
                      {project.materials.length > 3 && (
                        <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                          +{project.materials.length - 3} más
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
              Mi Blog
            </h2>
            <p className="text-xl text-rose-700 max-w-2xl mx-auto">
              Reflexiones, procesos creativos y experiencias en mi camino como diseñadora
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 transform hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-rose-500" />
                  <span className="text-rose-500 font-medium">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-rose-800 mb-4 hover:text-rose-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-rose-700 leading-relaxed mb-4">{post.excerpt}</p>
                <button
                  onClick={() => handleReadMore(post)}
                  className="text-rose-500 hover:text-rose-700 font-medium transition-colors flex items-center space-x-1 group"
                >
                  <span>Leer más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Moved to the end */}
      <section id="sobre-mi" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
              {aboutData.title}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div
              className="prose prose-rose max-w-none text-rose-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutData.content }}
            />
          </div>
        </div>
      </section>

      {/* Full Project Modal */}
      {showFullProject && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-rose-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-rose-500" />
                  <span className="text-rose-500 font-medium">{selectedProject.date}</span>
                </div>
                {selectedProject.category && (
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4 text-rose-500" />
                    <span className="text-rose-500 font-medium">{selectedProject.category}</span>
                  </div>
                )}
              </div>
              <button onClick={closeFullProject} className="text-rose-500 hover:text-rose-700 text-2xl font-bold">
                ×
              </button>
            </div>

            {/* Project Image */}
            {selectedProject.image && (
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-8">
              <h1 className="text-3xl font-bold text-rose-800 mb-4">{selectedProject.title}</h1>

              {/* Materials */}
              {selectedProject.materials && selectedProject.materials.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-rose-700 mb-2">Materiales utilizados:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map((material, idx) => (
                      <span key={idx} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div
                className="prose prose-rose max-w-none text-rose-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedProject.content }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Full Post Modal */}
      {showFullPost && selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-rose-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-rose-500" />
                <span className="text-rose-500 font-medium">{selectedPost.date}</span>
              </div>
              <button onClick={closeFullPost} className="text-rose-500 hover:text-rose-700 text-2xl font-bold">
                ×
              </button>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-rose-800 mb-6">{selectedPost.title}</h1>
              <div
                className="prose prose-rose max-w-none text-rose-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-rose-200 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-rose-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Florencia
            </span>
          </div>
          <p className="text-rose-600 mb-4">Creando belleza a través del diseño, una pieza a la vez</p>
          <p className="text-rose-500 flex items-center justify-center space-x-1">
            <span>© 2025 Florencia. Hecho con</span>
            <Heart className="w-4 h-4 text-rose-500 fill-current" />
            <span>y mucha creatividad.</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
