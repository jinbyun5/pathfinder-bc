import { useState } from "react";
import { useNavigate } from "react-router-dom";

import quiz from "../data/quiz";

import FadeUp from '../components/FadeUp';
import Button from "../components/Button";

function Quiz() {

    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const question = quiz[currentQuestion];

    const handleSelect = (label) => {
        setAnswers({ ...answers, [question.key]: label })
    }

    const handleNext = () => {
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            navigate('/results', {state: {answers}});
        }
    }

    const progress = Math.round((currentQuestion / quiz.length) * 100);

    return (
        <FadeUp>
            <section className="py-8 md:py-16 px-6 md:px-0">
                <div className="max-w-186 mx-auto flex flex-col gap-8 md:gap-12">
                    <div>
                        <div className="flex justify-between items-center py-2">
                            <p className="text-tertiary text-h5 leading-h5 font-medium">Question {currentQuestion + 1} of {quiz.length}</p>
                            <p className="text-tertiary text-h5 leading-h5 font-medium">{progress}% Complete</p>
                        </div>
                        <div className="w-full h-2 bg-hover">
                            <div
                                className="h-2 bg-primary"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <h3>{question.question}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {question.options.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => handleSelect(option.label)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') handleSelect(option.label);
                                }}
                                tabIndex={0}
                                role="button"
                                className={`py-8 md:py-13 px-6 md:px-10 rounded-lg border cursor-pointer
                                ${answers[question.key] === option.label
                                    ? "border-primary bg-hover"
                                    : "border-border bg-card"
                                }`}
                            >
                                <div className="flex flex-col gap-2">
                                    <h5 className="font-body font-medium">{option.id}. {option.label}</h5>
                                    <p>{option.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        {currentQuestion > 0 ? (
                            <Button 
                                size="lg" 
                                variant="white" 
                                className="text-tertiary"
                                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                            >
                                ← Back
                            </Button>
                        ) : <div />}
                        <Button 
                            size="lg" 
                            onClick={handleNext} 
                            disabled={!answers[question.key]}
                        >
                            {currentQuestion === quiz.length - 1 ? "See my match →" : "Next →"}
                        </Button>
                    </div>
                </div>
            </section>
        </FadeUp>
    );
}

export default Quiz;