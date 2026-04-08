import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import matchSchools from '../utils/matchSchools';

import FadeUp from '../components/FadeUp';
import Button from "../components/Button";

import blurBg from '../assets/blur-bg.png';

function Results() {

    const navigate = useNavigate();

    const location = useLocation();
    const answers = location.state?.answers;

    const results = matchSchools(answers);
    const topMatch = results[0];

    // Redirect to home page if results page is accessed directly without completing the quiz
    useEffect(() => {
        if (!answers) {
            navigate('/');
        }
    }, [answers]);
    
    if (!answers) return null;

    return (
        <FadeUp>
            <section className="px-6 md:px-20 py-8 md:py-16">
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Top Match */}
                        <div className="col-span-12 md:col-span-7 flex flex-col h-full">
                            {/* Header */}
                            <div className="bg-primary rounded-t-lg px-6 py-8 md:py-11">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-8 md:gap-16">
                                    <div className="flex flex-col gap-5 items-center">
                                        <p className="text-white text-h1 font-heading">{topMatch.score}%</p>
                                        <p className="text-secondary text-h6 leading-h6">Match Score</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="bg-secondary text-white text-h6 leading-h6 px-4 py-2 rounded-lg w-fit">Top Match</p>
                                        <h3 className="text-white">{topMatch.school.name}</h3>
                                        <p className="text-secondary text-h5 leading-h5">{topMatch.school.type} · {topMatch.school.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="bg-card rounded-b-lg border border-primary px-6 py-8 md:py-12 flex-1 flex flex-col justify-between">
                                <div className="flex flex-col gap-8 md:gap-12">
                                    <p>{topMatch.school.description}</p>
                                    
                                    <div className="flex flex-col">
                                        {[
                                            { label: "Size", value: topMatch.school.size },
                                            { label: "Program", value: topMatch.program.name },
                                            { label: "Timeline", value: topMatch.school.timeline },
                                            { label: "Cost", value: topMatch.school.cost },
                                            { label: "Format", value: topMatch.school.format },
                                        ].map(({ label, value }, index, arr) => (
                                            <div
                                                key={label}
                                                className={`flex justify-between py-4 md:py-6
                                                    ${index === 0 ? "border-y border-border" : ""}
                                                    ${index > 0 && index < arr.length - 1 ? "border-b border-border" : ""}
                                                `}
                                            >
                                                <p>{label}</p>
                                                <p>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <a href={topMatch.school.website} target="_blank" rel="noopener noreferrer" className="w-full mt-9">
                                    <Button size="xl" className="w-full">
                                        Visit {topMatch.school.name}'s website&nbsp;
                                        <span className="text-primary"> →</span>
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Blur Content */}
                        <div className="col-span-12 md:col-span-5 relative">
                            <img src={blurBg} alt="View More Schools" className="w-full h-full md:max-h-280 lg:max-h-240 object-cover rounded-lg" />
                            {/* Modal */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-card rounded-lg py-8 px-8 text-center shadow-md w-full max-w-94.5">
                                    <h5 className="font-body mb-2">View more schools</h5>
                                    <p className="text-tertiary mb-4">Sign up to see more results</p>
                                    <Button size="md" variant="white">Sign-up</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button size="xl" variant="white" className="w-full" onClick={() => navigate('/quiz')}>Take the quiz again</Button>
                </div>
            </section>
        </FadeUp>
    );
}

export default Results;