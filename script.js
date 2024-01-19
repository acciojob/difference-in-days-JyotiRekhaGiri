var dateDiffInDays = function (date1, date2) {
  //   write your code here
	// Parse the input dates
  const startDate = new Date(Date.UTC(...date1.split('-')));
  const endDate = new Date(Date.UTC(...date2.split('-')));

  // Calculate the difference in milliseconds
  const timeDiff = endDate - startDate;

  // Convert the difference to days
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
