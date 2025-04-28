import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const AppointmentCalendar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerToolbar = isMobile
    ? {
        left: 'prev,next',
        center: '',
        right: 'timeGridDay,timeGridWeek',
      }
    : {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      };

  return (
    <div className="p-4 overflow-y-scroll md:w-10/12 md:m-auto z-50">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={headerToolbar}
        events={[]}
        dateClick={(arg) => console.log('Turno seleccionado:', arg.dateStr)}
        editable={true}
        selectable={true}
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        height="auto"
      />
    </div>
  );
};

export default AppointmentCalendar;
