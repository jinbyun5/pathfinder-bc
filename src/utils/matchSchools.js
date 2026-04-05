import schools from '../data/schools.json';

// Calculates match score for each program using weighted quiz answers and returns sorted results
function matchSchools(answers) {

    const results = [];

    // Weight per question based on importance for matching
    const weights = {
        field: 30,
        learning: 25,
        commitment: 15,
        timeline: 15,
        concern: 10,
        location: 5
    };

    schools.forEach(school => {
        school.programs.forEach(program => {
            let matchCount = 0;
            let totalCount = 0;

            Object.keys(answers).forEach(key => {
                const userAnswer = answers[key];
                const programTags = program.tags[key] || [];
                const weight = weights[key] || 1;

                totalCount += weight;

                if (programTags.includes(userAnswer)) {
                    matchCount += weight;
                }
            });

            const score = Math.round((matchCount / totalCount) * 100);

            results.push({
                school,
                program,
                score
            });
        });
    });

    return results.sort((a, b) => b.score - a.score);
}

export default matchSchools;