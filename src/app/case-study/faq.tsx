import { useReducer } from "react";

type State = {
  [key: number]: boolean;
};

type Action = {
  type: string;
  index: number;
};

export default function Faq() {
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

  // Initialize useReducer
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
              Q.1 Why my shares transferred to IEPF?
            </div>

            {state[0] && (
              <div className="text-gray-500 p-4">
                As per the government rule, all the dividends on shares that
                have not been claimed for seven or more consecutive years are
                required to be transferred to Investor Education and Protection
                Fund (IEPF) by the respective company.{" "}
              </div>
            )}
          </div>

          {/* Accordion 2 */}
          <div className="bg-white rounded-lg border-[#aaeecb] border-2 p-2">
            <div
              className="toggle-button w-full font-semibold text-left text-gray-700 flex items-center text-base"
              onClick={() => dispatch({ type: "TOGGLE_FAQ", index: 1 })}
            >
              Q.2 How can I claim my shares from IEPF?
            </div>
            {state[1] && (
              <div className="text-gray-500 p-4">
                If you want to claim your IEPF shares, Clearclaim Ventures Pvt
                Ltd can help you recover them. If your shares have been
                transferred to the Investor Education and Protection Fund (IEPF)
                due to unclaimed dividends or inactivity, Clearclaim Ventures
                Pvt Ltd can help you navigate the recovery process smoothly.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
