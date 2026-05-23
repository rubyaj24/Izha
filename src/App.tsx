import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { GeneratorLayout } from "./GeneratorLayout";
import { HomePage } from "./HomePage";
import { TshirtGenerator } from "./components/tshirt/TshirtGenerator";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<GeneratorLayout />}>
          <Route
            path="/generator"
            element={
              <Suspense
                fallback={
                  <div className="flex min-h-screen items-center justify-center bg-black pt-20">
                    <p className="text-[18px] uppercase tracking-wider text-white/50">
                      Loading generator...
                    </p>
                  </div>
                }
              >
                <TshirtGenerator />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
