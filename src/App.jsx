import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DarkModeProvider } from "./context/DarkModeContext";
import SuspenseWrapper from "./components/SuspenseWrapper";
import Spinner from "./components/Spinner";

const NavbarHome = lazy(() => import("./components/NavbarHome"));
const NavbarPages = lazy(() => import("./components/NavbarPages"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));
const Approach = lazy(() => import("./pages/Approach"));
const Reference = lazy(() => import("./pages/Reference"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route
            path="/tsawebmaster/"
            element={
              <>
                <NavbarHome />
                <SuspenseWrapper>
                  <Home />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
          <Route
            path="/tsawebmaster/menu"
            element={
              <>
                <NavbarPages />
                <SuspenseWrapper>
                  <Menu />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
          <Route
            path="/tsawebmaster/contact"
            element={
              <>
                <NavbarPages />
                <SuspenseWrapper>
                  <Contact />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
          <Route
            path="/tsawebmaster/approach"
            element={
              <>
                <NavbarPages />
                <SuspenseWrapper>
                  <Approach />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
          <Route
            path="/tsawebmaster/references"
            element={
              <>
                <NavbarPages />
                <SuspenseWrapper>
                  <Reference />
                </SuspenseWrapper>
                <SuspenseWrapper>
                  <Footer />
                </SuspenseWrapper>
              </>
            }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Suspense fallback={<Spinner />}>
          <AnimatedRoutes />
        </Suspense>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
