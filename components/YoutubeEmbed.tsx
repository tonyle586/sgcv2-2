import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="w-full relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&playsinline=1&rel=0`}
        title="SGC Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;