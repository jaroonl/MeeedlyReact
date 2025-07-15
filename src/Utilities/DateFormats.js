const DateFormats = {
  agoFormat: function (inputDate) {
    const now = new Date();
    const date = new Date(inputDate);
    const seconds = Math.floor((now - date) / 1000);


    // function loops through array to see time differences starting from largest to smallest
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }

    return 'Just now';
  }
};

export default DateFormats;

// DateFormats.agoFormat(inputDate) takes the inputDate (which is your randomly generated post date) and compares it to the current time. It then calculates how much time has passed and expresses it in the most human-friendly unit — like:
// “4 days ago”
// “2 hours ago”
// “Just now”

// prompt: format 06/12/2005 how facebook or twitter would display it

// camelcase for inside functions
// otherwise its capital case (you cannot render html if it is not capital)