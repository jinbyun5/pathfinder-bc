import { useNavigate } from "react-router-dom";

import FadeUp from '../components/FadeUp';
import Button from "../components/Button";
import NumberingCard from "../components/NumberingCard";
import TestimonialCard from "../components/TestimonialCard";

import heroImage from '../assets/hero-image.jpeg';
import bcit from '../assets/schools/bcit-logo.svg';
import ubc from '../assets/schools/ubc-logo.svg';
import langara from '../assets/schools/langara-logo.svg';
import sfu from '../assets/schools/sfu-logo.svg';
import kwantlen from '../assets/schools/kwantlen-logo.png';

import testimonial1 from '../assets/testimonial-1.svg';
import testimonial2 from '../assets/testimonial-2.svg';

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <FadeUp>
                {/* Hero Section */}
                <section
                    className="relative h-202.5 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                    >
                    <div className="h-full px-20 flex items-center">
                        <div className="flex flex-col items-start gap-6 w-147">
                            <h1 className="flex flex-col gap-4">
                                <span>Not sure where to go back to school</span>
                                <span className="text-primary">Let's figure it out.</span>
                            </h1>
                            <h5>
                                Answer a few questions about your goals and schedule. We'll match you with the BC program that actually makes sense for your life right now.
                            </h5>
                            <Button size="md" onClick={() => navigate('/quiz')}>Take the quiz →</Button>
                        </div>
                    </div>
                </section>
            </FadeUp>

            <FadeUp>
                {/* Schools */}
                <section className="h-34 px-20 bg-background">
                    <div className="flex justify-between items-center h-full">
                        <img src={bcit} alt="BCIT" />
                        <img src={ubc} alt="UBC" />
                        <img src={langara} alt="Langara" />
                        <img src={sfu} alt="SFU" />
                        <img src={kwantlen} alt="Kwantlen Polytechnic University" />
                    </div>
                </section>
            </FadeUp>

            <FadeUp>
                {/* How it works */}
                <section className="px-20 py-12 bg-hover border border-border">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-primary">How it works</h2>
                        <div className="flex gap-6">
                            <NumberingCard number="01" title="Take a Quick Quiz" description="Answer 6 simple questions about your academic interests, campus vibe preferences, and life goals." />
                            <NumberingCard number="02" title="Get Your Matches" description="Our algorithm analyzes thousands of data points to surface the universities best aligned with your profile." />
                            <NumberingCard number="03" title="Connect with Mentors" description="Chat with real students at your matched schools to hear genuine firsthand experiences before you decide." />
                        </div>
                    </div>
                </section>
            </FadeUp>

            <FadeUp>
                {/* Testimonials */}
                <section className="px-20 py-12 bg-background border border-border">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-primary">Testimonials</h2>
                        <div className="flex gap-6">
                            <TestimonialCard rating={5} quote="I'd been working in marketing for six years before deciding to pivot into UX. Pathfinder was the first tool that asked about my goals, not just my grades. It matched me with BCIT and the rest followed." image={testimonial1} name="Seth Jon" school="BCIT" />
                            <TestimonialCard rating={5} quote="I came to Pathfinder with a list of seven schools and no way to compare them. After the quiz, everything clicked. I ended up choosing SFU — and it was the right call." image={testimonial2} name="Max Medina" school="SFU" />
                        </div>
                    </div>
                </section>
            </FadeUp>

            <FadeUp>
                {/* CTA */}
                <section className="bg-primary flex flex-col items-center justify-center py-22.75 gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-white">Ready to find your school?</h3>
                        <p className="text-hover">Join thousands of students who've found their perfect Canadian university match.</p>
                    </div>
                    <Button variant="white" size="md" onClick={() => navigate('/quiz')}>Take the quiz →</Button>
                </section>
            </FadeUp>
        </>
    );
}

export default Home;