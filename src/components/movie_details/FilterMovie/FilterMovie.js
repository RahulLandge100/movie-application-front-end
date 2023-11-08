import './FilterMovie.css';

let FilterMovie = (props) => {

    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value);
    }

    return (
    <div className="filter-area">
        <select name="isGenre" onChange={onFilterValueChanged}>
            <option value="">
              -- select a Genre --
            </option>
            <option value="Drama">Drama</option>
            <option value="Animation">Animation</option>
            <option value="Horror">Horror</option>
            <option value="History">History</option>
          </select>
    </div>)
}

export default FilterMovie;