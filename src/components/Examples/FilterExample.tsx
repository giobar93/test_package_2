import { FilterList } from "../Filter/FilterList";
import { useFilterContext } from "../hooks/useFilterContext";

export const FilterExample = () => {
  const { filters, toggleFilter } = useFilterContext();
  const options = [
    {
      title: 'Sports',
      field: 'sport',
      values: ['Athletics', 'Badminton', 'Baseball', 'Basketball', 'Football', 'Golf'],
    },
    {
      title: 'Competitions',
      field: 'competition',
      values: ['Ryder Cup', 'Premier League'],
    },
    {
      title: 'Status',
      field: 'status',
      values: ['Approved', 'Pending', 'None'],
    },
  ];

  return (
    <FilterList
      title="Production filters"
      filters={filters}
      options={options}
      onToggle={toggleFilter}
    />
  );
};
