import dayjs from "dayjs";

export function getMonth(year = dayjs().year(), month = dayjs().month())  {
  month = Math.floor(month);
  // const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  // console.log(new Date(year, 24, 1));
  let currentMonthCount = 0 - firstDayOfTheMonth;
  // console.log("Call " + year + " " + firstDayOfTheMonth + " " + currentMonthCount);
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export const hotelPriceRangeMatrix = () => {
  const startDate = new Date(new Date().getFullYear(), 0, 1);
  const endDate = new Date(
    new Date().getFullYear() + 2,
    Number(11),
    Number(31)
  );
  console.log(startDate.toLocaleDateString());
  console.log(endDate.toLocaleDateString());

  var threeYearPriceList: any[] = [
    [[], [], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], [], []],
  ];
  for (
    let currentDate = startDate;
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    var yearVal = currentDate.getFullYear(),
      monthVal = currentDate.getMonth(),
      dayVal = currentDate.getDate();
    var yearIdx = yearVal - new Date().getFullYear();

    threeYearPriceList[yearIdx][monthVal].push({
      plan_Base_Price: 0,
      plan_Child_Price: 0,
      plan_Infant_Price: 0,
    });
  }

  return threeYearPriceList;
};
