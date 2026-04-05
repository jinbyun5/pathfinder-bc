function TestimonialCard({ rating, quote, image, name, school }) {
    return (
        <div className="flex flex-col items-start gap-4 flex-1 p-8 rounded-2xl border border-border bg-card">
            <span className="text-yellow-400 p-0.5">{'★'.repeat(rating)}</span>
            <p>"{quote}"</p>
            <div className="flex items-center gap-3 p-2.5">
                <img src={image} alt={name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                    <p className="text-primary">{name}</p>
                    <p className="text-caption leading-caption">{school}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;