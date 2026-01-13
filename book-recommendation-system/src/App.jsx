import React, { useState } from 'react';
import { BookOpen, Star, ArrowRight, ArrowLeft, Sparkles, X } from 'lucide-react';

const App = () => {
  const [step, setStep] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedSubs, setSelectedSubs] = useState([]);
  const [ratings, setRatings] = useState({});
  const [recs, setRecs] = useState([]);
  const [sel, setSel] = useState(null);

  const genres = {
    fantasy: { n: 'Fantasy', e: '🧙', s: ['High', 'Urban', 'Dark', 'Epic'] },
    scifi: { n: 'Sci-Fi', e: '🚀', s: ['Space', 'Cyber', 'Dystopia', 'Hard'] },
    mystery: { n: 'Mystery', e: '🔍', s: ['Detective', 'Cozy', 'Crime', 'Noir'] },
    romance: { n: 'Romance', e: '💕', s: ['Contemporary', 'Historical', 'Paranormal'] },
    thriller: { n: 'Thriller', e: '💣', s: ['Psych', 'Action', 'Spy'] },
    historical: { n: 'Historical', e: '📚', s: ['WWII', 'Medieval', 'Victorian'] },
    biography: { n: 'Biography', e: '👤', s: ['Memoir', 'Celebrity'] },
    selfhelp: { n: 'Self-Help', e: '⭐', s: ['Productivity', 'Psych', 'Business'] },
    horror: { n: 'Horror', e: '👻', s: ['Gothic', 'Supernatural'] },
    comedy: { n: 'Comedy', e: '😂', s: ['Satire', 'Humor'] },
    adventure: { n: 'Adventure', e: '🔦', s: ['Survival', 'Quest'] },
    philosophy: { n: 'Philosophy', e: '🤔', s: ['Stoicism', 'Existential'] }
  };

  const pop = [
    { id: 1, t: 'Harry Potter', a: 'Rowling', g: 'fantasy', sub: 'High', c: '🔴', d: 'Wizard journey', r: ['Magical'] },
    { id: 2, t: 'Hunger Games', a: 'Collins', g: 'scifi', sub: 'Dystopia', c: '🟢', d: 'Arena survival', r: ['Gripping'] },
    { id: 3, t: 'Pride Prejudice', a: 'Austen', g: 'romance', sub: 'Historical', c: '🔵', d: 'Classic romance', r: ['Timeless'] },
    { id: 4, t: 'Da Vinci Code', a: 'Brown', g: 'mystery', sub: 'Detective', c: '🟠', d: 'Mystery', r: ['Fast'] },
    { id: 5, t: '1984', a: 'Orwell', g: 'scifi', sub: 'Dystopia', c: '⚫', d: 'Totalitarian', r: ['Dark'] },
    { id: 6, t: 'Hobbit', a: 'Tolkien', g: 'fantasy', sub: 'High', c: '🔴', d: 'Journey', r: ['Epic'] },
    { id: 7, t: 'Gone Girl', a: 'Flynn', g: 'thriller', sub: 'Psych', c: '🟢', d: 'Disappears', r: ['Twisted'] },
    { id: 8, t: 'Alchemist', a: 'Coelho', g: 'philosophy', sub: 'Existential', c: '🔵', d: 'Legend', r: ['Inspiring'] },
    { id: 9, t: 'Shining', a: 'King', g: 'horror', sub: 'Supernatural', c: '🔴', d: 'Hotel', r: ['Scary'] },
    { id: 10, t: 'Sapiens', a: 'Harari', g: 'selfhelp', sub: 'Psych', c: '🟠', d: 'History', r: ['Fascinating'] },
    { id: 11, t: 'Martian', a: 'Weir', g: 'scifi', sub: 'Hard', c: '🟢', d: 'Mars', r: ['Witty'] },
    { id: 12, t: 'Sherlock', a: 'Doyle', g: 'mystery', sub: 'Detective', c: '⚫', d: 'Detective', r: ['Brilliant'] },
    { id: 13, t: 'Gatsby', a: 'Fitzgerald', g: 'historical', sub: 'Historical', c: '🔵', d: 'Jazz age', r: ['Beautiful'] },
    { id: 14, t: 'Into Wild', a: 'Krakauer', g: 'adventure', sub: 'Survival', c: '🔴', d: 'Alaska', r: ['Moving'] },
    { id: 15, t: 'Educated', a: 'Westover', g: 'biography', sub: 'Memoir', c: '🟠', d: 'Education', r: ['Powerful'] }
  ];

  const books = [
    { id: 101, t: 'Name Wind', a: 'Rothfuss', g: 'fantasy', sub: 'High', rt: 4.5, d: 'Wizard tale', r: ['Beautiful', 'Masterful'] },
    { id: 102, t: 'Mistborn', a: 'Sanderson', g: 'fantasy', sub: 'Epic', rt: 4.6, d: 'Thief empire', r: ['Magic', 'Exciting'] },
    { id: 103, t: 'Way Kings', a: 'Sanderson', g: 'fantasy', sub: 'Epic', rt: 4.7, d: 'Storm world', r: ['Epic'] },
    { id: 104, t: 'Fellowship', a: 'Tolkien', g: 'fantasy', sub: 'High', rt: 4.8, d: 'Ring quest', r: ['Classic'] },
    { id: 105, t: 'Game Thrones', a: 'Martin', g: 'fantasy', sub: 'Epic', rt: 4.5, d: 'Throne war', r: ['Political'] },
    { id: 106, t: 'Fifth Season', a: 'Jemisin', g: 'fantasy', sub: 'Dark', rt: 4.4, d: 'Catastrophe', r: ['Unique'] },
    { id: 107, t: 'City Bones', a: 'Clare', g: 'fantasy', sub: 'Urban', rt: 4.2, d: 'Shadowhunter', r: ['Fast'] },
    { id: 108, t: 'American Gods', a: 'Gaiman', g: 'fantasy', sub: 'Urban', rt: 4.3, d: 'Gods clash', r: ['Dark'] },
    { id: 201, t: 'Dune', a: 'Herbert', g: 'scifi', sub: 'Space', rt: 4.7, d: 'Desert planet', r: ['Masterpiece'] },
    { id: 202, t: 'Hail Mary', a: 'Weir', g: 'scifi', sub: 'Hard', rt: 4.8, d: 'Save Earth', r: ['Entertaining'] },
    { id: 203, t: 'Foundation', a: 'Asimov', g: 'scifi', sub: 'Space', rt: 4.4, d: 'Empire falls', r: ['Revolutionary'] },
    { id: 204, t: 'Enders Game', a: 'Card', g: 'scifi', sub: 'Space', rt: 4.5, d: 'Child soldier', r: ['Compelling'] },
    { id: 205, t: 'Neuromancer', a: 'Gibson', g: 'scifi', sub: 'Cyber', rt: 4.2, d: 'Hacker job', r: ['Classic'] },
    { id: 206, t: 'Snow Crash', a: 'Stephenson', g: 'scifi', sub: 'Cyber', rt: 4.3, d: 'Hacker hero', r: ['Inventive'] },
    { id: 207, t: 'Handmaids', a: 'Atwood', g: 'scifi', sub: 'Dystopia', rt: 4.4, d: 'Theocracy', r: ['Chilling'] },
    { id: 208, t: 'Brave New', a: 'Huxley', g: 'scifi', sub: 'Dystopia', rt: 4.3, d: 'Genetic', r: ['Classic'] },
    { id: 301, t: 'Silent Patient', a: 'Michaelides', g: 'thriller', sub: 'Psych', rt: 4.3, d: 'Never speaks', r: ['Shocking'] },
    { id: 302, t: 'Dragon Tattoo', a: 'Larsson', g: 'thriller', sub: 'Psych', rt: 4.4, d: 'Secrets', r: ['Intense'] },
    { id: 303, t: 'Big Little', a: 'Moriarty', g: 'thriller', sub: 'Psych', rt: 4.2, d: 'Lives unravel', r: ['Sharp'] },
    { id: 304, t: 'Bourne', a: 'Ludlum', g: 'thriller', sub: 'Action', rt: 4.3, d: 'Spy', r: ['Action'] },
    { id: 305, t: 'Tinker Tailor', a: 'le Carré', g: 'thriller', sub: 'Spy', rt: 4.4, d: 'Mole hunt', r: ['Masterful'] },
    { id: 401, t: 'Normal People', a: 'Rooney', g: 'romance', sub: 'Contemporary', rt: 4.2, d: 'Irish teens', r: ['Raw'] },
    { id: 402, t: 'Notebook', a: 'Sparks', g: 'romance', sub: 'Contemporary', rt: 4.1, d: 'Epic love', r: ['Heartwarming'] },
    { id: 403, t: 'Me Before', a: 'Moyes', g: 'romance', sub: 'Contemporary', rt: 4.3, d: 'Caregiver', r: ['Beautiful'] },
    { id: 404, t: 'Outlander', a: 'Gabaldon', g: 'romance', sub: 'Historical', rt: 4.4, d: 'Time travel', r: ['Epic'] },
    { id: 405, t: 'Court Thorns', a: 'Maas', g: 'romance', sub: 'Paranormal', rt: 4.4, d: 'Faerie', r: ['Steamy'] },
    { id: 501, t: 'Then Were None', a: 'Christie', g: 'mystery', sub: 'Detective', rt: 4.6, d: 'Ten murdered', r: ['Brilliant'] },
    { id: 502, t: 'Roger Ackroyd', a: 'Christie', g: 'mystery', sub: 'Detective', rt: 4.5, d: 'Poirot', r: ['Innovative'] },
    { id: 503, t: 'Cuckoos Calling', a: 'Galbraith', g: 'mystery', sub: 'Detective', rt: 4.4, d: 'PI supermodel', r: ['Engaging'] },
    { id: 504, t: 'Thursday Club', a: 'Osman', g: 'mystery', sub: 'Cozy', rt: 4.5, d: 'Retirees', r: ['Charming'] },
    { id: 601, t: 'All Light', a: 'Greer', g: 'historical', sub: 'WWII', rt: 4.3, d: 'WWII France', r: ['Moving'] },
    { id: 602, t: 'Book Thief', a: 'Zusak', g: 'historical', sub: 'WWII', rt: 4.6, d: 'Nazi Germany', r: ['Powerful'] },
    { id: 603, t: 'Pillars Earth', a: 'Follett', g: 'historical', sub: 'Medieval', rt: 4.5, d: 'Cathedral', r: ['Epic'] },
    { id: 604, t: 'Wolf Hall', a: 'Mantel', g: 'historical', sub: 'Medieval', rt: 4.3, d: 'Cromwell', r: ['Rich'] },
    { id: 701, t: 'Atomic Habits', a: 'Clear', g: 'selfhelp', sub: 'Productivity', rt: 4.7, d: 'Build habits', r: ['Practical'] },
    { id: 702, t: 'Thinking Fast', a: 'Kahneman', g: 'selfhelp', sub: 'Psych', rt: 4.6, d: 'Decision making', r: ['Insightful'] },
    { id: 703, t: 'Cant Hurt Me', a: 'Goggins', g: 'selfhelp', sub: 'Productivity', rt: 4.7, d: 'Mental toughness', r: ['Inspiring'] },
    { id: 704, t: 'Rich Dad', a: 'Kiyosaki', g: 'selfhelp', sub: 'Business', rt: 4.5, d: 'Financial literacy', r: ['Eye-opening'] },
    { id: 801, t: 'Steve Jobs', a: 'Isaacson', g: 'biography', sub: 'Celebrity', rt: 4.5, d: 'Apple founder', r: ['Fascinating'] },
    { id: 802, t: 'Becoming', a: 'Obama', g: 'biography', sub: 'Memoir', rt: 4.7, d: 'First Lady', r: ['Inspiring'] },
    { id: 803, t: 'Long Walk', a: 'Mandela', g: 'biography', sub: 'Memoir', rt: 4.8, d: 'Freedom fighter', r: ['Powerful'] },
    { id: 901, t: 'Carrie', a: 'King', g: 'horror', sub: 'Supernatural', rt: 4.2, d: 'Telekinetic girl', r: ['Disturbing'] },
    { id: 902, t: 'Dracula', a: 'Stoker', g: 'horror', sub: 'Gothic', rt: 4.3, d: 'Vampire', r: ['Classic'] },
    { id: 903, t: 'It', a: 'King', g: 'horror', sub: 'Supernatural', rt: 4.4, d: 'Clown', r: ['Terrifying'] },
    { id: 1001, t: 'Monte Cristo', a: 'Dumas', g: 'adventure', sub: 'Quest', rt: 4.7, d: 'Revenge', r: ['Epic'] },
    { id: 1002, t: 'Treasure Island', a: 'Stevenson', g: 'adventure', sub: 'Quest', rt: 4.4, d: 'Pirate', r: ['Classic'] },
    { id: 1101, t: 'Hitchhiker', a: 'Adams', g: 'comedy', sub: 'Satire', rt: 4.6, d: 'Space', r: ['Hilarious'] },
    { id: 1102, t: 'Good Omens', a: 'Pratchett', g: 'comedy', sub: 'Satire', rt: 4.5, d: 'Apocalypse', r: ['Funny'] }
  ];

  const gen = () => {
    let sc = books.map(b => {
      let s = 0;
      if (selectedGenres.includes(b.g)) s += 50;
      if (selectedSubs.includes(b.sub)) s += 30;
      const rel = Object.entries(ratings).filter(([i]) => {
        const p = pop.find(x => x.id === parseInt(i));
        return p && p.g === b.g;
      });
      if (rel.length) s += (rel.reduce((x, [, v]) => x + v, 0) / rel.length) * 10;
      s += b.rt * 5;
      return { ...b, s };
    });
    setRecs(sc.sort((a, b) => b.s - a.s).slice(0, 12));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-6xl mx-auto">
        {step === 0 && (
          <div className="text-center">
            <div className="mb-8 inline-block p-6 bg-gray-800 rounded-full shadow-lg border-2 border-blue-500">
              <BookOpen size={80} className="text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold text-blue-400 mb-4">Book Recommendations</h1>
            <p className="text-xl text-gray-300 mb-8">50+ books with subgenres!</p>
            <button
              onClick={() => setStep(1)}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2 mx-auto"
            >
              Let's Get Started <ArrowRight size={24} />
            </button>
          </div>
        )}
        {step === 1 && (
          <div>
            <h2 className="text-4xl font-bold text-blue-400 mb-3 text-center">Categories</h2>
            <p className="text-center text-gray-400 mb-8">Click for subgenres!</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {Object.entries(genres).map(([k, v]) => (
                <div key={k}>
                  <button
                    onClick={() => setSelectedGenres(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k])}
                    className={`w-full p-6 rounded-xl font-semibold transition ${selectedGenres.includes(k) ? 'bg-blue-600 text-white scale-105' : 'bg-gray-800 text-gray-200 border border-gray-700'}`}
                  >
                    <div className="text-4xl mb-2">{v.e}</div>
                    <div className="text-sm">{v.n}</div>
                  </button>
                  {selectedGenres.includes(k) && (
                    <div className="mt-2 space-y-1">
                      {v.s.map(x => (
                        <button
                          key={x}
                          onClick={() => setSelectedSubs(p => p.includes(x) ? p.filter(y => y !== x) : [...p, x])}
                          className={`w-full text-xs p-2 rounded ${selectedSubs.includes(x) ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
                        >
                          {x}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(0)}
                className="bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-600 flex items-center gap-2"
              >
                <ArrowLeft size={20} /> Back
              </button>
              <button
                onClick={() => setStep(2)}
                disabled={!selectedGenres.length}
                className={`px-6 py-3 rounded-full flex items-center gap-2 ${selectedGenres.length ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-700 text-gray-500'}`}
              >
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-4xl font-bold text-blue-400 mb-3 text-center">Rate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {pop.map(b => (
                <div key={b.id} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <div className="flex gap-3">
                    <div className="text-4xl">{b.c}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-blue-300 mb-1">{b.t}</h3>
                      <p className="text-gray-400 text-xs mb-2">{b.a}</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <button
                            key={i}
                            onClick={() => setRatings(p => ({ ...p, [b.id]: i }))}
                          >
                            <Star
                              size={20}
                              className={ratings[b.id] >= i ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-600 flex items-center gap-2"
              >
                <ArrowLeft size={20} /> Back
              </button>
              <button
                onClick={() => { gen(); setStep(3); }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 flex items-center gap-2"
              >
                Recommendations <Sparkles size={20} />
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="text-center mb-8">
              <Sparkles size={60} className="text-blue-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-blue-400 mb-3">Your Recommendations!</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recs.map((b, i) => (
                <div
                  key={b.id}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 cursor-pointer hover:scale-105 transition"
                  onClick={() => setSel(b)}
                >
                  <div className="flex justify-between mb-3">
                    <div className="bg-blue-900 text-blue-300 font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-300">{b.rt}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-blue-300 mb-2">{b.t}</h3>
                  <p className="text-gray-400 text-sm mb-2">{b.a}</p>
                  <div className="flex gap-2">
                    <span className="bg-blue-900 text-blue-300 text-xs px-3 py-1 rounded-full">{genres[b.g]?.n}</span>
                    <span className="bg-purple-900 text-purple-300 text-xs px-3 py-1 rounded-full">{b.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => { setStep(0); setSelectedGenres([]); setSelectedSubs([]); setRatings({}); }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700"
              >
                Start Again
              </button>
            </div>
          </div>
        )}
        {sel && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4" onClick={() => setSel(null)}>
            <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full border-2 border-blue-500" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold text-blue-400">{sel.t}</h2>
                <button onClick={() => setSel(null)} className="text-gray-400 hover:text-white">
                  <X size={32} />
                </button>
              </div>
              <p className="text-xl text-gray-300 mb-2">{sel.a}</p>
              <div className="flex items-center gap-2 mb-4">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <span className="text-lg text-gray-300">{sel.rt} / 5.0</span>
              </div>
              <div className="border-t border-gray-700 pt-4 mb-4">
                <h3 className="text-lg font-bold text-blue-300 mb-2">Description</h3>
                <p className="text-gray-300">{sel.d}</p>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Reviews</h3>
                <div className="space-y-2">
                  {sel.r.map((rv, i) => (
                    <div key={i} className="bg-gray-900 p-3 rounded-lg">
                      <p className="text-gray-300 italic">{rv}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
