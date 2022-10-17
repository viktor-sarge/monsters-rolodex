import './search-box.styles.css';

const SearchBox = ({ placeholder, onChangeHandler, className }) => {
	return (
		<input
			className={`search-box ${className}`}
			type="search"
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
