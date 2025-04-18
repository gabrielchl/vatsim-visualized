"use client";

import { StyledLink } from "@/components/StyledLink";

const About = () => {
  return (
    <main className="px-6 py-2 max-w-[1200px] [&_h2]:text-lg [&_h2]:mt-4 [&_h2]:mb-1">
      <h1 className="text-2xl">About VATSIM Visualized</h1>
      <h2>What is VATSIM Visualized?</h2>
      <p>It&apos;s this website that aims to provide some fun & interesting visualizations of live and past VATSIM traffic.</p>
      <h2>How does this work, is the source code available somewhere?</h2>
      <p>The source code is available at <StyledLink href="https://github.com/gabrielchl/vatsim-visualized/">GitHub</StyledLink>, there&apos;s also some more technical details over there.</p>
      <h2>Who made this? And Why?</h2>
      <p>It&apos;s-a me, Gabriel! Basically back when Inibuilds release their A350, I made some &quot;top aircrafts being flown&quot; graphs for this reddit post: <StyledLink href="https://www.reddit.com/r/VATSIM/comments/1iz0ci7/some_vatsim_aircraft_type_stats_from_today/">&quot;Some VATSIM aircraft type stats from today&quot;</StyledLink>, which I gathered the data for and made the graphs all manually. So this site was made to satisfy my need for more ✨pretty✨ graphs.</p>
      <h2>What is this logo?</h2>
      <p>IDK, I just hand drew it in <StyledLink href="https://www.tldraw.com/">tldraw</StyledLink> and exported it as an SVG.</p>
      <h2>I would like to suggest some improvements / report a bug</h2>
      <p>Please create an issue over at <StyledLink href="https://github.com/gabrielchl/vatsim-visualized/issues/new">GitHub</StyledLink> (remember to label your issue &quot;bug&quot; or &quot;enhancement"), thanks!</p>
    </main>
  );
}

export default About;
