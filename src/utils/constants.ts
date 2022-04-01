export const DUMMY_PERSONAL_WORKOUTS = [
  {
    title: "Legs",
    exercises: [
      {
        name: "Squats",
        sets: 5,
      },
      {
        name: "Leg Press",
        sets: 3,
      },
      {
        name: "Hacksquat",
        sets: 4,
      },
      {
        name: "Leg Extension",
        sets: 3,
      },
      {
        name: "Calf Raises",
        sets: 4,
      },
    ],
    performedNumber: 4,
  },
  {
    title: "Chest & Triceps",
    exercises: [
      {
        name: "Bench Press",
        sets: 5,
      },
      {
        name: "Incline Press",
        sets: 3,
      },
      {
        name: "Dumbbell Flyes",
        sets: 4,
      },
      {
        name: "Triceps Extension ( Cable )",
        sets: 3,
      },
      {
        name: "Triceps Extension ( Bar )",
        sets: 4,
      },
      {
        name: "Single Arm Triceps Extension",
        sets: 4,
      },
    ],
    performedNumber: 6,
  },
  {
    title: "Back & Biceps",
    exercises: [
      {
        name: "Deadlift",
        sets: 5,
      },
      {
        name: "Lat Pulldown Wide Grip",
        sets: 3,
      },
      {
        name: "Seated Row",
        sets: 4,
      },
      {
        name: "Reverse Flyes",
        sets: 3,
      },
      {
        name: "Hammer Curls",
        sets: 4,
      },
      {
        name: "Bicep Curls",
        sets: 4,
      },
      {
        name: "EZ Bar Curls",
        sets: 4,
      },
    ],
    performedNumber: 7,
  },
];

export const DUMMY_WORKOUTS_DETAILS = [
  {
    workout: "Chest & Triceps",
    date: new Date(),
    exercises: [
      {
        exercise: "Bench Press",
        sets: 4,
        reps: [15, 12, 10, 8],
        weight: [50, 70, 80, 90],
      },
      {
        exercise: "Incline Press",
        sets: 3,
        reps: [12, 10, 8],
        weight: [40, 55, 70],
      },
      {
        exercise: "Dumbbell Flyes",
        sets: 5,
        reps: [12, 10, 8, 8, 8],
        weight: [12, 14, 14, 14, 16],
      },
    ],
  },
  {
    workout: "Back & Biceps",
    date: new Date(),
    exercises: [
      {
        exercise: "Deadlift",
        sets: 4,
        reps: [15, 12, 10, 8],
        weight: [50, 70, 80, 90],
      },
      {
        exercise: "Lat Pulldown Wide Grip",
        sets: 3,
        reps: [12, 10, 8],
        weight: [40, 55, 70],
      },
      {
        exercise: "Bar Row",
        sets: 5,
        reps: [12, 10, 8, 8, 8],
        weight: [12, 14, 14, 14, 16],
      },
    ],
  },
];
