import ProjectsWithFilter from '@/components/UI/ProjectsWithFilter';
import SectionHeader from '@/components/UI/SectionHeader';
import data from '@/data/data.json';

export const metadata = {
    title: 'Projects | Balram Prajapati - Full-Stack Web Developer',
    description:
        'Explore all projects by Balram Prajapati, a full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
    openGraph: {
        title: 'Projects | Balram Prajapati - Full-Stack Web Developer',
        description:
            'Explore all projects by Balram Prajapati, a full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
        url: 'https://rohitdamer.vercel.app/projects',
        images: [
            {
                url: 'https://rohitdamer.vercel.app/images/og-image-projects.png',
                width: 1200,
                height: 630,
                alt: 'Balram Prajapati Projects Preview',
            },
        ],
    },
    alternates: {
        canonical: 'https://vandit-shah.me/projects',
    },
};

export default function ProjectsPage() {
    const { projects } = data.data;

    const categories = ['All', ...new Set(projects.map((project) => project.category))];

    return (
        <section className="bg-black text-white py-6 mt-22">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            projects.map((project) => ({
                                '@context': 'https://schema.org',
                                '@type': 'ImageObject',
                                url: `https://rohitdamer.vercel.app${project.image}`,
                                name: `${project.title} Project Image`,
                                caption: `${project.title} by Balram Prajapati - ${project.category} Project`,
                                associatedMedia: {
                                    '@type': 'WebPage',
                                    url: 'https://rohitdamer.vercel.app/projects',
                                },
                            }))
                        ),
                    }}
                />
            </head>
            <main className="mx-auto px-6 md:px-8 lg:px-16">

                <SectionHeader title={'projects'} description={'View all my latest projects here'} linkText={'back to home'} link={'/'} />

                {/* Projects Section with Categories */}
                <div className="mt-16">
                    <ProjectsWithFilter projects={projects} categories={categories} />
                </div>

            </main>
        </section>
    );
}