import React from 'react';
import { Checkbox, Chip, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { ToggleFilterFunction } from '../../contexts/FilterContext';
import { Filter, FilterOption } from '../types/filter';
import { FilterSection } from './FilterSection';

export interface FilterListProps extends PropsWithChildren {
  title: string;
  filters: Filter[];
  options: FilterOption[];
  onToggle: ToggleFilterFunction;
}

export const isChecked = (filters: Filter[], field: string, value: string) =>
  !!filters.find((filter) => filter.field === field && filter.value === value);

export const FilterList = ({ title, filters, options, onToggle }: FilterListProps) => {
  return (
    <Stack direction="column">
      <Typography sx={{ m: 2 }} variant="h2">
        {title}
      </Typography>

      <FilterSection title="Chosen filters" defaultExpanded>
        {filters.map(({ field, value }) => (
          <Chip
            sx={{ m: 0.5 }}
            key={value}
            label={value}
            onDelete={() => onToggle({ field, value, enabled: false })}
          />
        ))}
        {!filters.length && (
          <Typography sx={{ marginY: 1, fontStyle: 'italic' }}>No filters applied</Typography>
        )}
      </FilterSection>
      {options.map(({ title, field, values }) => (
        <FilterSection key={field} title={title}>
          <FormGroup>
            {values.map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Checkbox
                    size="small"
                    checked={isChecked(filters, field, value)}
                    onChange={({ target: { checked: enabled } }) =>
                      onToggle({ field, value, enabled })
                    }
                    sx={{ paddingY: 0.5 }}
                  />
                }
                label={value}
                sx={{
                  color: 'grey.700',
                }}
              />
            ))}
          </FormGroup>
        </FilterSection>
      ))}
    </Stack>
  );
};
