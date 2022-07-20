import React, {Dispatch} from "react";
import './styles.scss';
import {MoviesAction, MoviesActionTypes, MoviesState} from "../../store/types";
import {connect, ConnectedProps, TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";

const Sorting: React.FC<SortingProps> = ({setSortingField}) => {
    const useSelector: TypedUseSelectorHook<MoviesState> = useReduxSelector;
    const data = useSelector(state => state);
    console.log("store", data)
    const handle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortingField(e.target.value);
    }
    return (
        <div className="sortingcontainer">
            <div className="sortingcontainer--text">SORT BY</div>
            <select className="sortingcontainer--select" onChange={handle}>
                <option className="sortingcontainer--select--option" value="">no sorting</option>
                <option className="sortingcontainer--select--option" value="release_date">Release date</option>
                <option className="sortingcontainer--select--option" value="title">Title</option>
                <option className="sortingcontainer--select--option" value="vote_average">Rating</option>
            </select>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<MoviesAction>) => {
    return {
        setSortingField: (field: string) =>
            dispatch({
                type: MoviesActionTypes.SET_SORTING_FIELDS,
                payload: field
            })
    }
}

const connector = connect(null, mapDispatchToProps);

type SortingProps = ConnectedProps<typeof connector>

export default connector(Sorting)
