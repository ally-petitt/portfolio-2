import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import React, { useEffect } from "react";
import ICONS from "../icons/index.js";
import "./frontend.css";
import Projects from "./projects/Projects.js";
import useRefs from "react-use-refs";

function FrontendSection() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  const [textRef, logoRef, logosRef, timeline] = useRefs();
  const [pj0, pj1, pj2, pj3] = useRefs();

  useEffect(() => {
    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#textContainer",
        scrub: 0.8,
      },
    });

    timeline.current
      // make text and logos transparent before animations begin
      .set(textRef.current, { opacity: 0, x: 500 })
      .set(logoRef.current, { opacity: 0, y: 100 })
      .set(logosRef.current, { opacity: 0, y: -100, scale: 0.9 })
      .set("#projectsContainer > *", { opacity: 0, y: 400 })

      // fade text up
      .from(textRef.current, {
        y: 900,
        duration: 2,
        opacity: 1,
      })
      // move text to left
      .to(textRef.current, 0.75, {
        x: 0,
        y: 0,
        duration: 2,
      })
      // fade up react logo
      .to(logoRef.current, 1, {
        opacity: 1,
        y: 0,
        duration: 2,
      })
      // lower other logos
      .to(logosRef.current, {
        y: 0,
        opacity: 1,
        duration: 2,
        scale: 1,
      })
      .to(textRef.current, 0.2, {
        text: "VIEW MY PROJECTS",
        duration: 3,
      })
      // TODO: make parallax where logos move faster than react logo on scroll
      // .to("#logoContainer", { y: "-100vh", duration: 2, scale: 0.8, opacity: 0})
      // .to("#bootstrap-logo", { scale: 0.5, end: "bottom 50%+=100px" })
      .to(logosRef.current.children, {
        scale: 0,
        stagger: 0.08,
        opacity: 0,
        rotateX: "70deg",
        rotateY: "-50deg",
        duration: 1.2,
      })

      .to("#textContainer", { height: "50vh" })
      .to(logoRef.current, { scale: 0.7, opacity: 0.4 })
      .to("#logoContainer", { height: "50vh", top: "50vh", right: "50vw" })
      .to("#wrapper", { backgroundColor: "#03080E", display: "block", duration: 1.2 })
      .to("#projectsContainer", { display: "flex", duration: 0 })
      // slide up projects
      .to([pj0.current, pj1.current], { opacity: 1, y: 0, stagger: 0.3 })
      .to([pj2.current, pj3.current], 0.7, { opacity: 1, y: 0, stagger: 0.3 });
  }, []);

  return (
    <div>
      <Box bgcolor="primary.main">
        <div
          id="wrapper"
          style={{
            position: "sticky",
            top: "0",
            left: "0",
            textAlign: "center",
            display: "flex",
            maxWidth: "100vw",
            height: "6000px",
          }}>
          <div
            id="textContainer"
            style={{
              width: "50vw",
              height: "100vh",
              pointerEvents: "none",
              position: "sticky",
              top: "0",
              textAlign: "center",
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Typography
              id="text"
              color="white"
              ref={textRef}
              lineHeight={1.3}
              variant="h1"
              m={0}
              fontWeight="300"
              letterSpacing={2}
              component="h3">
              FRONTEND
              <br />
              DEVELOPER
            </Typography>
          </div>
          <Box
            id="logoContainer"
            width="50vw"
            position="sticky"
            style={{ top: 0 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh">
            <img
              src={ICONS.react}
              ref={logoRef}
              style={{ zIndex: "2", width: "60%", position: "relative", padding: "40px" }}
            />
            <Box container id="smallLogoContainer" ref={logosRef} position="relative" top={-1} width="65%">
              {
                // render in all the logos
                Object.entries(ICONS).map(([key, value]) => {
                  if (key != "react")
                    return (
                      <img id={`${key}-logo`} style={{ position: "relative" }} src={ICONS[key]} alt={`${key} logo`} />
                    );
                })
              }
            </Box>
          </Box>
          {/* ref cooresponds with index in array */}
          <Projects refs={[pj0, pj1, pj2, pj3]} />
        </div>
      </Box>
    </div>
  );
}

export default FrontendSection;
