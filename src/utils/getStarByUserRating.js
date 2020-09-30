export const getInteger = (num) => Math.floor(num)
export const getDecimal = (num) => num % 1

export const getStarByUserRating = (MIN_POINT, MAX_POINT) => (userRating) => {
  if (userRating < MIN_POINT || userRating > MAX_POINT) return null;
  
  const decimal = getDecimal(userRating);
  const integer = getInteger(userRating);

  const filledStarCnt = integer + (decimal >= 0.7 ? 1 : 0);
  const halfStarCnt = (0.3 <= decimal && decimal < 0.7) ? 1 : 0;
  const EmptyStarCnt = MAX_POINT - filledStarCnt - halfStarCnt;

  return [filledStarCnt, halfStarCnt, EmptyStarCnt];
}

export const getStarByUserRatingScale5 = getStarByUserRating(0, 5);