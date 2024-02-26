import { Suspense } from "react";
import Movies from "./components/Movies";
import "./styles.css";
import Loading from "./components/common/loading";

export default function App() {
    return (
        <main className="App">
            <Suspense fallback={<Loading />}>
                <Movies />
            </Suspense>
        </main>
    );
}
