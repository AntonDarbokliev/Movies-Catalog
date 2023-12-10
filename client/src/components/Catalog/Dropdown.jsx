export const Dropdown = ({onSortChange,value}) => {
return (
<div id="filterDropdown">
<label htmlFor="sort">Sort By: </label>
<select name="sort" id="sort" onChange={onSortChange} value={value}>
  <option value="" disabled hidden>Select Sorting Option</option>
  <option value="yearNewest">Year - Newest to Oldest</option>
  <option value="yearOldest">Year - Oldest to Newest</option>
  <option value="a-z">Alphabetically - A-Z</option>
  <option value="z-a">Alphabetically - Z-A</option>
</select>
</div>
)
}

