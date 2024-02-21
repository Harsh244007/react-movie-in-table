import { Suspense } from "react";
import Movies from "./components/Movies";
import "./styles.css";
import Loading from "./components/common/loading";

export default function App() {
    return (
        <section className="App">
            <Suspense fallback={<Loading />}>
                <Movies />
            </Suspense>
        </section>
    );
}
