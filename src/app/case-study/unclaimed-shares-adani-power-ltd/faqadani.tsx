import { useReducer } from "react";

// Define types for state and action
type State = {
  [key: number]: boolean;
};

type Action = {
  type: string;
  index: number;
};

export default function FaqAdani() {
  // Define the reducer function outside the main render logic
  const faqReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "TOGGLE_FAQ":
        return {
          ...state,
          [action.index]: !state[action.index],
        };
      default:
        return state;
    }
  };

  // Initialize useReducer with state shape
  const [state, dispatch] = useReducer(faqReducer, {
    0: false,
    1: false,
  });

  return (
    <div className="max-w-7xl mx-auto sm:px-8 px-4">
      <div className="gap-6">
        <div className="space-y-6">
          {/* Accordion 1 */}
          <div className="bg-white rounded-lg border-[#aaeecb] border-2 p-2">
            <div
              className="toggle-button w-full text-base font-semibold text-left text-gray-700 flex items-center"
              onClick={() => dispatch({ type: "TOGGLE_FAQ", index: 0 })}
            >
              Q.1 Why my shares transferred to IEPF ?
            </div>

            {state[0] && (
              <div className="text-gray-500 p-4 text-justify">
                If the shareholder is unresponsive to all communication attempts
                made by JSW Steel Ltd. regarding the unclaimed dividends and
                shares for a period of 7 years, then the holdings are
                transferred to the Investor Education and Protection Fund (IEPF
                ) Authority.
              </div>
            )}
          </div>

          {/* Accordion 2 */}
          <div className="bg-white rounded-lg border-[#aaeecb] border-2 p-2">
            <div
              className="toggle-button w-full font-semibold text-left text-gray-700 flex items-center text-base"
              onClick={() => dispatch({ type: "TOGGLE_FAQ", index: 1 })}
            >
              Q.2 How can I claim my shares from IEPF ?
            </div>
            {state[1] && (
              <div className="text-gray-500 p-4 text-justify">
                If you want to claim your IEPF shares, Clearclaim Ventures Pvt
                Ltd. Can help you to recover them. If your shares have been
                transferred to the Investor Education and Protection Fund (IEPF)
                due to unclaimed dividends or inactivity, Clearclaim Ventures
                Pvt Ltd. can help you navigate the recovery process smoothly and
                efficiently. We specialize in assisting individuals with the
                step-by-step process of reclaiming their shares from IEPF,
                including guiding you through the submission of the IEPF-5 claim
                form, ensuring all required documents are in order, and
                communicating directly with the IEPF authority on your behalf.
                Whether your shares are in demat or physical form, We will
                handle the paperwork, track the progress of your claim, and
                ensure that your shares and any unclaimed dividends are returned
                to you in a timely manner, making the entire process
                hassle-free. Let me take care of the technicalities, so you can
                focus on what matters most.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
