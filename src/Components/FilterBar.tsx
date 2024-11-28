import React from 'react';

interface FilterBarProps {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  uniqueCategories: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  categoryFilter,
  setCategoryFilter,
  uniqueCategories,
}) => {
  return (
    <div className="category-filters mt-4">
      <div className="btn-group mb-2" role="group" aria-label="Category Filter">
        <div className="button-container">
          <button
            type="button"
            className={`btn ${
              categoryFilter === 'All' ? 'btn-primary' : 'btn-secondary'
            }`}
            onClick={() => setCategoryFilter('All')}
          >
            All
          </button>
          {uniqueCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn p-2 ${
                categoryFilter === category ? 'btn-primary' : 'btn-secondary'
              }`}
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
