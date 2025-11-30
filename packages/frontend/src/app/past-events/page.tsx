import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Past Events',
};

const PastEvents = () => {
  return (
    <main>
      <div className="px-6 pt-2 flex gap-2 flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl">Past Events</h1>
          <p>Data and visualizations of some past events.</p>
        </div>
      </div>
    </main>
  );
}

export default PastEvents;
