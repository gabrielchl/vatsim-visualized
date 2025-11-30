import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Past Events',
};

const PastEvents = () => {
  return (
    <main>
      <div className="px-6 pt-2 flex gap-2 flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl">Past Events: iniBuilds EGCC Scenery Release</h1>
          <p>On 26 Nov 2025 20:00 UTC, iniBuilds released the EGCC Scenery.</p>
          <p>VATSIM UK organized the Manchester Staff-Up event the day after.</p>
        </div>
      </div>
    </main>
  );
}

export default PastEvents;
