import React from 'react';
import Badge from './Badge';
import certified from "../public/icons/quality.png";
import calendar from "../public/icons/calendar.png";
import partners from "../public/icons/partners.png";
const Badges = () => {
  return (
    <div className="flex flex-row gap-2 px-5">
      <Badge
          name="Certified"
          primary="bg-blue-400"
          secondary="bg-blue-100"
          icon={certified}
        />
        <Badge
          name="Upto Date"
          primary="bg-orange-500"
          secondary="bg-orange-100"
          icon={calendar}
        />
        <Badge
          name="Community"
          primary="bg-green-500"
          secondary="bg-green-100"
          icon={partners}
        />
    </div>
  )
}

export default Badges
