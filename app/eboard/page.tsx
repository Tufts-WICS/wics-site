import DirectoryHeader from '@/app/components/Directory_Header';

type EboardMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const members: EboardMember[] = [
  {
    name: 'John Doe',
    role: 'President',
    description: '',
    image: '/images/HelenaL.png',
  },
  {
    name: 'Jane Smith',
    role: 'Vice President',
    description: '',
    image: '/images/HelenaL.png',
  },
  {
    name: 'Alex Brown',
    role: 'Secretary',
    description: '',
    image: '/images/HelenaL.png',
  },
];

export default function Eboard() {
  return (
    <main className="min-h-screen">
    <DirectoryHeader />

      <section className="w-full max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center text-center p-6
                         bg-[#F2EBD8] border-2 border-black rounded-xl
                         shadow-[4px_4px_0px_#9478F9]
                         hover:-translate-y-1 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-75 h-50 rounded-bl-lg object-cover
                           border-2 border-black mb-4"
              />

              <h2 className="text-black text-xl font-bold">{member.name}</h2>

              <p className="text-[#1C1C1E] mt-2">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}