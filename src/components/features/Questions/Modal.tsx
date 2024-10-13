import useScoreStore from "@/store/score";
import React from "react";

interface ScoreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ScoreModal: React.FC<ScoreModalProps> = ({ isOpen, onClose }) => {
    const score = useScoreStore((state) => state.score);

    return (    
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Score Message */}
                        <p className="text-center text-lg">
                            You got <span className="font-bold">{score}</span> score
                        </p>
                        
                    </div>
                </div>
            )}
        </>
    );
};

export default ScoreModal;