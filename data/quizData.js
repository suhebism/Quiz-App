// data/quizData.js
const quizData = {
    subjects: [
      {
        id: 'math',
        name: 'Mathematics',
        img:'https://images.unsplash.com/photo-1726503031918-9943eebf40da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        chapters: [
          {
            id: 'algebra',
            name: 'Algebra',
            img:'https://images.unsplash.com/photo-1726503015737-43b3d1009351?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            levels: [
              {
                id: 'level1',
                name: 'Beginner',
                questions: [
                  {
                    question: 'What is 2 + 2?',
                    options: ['3', '4', '5', '6'],
                    answer: '4',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is 3 * 3?',
                    options: ['6', '7', '8', '9'],
                    answer: '9',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is 5 - 2?',
                    options: ['2', '3', '4', '5'],
                    answer: '3',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is 6 / 2?',
                    options: ['2', '3', '4', '5'],
                    answer: '3',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the square root of 16?',
                    options: ['2', '4', '8', '16'],
                    answer: '4',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                ],
              },
              {
                id: 'level2',
                name: 'Intermediate',
                questions: [
                  {
                    question: 'What is the value of x if 2x + 3 = 7?',
                    options: ['1', '2', '3', '4'],
                    answer: '2',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is (3x + 5) - 2x?',
                    options: ['x + 5', 'x + 3', 'x + 2', '2x + 5'],
                    answer: 'x + 5',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is 9x + 3 - 2x?',
                    options: ['7x + 3', '5x + 3', '9x + 2', '7x + 2'],
                    answer: '7x + 3',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'Solve for x: 4(x - 1) = 12',
                    options: ['3', '4', '5', '6'],
                    answer: '4',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the slope of the line y = 2x + 3?',
                    options: ['1', '2', '3', '0'],
                    answer: '2',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                ],
              },
              {
                id: 'level3',
                name: 'Advance',
                questions: [
                  {
                    question: 'What is 2 + 4?',
                    options: ['3', '4', '5', '6'],
                    answer: '6',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is 3 * 3?',
                    options: ['6', '7', '8', '9'],
                    answer: '9',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is 5 - 2?',
                    options: ['2', '3', '4', '5'],
                    answer: '3',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is 6 / 2?',
                    options: ['2', '3', '4', '5'],
                    answer: '3',
                    
                  },
                  {
                    question: 'What is the square root of 16?',
                    options: ['2', '4', '8', '16'],
                    answer: '4',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                ],
              },
              // Add more levels here...
            ],
          },
          {
            id: 'geometry',
            name: 'Geometry',
            img:'https://images.unsplash.com/photo-1582258514015-1be36bef6e19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            levels: [
              {
                id: 'level1',
                name: 'Beginner',
                questions: [
                  {
                    question: 'What is the area of a rectangle with length 5 and width 4?',
                    options: ['9', '20', '15', '12'],
                    answer: '20',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'How many sides does a triangle have?',
                    options: ['2', '3', '4', '5'],
                    answer: '3',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the circumference of a circle with radius 1?',
                    options: ['3.14', '6.28', '1', '0'],
                    answer: '6.28',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the sum of the angles in a triangle?',
                    options: ['90 degrees', '180 degrees', '360 degrees', '270 degrees'],
                    answer: '180 degrees',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the formula for the area of a circle?',
                    options: ['πr^2', '2πr', 'r^2', '2r'],
                    answer: 'πr^2',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                ],
              },
              // Add more levels here...
            ],
          },
        ],
      },
      {
        id: 'science',
        name: 'Science',
        img:'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        chapters: [
          {
            id: 'physics',
            name: 'Physics',
            levels: [
              {
                id: 'level1',
                name: 'Beginner',
                questions: [
                  {
                    question: 'What is the unit of force?',
                    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
                    answer: 'Newton',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the formula for speed?',
                    options: ['Distance x Time', 'Distance / Time', 'Time / Distance', 'Speed x Time'],
                    answer: 'Distance / Time',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the acceleration due to gravity?',
                    options: ['9.8 m/s²', '9.8 km/h²', '8.9 m/s²', '10 m/s²'],
                    answer: '9.8 m/s²',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the symbol for velocity?',
                    options: ['v', 's', 'a', 'F'],
                    answer: 'v',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the law of inertia?',
                    options: ['Objects in motion stay in motion', 'Force equals mass times acceleration', 'Energy cannot be created or destroyed', 'For every action, there is an equal and opposite reaction'],
                    answer: 'Objects in motion stay in motion',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                ],
              },
              // Add more levels here...
            ],
          },
          {
            id: 'chemistry',
            name: 'Chemistry',
            levels: [
              {
                id: 'level1',
                name: 'Beginner',
                questions: [
                  {
                    question: 'What is the chemical symbol for water?',
                    options: ['H2O', 'O2', 'CO2', 'NaCl'],
                    answer: 'H2O',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the pH level of water?',
                    options: ['0', '7', '14', '10'],
                    answer: '7',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the process of a solid turning into a liquid called?',
                    options: ['Sublimation', 'Evaporation', 'Condensation', 'Melting'],
                    answer: 'Melting',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the periodic table?',
                    options: ['List of elements', 'List of compounds', 'List of reactions', 'List of molecules'],
                    answer: 'List of elements',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                  {
                    question: 'What is the chemical symbol for sodium?',
                    options: ['Na', 'S', 'So', 'K'],
                    answer: 'Na',
                    feedBack: [
                      {
                        forCorrect: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
                        forWrong: "About Subject : is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                      }
                    ]
                    
                  },
                ],
              },
              // Add more levels here...
            ],
          },
        ],
      },
    ],
  };
  
  export default quizData;
  