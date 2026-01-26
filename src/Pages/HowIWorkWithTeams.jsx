import { memo } from "react";
import { Rocket, Users, Settings, Shield, XCircle } from "lucide-react";

const STEPS = [
    {
        id: "01",
        title: "Understanding Requirements",
        description:
            "I take time to fully understand project goals and ask clarifying questions to ensure I'm on the right track.",
    },
    {
        id: "02",
        title: "Learning & Research",
        description:
            "I research best practices and learn new technologies needed for the project while building.",
    },
    {
        id: "03",
        title: "Clean Code Development",
        description:
            "I write clean, readable code following modern standards and seeking feedback for improvement.",
    },
    {
        id: "04",
        title: "Regular Communication", 
        description:
            "I provide consistent updates on progress, challenges, and actively seek guidance when needed.",
    },
    {
        id: "05",
        title: "Continuous Learning",
        description: "I stay eager to learn from code reviews and feedback to improve my skills with each project.",
    },
];

const IDEAL_CLIENTS = [
    {
        icon: Rocket,
        label: "Startups looking for an eager learner who can grow with the team",
    },
    {
        icon: Users,
        label: "Small teams that value fresh perspectives and modern tech knowledge",
    },
    {
        icon: Settings,
        label: "Projects where mentorship and learning are part of the process",
    },
    {
        icon: Shield,
        label: "Teams that appreciate dedication and willingness to improve",
    },
];

const NOT_A_FIT = [
   "Projects requiring senior-level architecture decisions without guidance",
    "Tight deadlines with no room for learning or asking questions",
    "Teams expecting 5+ years of production experience",
    "Projects with no code review or mentorship available"
];

const HowIWorkWithTeams = memo(function HowIWorkWithTeams() {
    return (
        <section className="  bg-gray-50  ">
            <div className="max-w-5xl mx-auto px-6 py-20 " >
                {/* Header */}
                <header className="mx-auto mb-14 max-w-2xl text-center">
                    <h2 className="text-6xl font-semibold tracking-tight">
                        How I Work
                    </h2>
                    <p className="mt-5 text-xl text-gray-800">
                        As a junior developer, I bring fresh knowledge, enthusiasm, and a strong commitment to learning and growing with your team.
                    </p>
                </header>

                {/* Steps */}
                <div className="mx-auto mb-20 max-w-5xl space-y-10 ">
                    {STEPS.map(({ id, title, description }) => (
                        <div key={id} className="flex gap-20">
                            <span className="w-8 shrink-0 text-6xl font-semibold text-sky-500">
                                {id}
                            </span>
                            <div>
                                <h3 className="font-semibold text-3xl">{title}</h3>
                                <p className="mt-1 text-xl text-gray-800">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
 <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-sky-700">Fresh perspective.</span> Eager to learn. Ready to contribute and grow with your team.
            </p>
          </div>
                {/* Who I Work With */}
                <header className="  py-10 text-center">
                    <h3 className="text-5xl font-semibold">Who I Work With</h3>
                    <p className="mt-1 text-lg italic text-gray-800">"Looking for someone hungry to learn and contribute."</p>
                </header>

                <div className=" mx-auto mb-20 max-w-5xl  grid gap-8 md:grid-cols-2">
                    {/* Ideal Clients */}
                    <section>
                        <h4 className="mb-4 text-xl font-semibold">Great Fit For</h4>
                        <ul className="space-y-10">
                            {IDEAL_CLIENTS.map(({ icon: Icon, label }) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
                                >
                                    <Icon className="h-10 w-10 text-blue-500" />
                                    <span className="text-lg">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Not a Fit */}
                    <section>
                        <h4 className="mb-4 text-xl font-semibold">Not a Good Fit If</h4>
                        <ul className="space-y-10">
                            {NOT_A_FIT.map((label) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
                                >
                                    <XCircle className="h-10 w-10 text-red-500" />
                                    <span className="text-lg">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div >
        </section>

    );
});

export default HowIWorkWithTeams;
