document.getElementById('sleep-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  let totalSleep = 0;

  days.forEach(day => {
    const hours = Number(form[day].value);
    totalSleep += hours;
  });

  const idealPerNight = Number(form['ideal'].value);
  const idealSleep = idealPerNight * 7;

  const resultDiv = document.getElementById('result');
  let resultText = '';

  if (totalSleep === idealSleep) {
    resultText = `Perfect! You slept exactly ${totalSleep} hours this week.`;
  } else if (totalSleep > idealSleep) {
    resultText = `You slept ${totalSleep - idealSleep} hour(s) more than needed.`;
  } else {
    resultText = `You're short ${idealSleep - totalSleep} hour(s) of sleep. Get some rest!`;
  }

  resultDiv.textContent = resultText;
});
