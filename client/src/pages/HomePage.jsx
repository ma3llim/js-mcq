import { useCatalog } from '../catalogContext.js'
import { Overview } from '../components/overview'
import { countLabel } from '../format.js'
import { buildPath } from '../paths.js'

export function HomePage() {
  const { technologies } = useCatalog()
  return (
    <Overview
      title="Study topics"
      description="Pick a technology and section, then work through its topics."
      emptyTitle="No technologies available yet"
      emptyMessage="Technologies will appear here once they're created."
      cards={technologies.map((technology) => ({
        id: technology.id,
        name: technology.name,
        badgeName: technology.name,
        meta: countLabel(technology.sections.length, 'section'),
        emptyNote: 'No sections yet.',
        links: technology.sections.map((section) => ({
          id: section.id,
          name: section.name,
          meta: `${countLabel(section.topics.length, 'topic')} · ${countLabel(section.questionCount, 'question')}`,
          to: buildPath(technology.slug, section.slug),
        })),
      }))}
    />
  )
}
