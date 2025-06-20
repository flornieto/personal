import { getProjects, getBlogPosts, getAboutData } from "@/lib/markdown"
import HomePage from "@/components/home-page"

export default async function Page() {
  const [projects, blogPosts, aboutData] = await Promise.all([getProjects(), getBlogPosts(), getAboutData()])

  return <HomePage projects={projects} blogPosts={blogPosts} aboutData={aboutData} />
}
