export default function FloatingActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 left-8 z-[100] bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Request Consultation"
    >
      <div className="relative">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <div className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          !
        </div>
      </div>
    </button>
  );
} 