import React from 'react'

const SearchForm = () => {
    return (
        <div className="search-form">
            <form>
                <div className="form-group" style={{height: '60px'}}>
                    <input 
                        type="text"
                        className="form-control input-lg h-100"
                        placeholder="Type to Search Properties, towns ..."
                    />
                </div>
                <div className="form-group">
                <label htmlFor="town float-left">Town</label>
                    <select name="town" id="town" className="form-control">
                        <option value="marian">Marian</option>
                        <option value="8-miles">8 miles</option>
                        <option value="municipal">Calabar Municipal</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default SearchForm