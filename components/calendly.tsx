// components/CalendlyEmbed.js
import { InlineWidget } from 'react-calendly';
const CalendlyEmbed = () => {
     return (
          <>
               {/* Paste your Calendly embed code here */}
               <InlineWidget url=" https://calendly.com/jlkarhamba/30min"
                    styles={{
                         height: '100vh',
                    }}
               />
          </>
     );
};

export default CalendlyEmbed;
