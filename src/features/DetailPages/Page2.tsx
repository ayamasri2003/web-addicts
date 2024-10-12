import React from 'react';
import { useParams } from 'react-router-dom';

const Page2: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  // Function to convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : '';
  };

  // Example YouTube URL based on title
  const youtubeUrl =
    title === 'Patchi'
      ? 'https://youtu.be/_sQAYbJ-Dwc?si=FHe2KcdJjNVpvKgK' // Replace with actual video URL
      : ''; // Add more URLs for different titles if needed

  const embedUrl = getEmbedUrl(youtubeUrl); // Convert to embeddable URL

  const text =
    title === 'Patchi'
      ? `    Multilayer. Multisensory. Luxury Redefined.
      A modern premium chocolate world experience inspired by passion and fueled by innovation. Newness combined with heritage, savior-fair, quality, and chefmanship. A display of sensory pleasure and emotions. Relationships, stories, conversations, and memories lived together...sharing the wonder of the moment and generosity.
      
      The Web Addicts created an informative website for Patchi as well as an e-commerce portal with a Content Management System (CMS) that would allow them to regularly update content for their audience and target market.`
          .replace(/\n\s+/g, '\n') // Removes extra spaces after newlines
      : ''; // Add more texts for different titles if needed

  return (
    <div
      id="page2"
      className="flex items-center justify-center bg-white text-black min-h-screen"
    >
      <div className="flex flex-row items-center w-full max-w-screen">
        {embedUrl && (
          <div className="rounded-lg overflow-hidden shadow-lg w-1/2">
            <iframe
              width="100%"
              height="400"
              src={embedUrl}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="w-1/2 text-lg whitespace-pre-wrap italic text-left px-8">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Page2;
