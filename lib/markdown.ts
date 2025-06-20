import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const contentDirectory = path.join(process.cwd(), "content")

export interface ProjectData {
  slug: string
  title: string
  date: string
  category: string
  image?: string
  materials?: string[]
  excerpt: string
  featured?: boolean
  content: string
}

export interface BlogData {
  slug: string
  title: string
  date: string
  excerpt: string
  featured?: boolean
  content: string
}

export interface AboutData {
  title: string
  subtitle: string
  image?: string
  content: string
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getProjects(): Promise<ProjectData[]> {
  const projectsDirectory = path.join(contentDirectory, "projects")

  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = await Promise.all(
    fileNames
      .filter((name) => name.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)
        const htmlContent = await markdownToHtml(content)

        return {
          slug,
          title: data.title || "",
          date: data.date || "",
          category: data.category || "",
          image: data.image,
          materials: data.materials || [],
          excerpt: data.excerpt || "",
          featured: data.featured || false,
          content: htmlContent,
        } as ProjectData
      }),
  )

  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogPosts(): Promise<BlogData[]> {
  const blogDirectory = path.join(contentDirectory, "blog")

  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((name) => name.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(blogDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)
        const htmlContent = await markdownToHtml(content)

        return {
          slug,
          title: data.title || "",
          date: data.date || "",
          excerpt: data.excerpt || "",
          featured: data.featured || false,
          content: htmlContent,
        } as BlogData
      }),
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getAboutData(): Promise<AboutData> {
  const aboutPath = path.join(contentDirectory, "about.md")

  if (!fs.existsSync(aboutPath)) {
    return {
      title: "Sobre Mí",
      subtitle: "Diseñadora de indumentaria",
      content: "<p>Contenido no encontrado</p>",
    }
  }

  const fileContents = fs.readFileSync(aboutPath, "utf8")
  const { data, content } = matter(fileContents)
  const htmlContent = await markdownToHtml(content)

  return {
    title: data.title || "Sobre Mí",
    subtitle: data.subtitle || "",
    image: data.image,
    content: htmlContent,
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug) || null
}

export async function getBlogPostBySlug(slug: string): Promise<BlogData | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
