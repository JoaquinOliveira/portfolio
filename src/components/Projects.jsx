import React from 'react';
import { useIntl } from 'react-intl';

function Projects() {
    const intl = useIntl();

    const projects = [
        {
            titleId: 'projects.project1.title',
            descriptionId: 'projects.project1.description',
            videoId: 'CjYOaIOrsW0',
            link: 'https://www.youtube.com/watch?v=CjYOaIOrsW0&ab_channel=jggiampe',
        },
        {
            titleId: 'projects.project2.title',
            descriptionId: 'projects.project2.description',
            link: 'https://main--fantastic-narwhal-eba682.netlify.app/',
        },
        {
            titleId: 'projects.project3.title',
            descriptionId: 'projects.project3.description',
            link: 'https://estudiodeleo.netlify.app/',
        },
        {
            titleId: 'projects.project4.title',
            descriptionId: 'projects.project4.description',
            link: '',
            tags: ["React Native", "Mobile Development", "Professional Practice"],
            category: "Mobile Development",
            status: "Completed"
        },
        {
            titleId: 'projects.project5.title',
            descriptionId: 'projects.project5.description',
            link: 'https://github.com/JoaquinOliveira/CNO-T-Web',
            tags: ["React", "Firebase"],
            category: "Web Development",
            status: "In Development"
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="projects">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-blue-500 dark:text-blue-300">
                    {intl.formatMessage({ id: 'projects.title' })}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-blue-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                            {project.videoId && (
                                <div className="relative" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        title={intl.formatMessage({ id: project.titleId })}
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${project.videoId}`}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                    {intl.formatMessage({ id: project.titleId })}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {intl.formatMessage({ id: project.descriptionId })}
                                </p>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 hover:underline">
                                        {project.videoId
                                            ? intl.formatMessage({ id: 'projects.watchOnYoutube' })
                                            : intl.formatMessage({ id: 'projects.visitProject' })}
                                    </a>
                                )}
                                {project.status === "In Development" && (
                                    <p className="text-yellow-600 dark:text-yellow-400 mt-2 font-semibold">
                                        {intl.formatMessage({ id: 'projects.inDevelopment' })}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;