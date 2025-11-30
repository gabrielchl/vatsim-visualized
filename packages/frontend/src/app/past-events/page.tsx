import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Past Events',
};

const pastEvents = [
  // New events at the top
  {
    title: 'iniBuilds EGCC Scenery Release',
    date: '26 Nov 2025',
    link: '/past-events/inibuilds-egcc'
  },
];

const PastEvents = () => {
  return (
    <main>
      <div className="px-6 pt-2 flex gap-2 flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl">Past Events</h1>
          <p>Data and visualizations of some past events.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] py-2 px-6 gap-2">
        {pastEvents.map((event) => (
          <a
            key={event.link}
            href={event.link}
            className="block p-4 border border-gray-300 rounded hover:bg-gray-100"
          >
            <h2 className="text-lg">{event.title}</h2>
            <p className="text-gray-600 text-sm">{event.date}</p>
          </a>
        ))}
      </div>
    </main>
  );
}

export default PastEvents;
