import React, { Component } from "react";

class MovieBookingSystem extends Component {
  state = {
    seats: [
      { id: 1, row: "A", column: 1, isBooked: false, shouldExclude: false },
      { id: 2, row: "A", column: 2, isBooked: false, shouldExclude: false },
      { id: 3, row: "A", column: 3, isBooked: false, shouldExclude: false },
      { id: 4, row: "A", column: 4, isBooked: false, shouldExclude: false },
      { id: 5, row: "A", column: 5, isBooked: false, shouldExclude: false },
      { id: 6, row: "A", column: 6, isBooked: false, shouldExclude: false },
      { id: 7, row: "B", column: 1, isBooked: false, shouldExclude: false },
      { id: 8, row: "B", column: 2, isBooked: false, shouldExclude: false },
      { id: 9, row: "B", column: 3, isBooked: false, shouldExclude: false },
      { id: 10, row: "B", column: 4, isBooked: false, shouldExclude: false },
      { id: 11, row: "B", column: 5, isBooked: false, shouldExclude: false },
      { id: 12, row: "B", column: 6, isBooked: false, shouldExclude: false },
      { id: 13, row: "C", column: 1, isBooked: false, shouldExclude: false },
      { id: 14, row: "C", column: 2, isBooked: false, shouldExclude: false },
      { id: 15, row: "C", column: 3, isBooked: false, shouldExclude: false },
      { id: 16, row: "C", column: 4, isBooked: false, shouldExclude: false },
      { id: 17, row: "C", column: 5, isBooked: false, shouldExclude: false },
      { id: 18, row: "C", column: 6, isBooked: false, shouldExclude: false },
      { id: 19, row: "D", column: 1, isBooked: false, shouldExclude: false },
      { id: 20, row: "D", column: 2, isBooked: false, shouldExclude: false },
      { id: 21, row: "D", column: 3, isBooked: false, shouldExclude: false },
      { id: 22, row: "D", column: 4, isBooked: false, shouldExclude: false },
      { id: 23, row: "D", column: 5, isBooked: false, shouldExclude: false },
      { id: 24, row: "D", column: 6, isBooked: false, shouldExclude: false },
      { id: 25, row: "E", column: 1, isBooked: false, shouldExclude: false },
      { id: 26, row: "E", column: 2, isBooked: false, shouldExclude: false },
      { id: 27, row: "E", column: 3, isBooked: false, shouldExclude: false },
      { id: 28, row: "E", column: 4, isBooked: false, shouldExclude: false },
      { id: 29, row: "E", column: 5, isBooked: false, shouldExclude: false },
      { id: 30, row: "E", column: 6, isBooked: false, shouldExclude: false },
      { id: 31, row: "F", column: 1, isBooked: false, shouldExclude: false },
      { id: 32, row: "F", column: 2, isBooked: false, shouldExclude: false },
      { id: 33, row: "F", column: 3, isBooked: false, shouldExclude: false },
      { id: 34, row: "F", column: 4, isBooked: false, shouldExclude: false },
      { id: 35, row: "F", column: 5, isBooked: false, shouldExclude: false },
      { id: 36, row: "F", column: 6, isBooked: false, shouldExclude: false }
    ],
    selectedSeats: [],
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleSeatSelection = (seatId) => {
    this.setState((prevState) => {
      console.log("Previous seats state:", prevState.seats);
  
      const updatedSeats = prevState.seats.map((seat) => {
        if (seat.id === seatId) {
          console.log(`Toggling seat ${seatId}, current isBooked: ${seat.isBooked}`);
          return {
            ...seat,
            isBooked: !seat.isBooked // Toggle the booking status
          };
        }
        return seat;
      });
  
      console.log("Updated seats state:", updatedSeats);
  
      const updatedSelectedSeats = updatedSeats.filter(
        (seat) => seat.isBooked && !seat.shouldExclude
      );
  
      console.log("Updated selected seats:", updatedSelectedSeats);
  
      return {
        seats: updatedSeats,
        selectedSeats: updatedSelectedSeats
      };
    });
  };
  
  
  

  

  render() {
    const { seats, selectedSeats } = this.state;

    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Movie Booking System
        </h1>
        <div className="grid grid-cols-6 gap-4 justify-items-center">
          {seats.map((seat) => (
            <svg
              key={seat.id}
              className={`cursor-pointer ${
                seat.isBooked ? "text-red-500" : "text-green-500"
              } w-12 h-12`}
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => {
                if (!seat.isBooked) {
                  this.handleSeatSelection(seat.id);
                }
              }}
            >
              <path
                fillRule="evenodd"
                d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Selected Seats:
          </h2>
          {selectedSeats.length > 0 ? (
            <ul
              className="list-disc pl-4 flex justify-center gap-5 font-bold text-xl"
              style={{ listStyleType: "none" }}
            >
              {selectedSeats.map((seat) => (
                <li key={seat.id}>
                  {seat.row}-{seat.column}
                </li>
              ))}
            </ul>
          ) : (
            <p>No seats selected.</p>
          )}
        </div>
        <div className="container mx-auto p-8">
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.openModal}
            >
              Book Tickets
            </button>

            {this.state.isOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>

                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div className="inline-block  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-green-300 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3  sm:mt-0 sm:text-left ">
                          <div className="mt-2 ">
                            <h2 className="text-xl font-bold mb-4">
                              Selected Seats:
                            </h2>
                            {selectedSeats.length > 0 ? (
                              <ul
                                className="list-disc pl-4 flex  gap-5 font-bold text-xl"
                                style={{ listStyleType: "none" }}
                              >
                                {selectedSeats.map((seat) => (
                                  <li key={seat.id}>
                                    {seat.row}-{seat.column}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p>No seats selected.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      {selectedSeats.length > 0 ? (
                        <button
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-dark font-medium text-white hover:bg-blue-700 "
                          onClick={this.closeModal}
                        >
                          Proceed
                        </button>
                      ) : (
                        <button
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={this.closeModal}
                        >
                          Close
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieBookingSystem;
