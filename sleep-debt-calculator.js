// How many hours I slept this week
const getSleepHours = (day) => {
    switch (day){
      case 'Monday':
      return 8;
      case 'Tuesday':
      return 9;
      case 'Wednesday':
      return 7;
      case 'Thursday':
      return 6;
      case 'Friday':
      return 7;
      case 'Saturday':
      return 10;
      case 'Sunday':
      return 10;
    }
  };

  // Total of hours slept this week
  const getActualSleepHours = () => {
    Monday = getSleepHours('Monday')
    Tuesday = getSleepHours('Tuesday')
    Wednesday = getSleepHours('Wednesday')
    Thursday = getSleepHours('Thursday')
    Friday = getSleepHours('Friday')
    Saturday = getSleepHours('Saturday')
    Sunday = getSleepHours('Sunday')
    return (Monday + Tuesday + Wednesday + Thursday + Friday + Saturday + Sunday);
  }
  // Target of how many hours to sleep per week
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return(idealHours * 7)
  }
// Calculate if the user slept too much or too little and show them how to reach the ideal duration for next week
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const actualSleepDebt = (idealSleepHours - actualSleepHours)
    const actualSleepAbundance = (actualSleepHours - idealSleepHours)
    if(actualSleepHours === idealSleepHours){
      return ("Perfect amount of sleep!");}
    else if(actualSleepHours > idealSleepHours){
      return (`You got more sleep than was needed. You slept ${actualSleepAbundance} hour(s) too many.`);}
    else{
      return (`More sleep is needed! You need to sleep ${actualSleepDebt} more hours.`);
    }

    }

    console.log(calculateSleepDebt())
