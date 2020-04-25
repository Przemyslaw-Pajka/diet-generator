const generateDiet = (
  input,
  setIsGenerating,
  isGenerating,
  mealsCount,
  data,
  setMeal
) => {
  const dayName = [
    "poniedzialek",
    "wtorek",
    "sroda",
    "czwartek",
    "piatek",
    "sobota",
    "niedziela",
  ];

  const mealTypeName = ["sniadanie", "obiad", "podwieczorek", "kolacja"];
  let rands = [0, 0, 0, 0];
  let kcals = 0;
  let inputValue = parseInt(input.current.value);
  let newMeals = {};
  let dailyMeal = { sniadanie: {}, obiad: {}, podwieczorek: {}, kolacja: {} };
  for (let index in dayName) {
    newMeals[dayName[index]] = { ...dailyMeal };
  }

  if (isNaN(inputValue)) {
    alert("Uzupełnij prawidłowo pole: Zakładana liczba kalorii");
    return false;
  }
  setIsGenerating((isGenerating = true));

  const generateRandoms = () => {
    rands = Object.values(mealsCount).map((element) =>
      Math.floor(Math.random() * element)
    );
  };
  const generateNewMeals = (day) => {
    for (let index in mealTypeName) {
      newMeals[day][mealTypeName[index]] = {
        ...data[mealTypeName[index]].posilki[rands[index]],
      };
    }
  };
  const calculateTotalKcal = (day) => {
    for (let index in Object.values(newMeals[day])) {
      kcals += Object.values(newMeals[day])[index].kcal;
    }
  };
  const between = (x, min, max) => {
    return x >= min && x <= max;
  };

  const checkTotalKcal = (day) => {
    if (inputValue == kcals || between(kcals, inputValue - 100, inputValue)) {
      return null;
    } else {
      kcals = 0;
      generateRandoms(day);
      generateNewMeals(day);
      calculateTotalKcal(day);
      checkTotalKcal(day);
    }
  };

  if (inputValue > 3500 || inputValue < 2000) {
    alert(
      "Brak wystarczającej ilości posiłków w bazie dla wybranej ilości kcal. Proszę wybrać ilość kcal z przedziału 2000-3500."
    );
    setIsGenerating((isGenerating = false));
    return false;
  }

  dayName.map((element) => {
    generateRandoms(element);
    generateNewMeals(element);
    calculateTotalKcal(element);
    checkTotalKcal(element);
  });

  setTimeout(() => {
    setIsGenerating((isGenerating = false));
    setMeal((prevState) => {
      return { ...prevState, ...newMeals };
    });
  }, 1500);
};

export default generateDiet;
