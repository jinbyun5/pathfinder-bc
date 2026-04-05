function NumberingCard({ number, title, description }) {
    return (
        <div className="flex flex-col items-start gap-4 flex-1 px-7 py-9 rounded-2xl border-t-4 border-primary bg-card shadow-lg">
            <p className="text-primary font-heading text-h2">{number}</p>
            <h5 className="text-primary font-bold font-body">{title}</h5>
            <p>{description}</p>
        </div>
    );
}
  
export default NumberingCard;