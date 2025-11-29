'use client';

import { Timeline } from '@mantine/core';
import { Company } from 'components/company';
import { COMPANY } from 'constants/company';

export default function Career() {
  return (
    <Timeline bulletSize={24}>
      {COMPANY.map(({ uuid, name, date, resources }, index) => {
        return (
          <Company
            key={uuid}
            uuid={uuid}
            name={name}
            date={date}
            index={index}
            resources={resources}
          />
        );
      })}
    </Timeline>
  );
}
