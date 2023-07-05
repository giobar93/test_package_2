import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface FilterSectionProps extends PropsWithChildren {
  title: string;
  defaultExpanded?: boolean;
}

export const FilterSection = ({ title, defaultExpanded, children }: FilterSectionProps) => {
  return (
    <Accordion square disableGutters defaultExpanded={defaultExpanded} elevation={0}>
      <AccordionSummary sx={{ minHeight: '12px', marginY: '2px' }} expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ minHeight: '64px', paddingY: 1 }}>{children}</AccordionDetails>
    </Accordion>
  );
};
