const monthYear = document.getElementById('monthYear');
    const datesContainer = document.getElementById('dates');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');

    let currentDate = new Date();

    // function renderCalendar() {
    //     const year = currentDate.getFullYear();
    //     const month = currentDate.getMonth();

    //     monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    //     // Clear previous dates
    //     datesContainer.innerHTML = '';

    //     // Get the first day and last day of the month
    //     const firstDay = new Date(year, month, 1).getDay();
    //     const lastDate = new Date(year, month + 1, 0).getDate();

    //     // Add empty divs for days of the previous month
    //     for (let i = 0; i < firstDay; i++) {
    //         datesContainer.innerHTML += '<div></div>';
    //     }

    //     // Add days of the current month
    //     for (let date = 1; date <= lastDate; date++) {
    //         datesContainer.innerHTML += `<div>${date}</div>`;
    //     }
    // }

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

        // Clear previous dates
        datesContainer.innerHTML = '';

        // Get the first day and last day of the month
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Add empty divs for days of the previous month
        for (let i = 0; i < firstDay; i++) {
            datesContainer.innerHTML += '<div></div>';
        }

        // Add days of the current month
        for (let date = 1; date <= lastDate; date++) {
            const currentDateObj = new Date(year, month, date);
            const isToday = currentDateObj.toDateString() === new Date().toDateString();

            datesContainer.innerHTML += `<div class="${isToday ? 'today' : ''}">${date}</div>`;
        }
    }


    prevMonth.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonth.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Initial render
    renderCalendar();