import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-6">
            <h1>404</h1>
            <h3>Page not found</h3>
            <p className="text-tertiary">The page you're looking for doesn't exist.</p>
            <Button size="md" onClick={() => navigate('/')}>Go back home</Button>
        </div>
    );
}

export default NotFound;