const calendarDiv = document.getElementById("calendar");
const socket = io();
const initialDate = new Date();
const calendar = new FullCalendar.Calendar(calendarDiv, {
    initialView: 'dayGridMonth',
    initialDate: initialDate,
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    select: (info) => {
        socket.emit("selectDates",info);
        console.dir(info);
        dateDebut = info.startStr;
        dateFin = info.endStr;
        console.log("select");
      },
   /*  dateClick: (info) => {
        dateDebut = info.startStr;
        dateFin = info.endStr;
        console.log("click");
        // change the day's background color just for fun
        //info.dayEl.style.backgroundColor = 'red';
      }, */
    events: [
      {
        title: 'All Day Event',
        start: '2024-10-01'
      },
      {
        title: 'Long Event',
        start: '2024-10-07',
        end: '2024-10-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2024-10-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2024-10-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2024-10-11',
        end: '2024-10-13'
      },
      {
        title: 'Meeting',
        start: '2024-10-12T10:30:00',
        end: '2024-10-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2024-10-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2024-10-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2024-10-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2024-10-28'
      }
    ]
  });

  calendar.render();
  
 