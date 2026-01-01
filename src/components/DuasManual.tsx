import React from 'react';

export const DuasManual = () => {
  return (
    <div className="max-w-[600px] mx-auto p-5 border border-gray-200 rounded-[10px] bg-[#f9f9f9] text-[#333] font-sans leading-relaxed">
      <h2 className="text-[#2c3e50] text-center border-b-2 border-[#2c3e50] pb-[10px] text-2xl font-bold mb-4">
        🌿 Jar of Duas: User Manual
      </h2>

      <div className="bg-white p-[15px] rounded-lg shadow-sm mb-5 text-left">
        <h3 className="text-[#e67e22] text-xl font-semibold mb-2">How to Read Your Slip</h3>
        <p className="mb-2">Follow these steps to find comfort and connection:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Select:</strong> Choose a colored slip from the jar that matches your current emotion.</li>
          <li><strong>Open:</strong> Unfold the slip once. It opens like a small book.</li>
          <li><strong>Right Side:</strong> Focus here first to read the <strong>Arabic Dua</strong> and its <strong>English Transliteration</strong> to help with pronunciation.</li>
          <li><strong>Left Side:</strong> Look here to understand the heart of the prayer through the <strong>Thai</strong> and <strong>English</strong> translations.</li>
        </ol>
      </div>

      <h3 className="text-[#e67e22] text-xl font-semibold mb-2 text-left">Dua Color Categories</h3>
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="w-full border-collapse mt-0 bg-white text-left text-sm sm:text-base">
          <thead>
            <tr>
              <th className="p-3 border-b border-[#ddd] bg-[#2c3e50] text-white">Color</th>
              <th className="p-3 border-b border-[#ddd] bg-[#2c3e50] text-white">Emotion / Mood</th>
              <th className="p-3 border-b border-[#ddd] bg-[#2c3e50] text-white">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-[#ddd]">
                <span className="inline-block w-[25px] h-[25px] align-middle rounded-full mr-[10px] border border-[#ccc]" style={{ backgroundColor: '#ffc0cb' }}></span>
                <strong>Pink</strong>
              </td>
              <td className="p-3 border-b border-[#ddd]">Happy (Suka Cita)</td>
              <td className="p-3 border-b border-[#ddd]">To celebrate joy and share your happiness with Allah.</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#ddd]">
                <span className="inline-block w-[25px] h-[25px] align-middle rounded-full mr-[10px] border border-[#ccc]" style={{ backgroundColor: '#add8e6' }}></span>
                <strong>Blue</strong>
              </td>
              <td className="p-3 border-b border-[#ddd]">Sad (Sedih)</td>
              <td className="p-3 border-b border-[#ddd]">To find comfort and healing during times of grief or loss.</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#ddd]">
                <span className="inline-block w-[25px] h-[25px] align-middle rounded-full mr-[10px] border border-[#ccc]" style={{ backgroundColor: '#e5ccac' }}></span>
                <strong>Light Brown</strong>
              </td>
              <td className="p-3 border-b border-[#ddd]">Thankful (Bersyukur)</td>
              <td className="p-3 border-b border-[#ddd]">To practice gratitude for the blessings in your life.</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#ddd]">
                <span className="inline-block w-[25px] h-[25px] align-middle rounded-full mr-[10px] border border-[#ccc]" style={{ backgroundColor: '#e0b0ff' }}></span>
                <strong>Purple</strong>
              </td>
              <td className="p-3 border-b border-[#ddd]">Anxious (Cemas)</td>
              <td className="p-3 border-b border-[#ddd]">To calm the heart and seek peace during worry or overthinking.</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-[#ddd]">
                <span className="inline-block w-[25px] h-[25px] align-middle rounded-full mr-[10px] border border-[#ccc]" style={{ backgroundColor: '#90ee90' }}></span>
                <strong>Green</strong>
              </td>
              <td className="p-3 border-b border-[#ddd]">Angry or Lonely</td>
              <td className="p-3 border-b border-[#ddd]">To cool the temper or find companionship in Allah's presence.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-center italic mt-[30px] text-gray-600">
        &quot;Verily, in the remembrance of Allah do hearts find rest.&quot; (13:28)
      </p>
    </div>
  );
};
