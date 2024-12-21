import { useCalcModeModalStore, useCalcOptionModalStore, useScoreModalStore } from '@/store/modals';
import React, { useState } from 'react';
import Options from './Components/Options';
import { calc } from '@/types/calc';
import GraphingCalculator from '../GraphingCalculator';

const CalcOption = () => {
  const isOpen = useCalcOptionModalStore((state) => state.isOpen);
  const closeModal = useCalcOptionModalStore((state) => state.closeModal);
  const calcMode = useCalcModeModalStore((state) => state.mode);
  const setCalcMode = useCalcModeModalStore((state) => state.setMode);

  const handleChangeCalcMode = (calcMode: calc) => {
    setCalcMode(calcMode);
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-12 w-[800px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold">Calculator Options</h2>
            <p className="text-sm text-gray-500">
              Select one of the following options and start working 🚀
            </p>
            <Options
              handleClick={() => handleChangeCalcMode("graphing")}
              title="Graphing"
              description="Use this to graph equations"
              icon={
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45px"
                  height="45px"
                >
                  <path d="M29.5 7c-1.381 0-2.5 1.12-2.5 2.5 0 0.284 0.058 0.551 0.144 0.805l-6.094 5.247c-0.427-0.341-0.961-0.553-1.55-0.553-0.68 0-1.294 0.273-1.744 0.713l-4.774-2.39c-0.093-1.296-1.162-2.323-2.482-2.323-1.38 0-2.5 1.12-2.5 2.5 0 0.378 0.09 0.732 0.24 1.053l-4.867 5.612c-0.273-0.102-0.564-0.166-0.873-0.166-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5 0-0.332-0.068-0.649-0.186-0.939l4.946-5.685c0.236 0.073 0.48 0.124 0.74 0.124 0.727 0 1.377-0.316 1.834-0.813l4.669 2.341c0.017 1.367 1.127 2.471 2.497 2.471 1.381 0 2.5-1.119 2.5-2.5 0-0.044-0.011-0.086-0.013-0.13l6.503-5.587c0.309 0.137 0.649 0.216 1.010 0.216 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z"></path>
                </svg>
              }
            />
            <Options
              handleClick={() => handleChangeCalcMode("regular")}
              title="Regular"
              description="Use this for everyday calculations"
              icon={
                <svg
                  width="45px"
                  height="45px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="#000000"
                >
                  {/* SVG content */}
                </svg>
              }
            />
            <div className="mt-4 flex">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {calcMode == "graphing" && (
        <div>
          <GraphingCalculator />
        </div>
      )}
    </div>
  );
};

export default CalcOption;
