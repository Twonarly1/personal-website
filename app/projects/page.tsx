import Image from "next/image"
import Link from "next/link"

import { Heading } from "~/components"

import { fetchProjectsData } from "~/lib"

async function Projects() {
    const projects: Project[] = await fetchProjectsData()

    return (
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-start overflow-hidden px-6 scrollbar-hide">
            <Heading title={"Projects"} subtitle={"Select for more details"} />

            <div className="mx-auto flex flex-col gap-y-4 overflow-x-scroll p-1 scrollbar-hide">
                {projects.map((project, i: number) => (
                    <Link
                        key={i}
                        href={`../project/${project.slug}`}
                        className="group z-10 cursor-default rounded-2xl p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:bg-primary-dark dark:hover:from-gray-600 dark:hover:to-slate-800"
                    >
                        <div className="relative flex w-full flex-shrink-0  flex-col rounded-2xl  ">
                            <div className="w-full space-y-2">
                                <b className="text-left text-lg text-black/80  dark:text-white/80 xs:text-xl">
                                    {project.title}
                                </b>

                                <div className="mx-auto flex h-fit w-full flex-wrap items-center gap-y-2 text-left text-sm tracking-wide xs:text-lg ">
                                    {project.summary}
                                </div>

                                <p className="text-xs">{project.date}</p>

                                <div className="hidden justify-end space-x-2 pt-2 xs:flex xs:pt-0">
                                    {project.technologies.map((tech: any, i: number) => (
                                        <div key={i} className="relative h-6 w-6">
                                            <Image
                                                loading="lazy"
                                                className="h-6 w-6 opacity-0 grayscale group-hover:opacity-50 group-hover:grayscale-0 dark:opacity-0"
                                                src={tech.imageSrc}
                                                alt="Portrait photo of me"
                                                quality={100}
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
